import React, { useState } from 'react';
import "../Navbar/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="container">
                <div className="logo">OmonovDev</div>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/project">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? "✖" : "☰"}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
