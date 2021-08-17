import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => (
  <div className="navbar">
    <NavLink className="navbar_link" activeClassName="navbar_link__active" to="/about">About</NavLink>
    <NavLink className="navbar_link" activeClassName="navbar_link__active" to="/" exact>Home</NavLink>
  </div>
);
