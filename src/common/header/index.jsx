import React from "react";
import "./index.css";
import {
    Link,
  } from "react-router-dom";
const Header = () => {

    return (
        <div className="common-header">
            <Link to="/">Home</Link>
            <Link to="reports">Reports</Link>
        </div>
    );

}

export default Header;