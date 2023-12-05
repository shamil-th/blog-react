import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AdminPage from './AdminPage/AdminPage';

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="admin" element={<AdminPage/>} />
            </Routes>
        </>
    )
}

export default Layout