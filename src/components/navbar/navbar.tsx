
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink className = "navbar_link" activeClassName = "navbar_link__active" to="/about">About</NavLink>
            <NavLink className = "navbar_link" activeClassName = "navbar_link__active" to="/" exact={true} >Home</NavLink> 
        </div>
    )
}