import React from 'react'
import Navber from './../components/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

function Layout() {
    return (
        <div>
            <Navber></Navber>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default Layout
