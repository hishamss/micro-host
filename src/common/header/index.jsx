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
        <>
    <Header
      globalNavigation={globalNavigationConfig}
      useLocation={useCurrentRoute}
      skipLink={{ id: "main" }}
    />
    <div className="common-header">
            <h1>Common Header</h1>
        </div>
    </>
    );

}

export default GlobalHeader;