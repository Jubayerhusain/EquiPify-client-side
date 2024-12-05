import React from 'react'
import Navber from './../components/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

function Layout() {
    return (
        <div className='bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50'>
            <Navber></Navber>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default Layout;
