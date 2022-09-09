const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require("./package.json").dependencies;
module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            // make all svg images to work in IE
            iesafe: true,
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      remotes: {
        app2: `app2@http://localhost:3002/remoteEntry.js`,
        app3: `app3@http://localhost:3003/remoteEntry.js`,
      },
      shared: { 
        ...deps,
        react: { 
          singleton: true, 
          requiredVersion: deps.react,
        }, 
          'react-dom': { 
            singleton: true, 
            requiredVersion: deps["react-dom"] 
          },
        },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

// function getRemoteEntryUrl(port) {
//   const { CODESANDBOX_SSE, HOSTNAME = '' } = process.env;

//   // Check if the example is running on codesandbox
//   // https://codesandbox.io/docs/environment
//   if (!CODESANDBOX_SSE) {
//     return `//localhost:${port}/remoteEntry.js`;
//   }

//   const parts = HOSTNAME.split('-');
//   const codesandboxId = parts[parts.length - 1];

//   return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
// }
