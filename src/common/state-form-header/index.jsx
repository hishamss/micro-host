import React from 'react'
import './index.css'
import {
   NavLink
  } from "react-router-dom";
const StateFormHeader = () => {
    return (
        <div className="form-header-container">
            <NavLink className="form-header-links" to='/state/ticket'>My Requests</NavLink>
            <NavLink className="form-header-links" to='/state/search'>Claim</NavLink>
            <NavLink className="form-header-links" to='/state/provider'>Provider</NavLink>
            <NavLink className="form-header-links" to='/state/bulk'>Bulk Request</NavLink>
            <NavLink className="form-header-links" to='/state/quit'>TN Quit</NavLink>
        </div>
    )
}

export default StateFormHeader