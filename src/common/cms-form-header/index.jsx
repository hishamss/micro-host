import React from 'react'
import './index.css'
import {
   NavLink
  } from "react-router-dom";
const CMSFormHeader = () => {
    return (
        <div className="form-header-container">
            <NavLink className="form-header-links" to='/cms/x12enc-ticket'>My Requests</NavLink>
            <NavLink className="form-header-links" to='/cms/x12enc-search'>Claim</NavLink>
            <NavLink className="form-header-links" to='/cms/x12enc-provider'>Provider</NavLink>
            <NavLink className="form-header-links" to='/cms/x12enc-bulk'>Bulk Request</NavLink>
        </div>
    )
}

export default CMSFormHeader