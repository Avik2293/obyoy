import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const DashboardLayout = () => {

    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>

            {/* <Link to='/dashboard'>Dashboard Link</Link> */}

            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;