import React, { useState } from 'react';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showCaminos, setShowCaminos] = useState(false);
  const [showAlojamientos, setShowAlojamientos] = useState(false);

  const toggleCaminos = () => setShowCaminos(!showCaminos);
  const toggleAlojamientos = () => setShowAlojamientos(!showAlojamientos);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="shell-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C7.35 0 3.5 3.85 3.5 8.5C3.5 13.15 12 24 12 24C12 24 20.5 13.15 20.5 8.5C20.5 3.85 16.65 0 12 0ZM12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12Z" fill="#4b3621"/>
          </svg>
        </div>
        <h1 className="navbar-title">Santiagín</h1>
        <div className="shell-icon" style={{ visibility: 'hidden' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C7.35 0 3.5 3.85 3.5 8.5C3.5 13.15 12 24 12 24C12 24 20.5 13.15 20.5 8.5C20.5 3.85 16.65 0 12 0ZM12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12Z" fill="#4b3621"/>
          </svg>
        </div>
      </div>
      <div className="navbar-icons">
        <div className="dropdown" onMouseEnter={toggleCaminos} onMouseLeave={toggleCaminos}>
          <button className="dropbtn">Caminos</button>
          <div className={`dropdown-content ${showCaminos ? 'show' : ''}`}>
            <Link to="/camino-frances">Camino Francés</Link>
            <Link to="/camino-portugues">Camino Portugués</Link>
            <Link to="/camino-del-norte">Camino del Norte</Link>
          </div>
        </div>
        <div className="dropdown" onMouseEnter={toggleAlojamientos} onMouseLeave={toggleAlojamientos}>
          <button className="dropbtn">Alojamientos</button>
          <div className={`dropdown-content ${showAlojamientos ? 'show' : ''}`}>
            <Link to="/alojamiento-frances">Alojamientos Francés</Link>
            <Link to="/alojamiento-portugues">Alojamientos Portugués</Link>
            <Link to="/alojamiento-norte">Alojamientos del Norte</Link>
          </div>
        </div>
        <FaSignInAlt className="icon" title="Login" />
        <FaSignOutAlt className="icon" title="Logout" />
      </div>
    </nav>
  );
};

export default Navbar;

