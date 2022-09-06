import React from "react";
import "./index.css";
import {
    Link, useLocation
  } from "react-router-dom";
  import {
    anchorProperties,
    Button,
    Header,
    getNativeProps,
    LinkProps,
  } from "@uitk/react";
  import styled from "styled-components";

const CurrentRouteWrapper = styled.div`
  padding: 12px 0;
`;

const CurrentRoute = styled.span`
  margin-left: 8px;
`;


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
  const globalNavigationConfig = {
    linkAs: RoutableLink,
    links: [
      {
        label: "Home",
        links: [
          { label: "Home page", url: "/" },
        ],
      },
      {
        label: "Reports",
        links: [
          {
            label: "Reports page",
            url: "/reports",
          }
        ],
      },
      { label: "Mapping", url: "/" },
    ],
  };
const GlobalHeader = () => {

    return (
        // <div className="common-header">
        //     <Link to="/">Home</Link>
        //     <Link to="reports">Reports</Link>
        // </div>
        <>
    <Header
      globalNavigation={globalNavigationConfig}
      useLocation={useCurrentRoute}
      skipLink={{ id: "main" }}
    />
    </>
    );

}

export default GlobalHeader;