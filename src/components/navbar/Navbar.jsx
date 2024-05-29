import React from 'react';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Santiagín</h1>
      <div className="navbar-icons">
        <FaSignInAlt className="icon" title="Login" />
        <FaSignOutAlt className="icon" title="Logout" />
      </div>
    </nav>
  );
};

export default Navbar;
