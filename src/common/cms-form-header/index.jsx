import React from 'react'
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
  const cmsNavigationConfig = {
    linkAs: RoutableLink,
    links: [
      {
        label: "My Requests",
        url: "/cms/x12enc-ticket"
        
      },
      {
        label: "Claim",
        url: "/cms/x12enc-search"
        
      },
      {
        label: "Provider",
        url: "/cms/x12enc-provider"
        
      },
      {
        label: "Bulk Request",
        url: "/cms/x12enc-bulk"
        
      },
    ],
  };
const CMSFormHeader = () => {
    return (
    <Header
    className='correctionsNavigation'
      globalNavigation={cmsNavigationConfig}
      useLocation={useCurrentRoute}
      skipLink={{ id: "cms" }}
    />
    );

}
export default CMSFormHeader