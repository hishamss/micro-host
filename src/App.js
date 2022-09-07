import React from 'react';
import HomeTable from './table'
import GlobalHeader from './common/header'
import Footer from './common/footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Toolkit} from "@uitk/react";
import "@uitk/themes/optum/fonts.css";
import styled from "styled-components";
// const RemoteButton = React.lazy(() => import('app2/Button'));
const loadScope = (url, scope) => {
  const element = document.createElement('script');
  const promise = new Promise((resolve, reject) => {
    element.src = url
    element.type = 'text/javascript'
    element.async = true
    element.onload = () => resolve(window[scope])
    element.onerror = reject
  })
  document.head.appendChild(element)
  promise.finally(() => document.head.removeChild(element))
  return promise
}

const loadModule = async (url, scope, module) => {
  try {
    const container = await loadScope(url, scope)
    await __webpack_init_sharing__('default')
    await container.init(__webpack_share_scopes__.default)
    const factory = await container.get(module)
    return factory()
  } catch (error) {
    //console.error('Error loading module:', error)
    // throw error
  }
}

const ReportsTable = React.lazy(() => loadModule(
  'http://localhost:3002/remoteEntry.js',
  'app2',
  './ReportsTable'
))

const MappingTable = React.lazy(() => loadModule(
  'http://localhost:3003/remoteEntry.js',
  'app3',
  './MappingTable'
))

const App = () => (
  <Toolkit appId="@uitk/react-starter-kit">
  <BrowserRouter>
  <div>
    <GlobalHeader/>
    <Routes>
        <Route path="/" element={<HomeTable />} />
        <Route path="/reports" element={ <React.Suspense fallback={<p>Reports table is not available</p>}>
        <ReportsTable />
      </React.Suspense>} />
      <Route path="/mapping" element={ <React.Suspense fallback={<p>Mapping table is not available</p>}>
        <MappingTable />
      </React.Suspense>} />
        <Route path="/*" element={<HomeTable />} />
      </Routes>

      <Footer />
     
    </div>
    </BrowserRouter>
    </Toolkit>
  );

export default App;
