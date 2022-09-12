import React, {useState, useEffect} from "react";
import { loginAPI } from "../../services/login";
import { useNavigate } from "react-router-dom";
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
  import styled from "styled-components";

  import Logo from '../../Logos/Optum_logo_header.svg';

  // ${props => props.theme.color.background.base.value};
  const StoryWrapper = styled.div`
  background-color: #f4f0ed;
  padding: 10px 20px 20px 20px;
  .uitk-button {
    margin-right: 15px;
    margin-top: 10px;
  }
`;
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
        label: "Operations",
        links: [
          {
            label: "Operations page",
            url: "/operations",
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
  let navigate = useNavigate();
  useEffect(() => {
    let jwt = localStorage.getItem("JWT");
    if(jwt) setIsLoggedin(true);
    if(!jwt) setIsLoggedin(false);
  }, [])
const [isLoggedin, setIsLoggedin] = useState(false);
const login = () => {
  loginAPI().then(result => {
    localStorage.setItem("JWT", result)
    setIsLoggedin(true);
  })
  
}
const logout = () => {
  localStorage.removeItem("JWT");
  setIsLoggedin(false);
  return navigate("/");
}
    return (
        <>
    <Header
      logoContent={logo}
      productName={prodName}
      globalNavigation={globalNavigationConfig}
      useLocation={useCurrentRoute}
      skipLink={{ id: "main" }}
    />
    {/* <div className="common-header">
            <div>
            <StoryWrapper>
    {!isLoggedin && <Button onPress={login} size="s">
      Login
    </Button> }
    {isLoggedin && 
    <Button onPress={logout} size="s">
    Logout
  </Button>
    }
    
    </StoryWrapper>
            </div>
        </div> */}
    </>
    );

}

export default GlobalHeader;