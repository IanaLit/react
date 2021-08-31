import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => (
  <div className="navbar" data-testid="test-navbar">
    <NavLink data-testid="test-home" className="navbar_link" activeClassName="navbar_link__active" to="/about">About</NavLink>
    <NavLink data-testid="test-about" className="navbar_link" activeClassName="navbar_link__active" to="/" exact>Home</NavLink>
  </div>
);
