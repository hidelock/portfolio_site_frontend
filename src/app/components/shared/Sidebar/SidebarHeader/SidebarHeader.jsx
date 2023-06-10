import React from 'react'
import logo from "./assets/images/gray_logo.png";
import './SidebarHeader.css'

const SidebarHeader = () => {
    return (
        <div className="sidebar__header">
            <img className="sidebar__logo" src={logo} alt="logo" />
            <b className="sidebar__logo__text">#akella</b>
        </div>
    )
}

export default SidebarHeader