import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Project from '../pages/Project/Project';
import Contact from '../pages/Contact/Contact';
import Navbar from '../components/Navbar/Navbar';


const Router = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/project' element={<Project />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    );
}

export default Router;
