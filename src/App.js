import React, { useEffect, useState } from 'react';

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
    console.error('Error loading module:', error)
    // throw error
  }
}

const RemoteButton = React.lazy(() => loadModule(
  'http://localhost:3002/remoteEntry.js',
  'app2',
  './Button'
))

const App = () => (
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>App 1</h2>
      <React.Suspense fallback={<p>RemoteButton is not available</p>}>
        <RemoteButton />
      </React.Suspense>
    </div>
  );

export default App;
