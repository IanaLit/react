
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className = "navbar__link">
                <Link to="/about">About</Link>
                <Link to="/">Articles</Link> 
            </div>
        </div>
    )
}