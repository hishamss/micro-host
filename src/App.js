import React from 'react';
import HomeTable from './table'
import GlobalHeader from './common/header'
import StateFormHeader from './common/state-form-header'
import CMSFormHeader from './common/cms-form-header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Toolkit} from "@uitk/react";
import "@uitk/themes/optum/fonts.css";



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

const StateForm = React.lazy(() => loadModule(
  'http://localhost:3004/remoteEntry.js',
  'corrections',
  './StateForm'
))

const CMSForm = React.lazy(() => loadModule(
  'http://localhost:3004/remoteEntry.js',
  'corrections',
  './CMSForm'
))

const App = () => {
return (
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
      <Route path="/state/ticket" element={ 
      <>
      <StateFormHeader/>
      <React.Suspense fallback={<p>State is not available</p>}>
        <StateForm stateFormHeader="My Requests"/>
        {/* <StateForm/> */}
      </React.Suspense>
      </>
      } />
      <Route path="/state/search" element={ 
      <>
      <StateFormHeader/>
      <React.Suspense fallback={<p>State is not available</p>}>
        <StateForm stateFormHeader="Find Claim(s)"/>
        {/* <StateForm/> */}
      </React.Suspense>
      </>
      } />
      <Route path="/state/provider" element={ 
      <>
      <StateFormHeader/>
      <React.Suspense fallback={<p>State is not available</p>}>
        <StateForm stateFormHeader="Find Provider(s)"/>
        {/* <StateForm/> */}
      </React.Suspense>
      </>
      } />
      <Route path="/state/bulk" element={ 
      <>
      <StateFormHeader/>
      <React.Suspense fallback={<p>State is not available</p>}>
        <StateForm stateFormHeader="Bulk Request"/>
        {/* <StateForm/> */}
      </React.Suspense>
      </>
      } />
      <Route path="/state/quit" element={ 
      <>
      <StateFormHeader/>
      <React.Suspense fallback={<p>State is not available</p>}>
        <StateForm stateFormHeader="Quit Claim(s)"/>
        {/* <StateForm/> */}
      </React.Suspense>
      </>
      } />
      <Route path="/state" element={ 
        <>
          <StateFormHeader/>
      <React.Suspense fallback={<p>State is not available</p>}>
        <StateForm stateFormHeader="Find Claim(s)"/>
        {/* <StateForm/> */}
      </React.Suspense>
      </>
      } />
      <Route path="/cms/x12enc-ticket" element={ 
      <>
      <CMSFormHeader/>
      <React.Suspense fallback={<p>cms is not available</p>}>
        <CMSForm cmsFormHeader="My Requests"/>
        {/* <cmsForm/> */}
      </React.Suspense>
      </>
      } />
      <Route path="/cms/x12enc-search" element={ 
      <>
      <CMSFormHeader/>
      <React.Suspense fallback={<p>cms is not available</p>}>
        <CMSForm cmsFormHeader="Find Claim(s)"/>
        {/* <cmsForm/> */}
      </React.Suspense>
      </>
      } />
      <Route path="/cms/x12enc-provider" element={ 
      <>
      <CMSFormHeader/>
      <React.Suspense fallback={<p>cms is not available</p>}>
        <CMSForm cmsFormHeader="Find Provider(s)"/>
        {/* <cmsForm/> */}
      </React.Suspense>
      </>
      } />
      <Route path="/cms/x12enc-bulk" element={ 
      <>
      <CMSFormHeader/>
      <React.Suspense fallback={<p>cms is not available</p>}>
        <CMSForm cmsFormHeader="Bulk Request"/>
        {/* <cmsForm/> */}
      </React.Suspense>
      </>
      } />
      <Route path="/cms" element={ 
        <>
          <CMSFormHeader/>
      <React.Suspense fallback={<p>cms is not available</p>}>
        <CMSForm cmsFormHeader="Find Claim(s)"/>
        {/* <cmsForm/> */}
      </React.Suspense>
      </>
      } />
        <Route path="/*" element={<HomeTable />} />
      </Routes>

      {/* <Footer /> */}
     
    </div>
    </BrowserRouter>
    </Toolkit>
  );
}

export default App;
