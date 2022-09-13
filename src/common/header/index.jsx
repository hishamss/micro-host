import React, {useState, useEffect} from "react";
import "./index.css";
import {
    Link, useLocation
  } from "react-router-dom";
  import {
    anchorProperties,
    Button,
    Header,
    getNativeProps
  } from "@uitk/react";
  import Logo from '../../Logos/Optum_logo_header.svg';
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
        url: "/"
      },
      {
        label: "Corrections",
        links: [
          {
            label: "CMS",
            url: "/cms/x12enc-search",
          },
          {
            label: "State",
            url: "/state/search",
          }
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
      { 
        label: "Mapping", 
        links: [
          {
            label: "Mapping page",
            url: "/mapping",
          }
        ],
      
    },
    ],
  };

const logo = <img src={Logo} className="uitk-header__logo" alt="logo" />;
const prodName = 'Nemis Portal'
const GlobalHeader = () => {
    return (   
    <Header
    className="globalNavigation"
      logoContent={logo}
      productName={prodName}
      globalNavigation={globalNavigationConfig}
      useLocation={useCurrentRoute}
      skipLink={{ id: "main" }}
    />
    );

}

export default GlobalHeader;