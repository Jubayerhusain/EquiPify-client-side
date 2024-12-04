import React from 'react'
import Navber from './../components/Navber/Navber';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <Navber></Navber>
            <Outlet />
        </div>
    )
}

export default Layout
