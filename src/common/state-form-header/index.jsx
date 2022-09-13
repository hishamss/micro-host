import React from 'react'
import './index.css'
import {
    Link, useLocation
  } from "react-router-dom";
  import {
    anchorProperties,
    Header,
    getNativeProps
  } from "@uitk/react";
  import './index.css'
 
  const useCurrentRoute = () => {
    const { pathname: route } = useLocation();
    return route;
  };
  
  // define our custom link so client side routing works
  const RoutableLink= item => {
    const { children, url } = item;
    const anchorProps = getNativeProps(item, anchorProperties);
    return (
      <Link to={url} {...anchorProps}>
        {children}
      </Link>
    );
  };
  const stateNavigationConfig = {
    linkAs: RoutableLink,
    links: [
      {
        label: "My Requests",
        url: "/state/ticket"
        
      },
      {
        label: "Claim",
        url: "/state/search"
        
      },
      {
        label: "Provider",
        url: "/state/provider"
        
      },
      {
        label: "Bulk Request",
        url: "/state/bulk"
        
      },
      {
        label: "TN Quit",
        url: "/state/quit"
      }
    ],
  };
const StateFormHeader = () => {
    return (
    <Header
    className='correctionsNavigation'
      globalNavigation={stateNavigationConfig}
      useLocation={useCurrentRoute}
      skipLink={{ id: "cms" }}
    />
    );

}

export default StateFormHeader