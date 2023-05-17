import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "@components/shared/Sidebar/Sidebar";

const Layout = () => {
    return (
        <>
            <div className="layout__sidebar">
                <div className="layout__sidebar__desktop">
                    <Sidebar />
                </div>
            </div>
            <div className="layout__content">
                <Outlet />
            </div>
        </>
    )
}

export default Layout