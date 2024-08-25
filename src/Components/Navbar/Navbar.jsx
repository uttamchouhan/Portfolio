import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <h1><Link to='/'>Uttam Chouhan</Link></h1>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-menu-close" onClick={closeMenu}>
            <span className="close-icon">&times;</span>
          </div>
          <ul>
            <li><Link to='/' onClick={closeMenu}>Home</Link></li>
            <li><Link to='/about' onClick={closeMenu}>About Me</Link></li>
            <li><Link to='/project' onClick={closeMenu}>Project</Link></li>
          </ul>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="toggle-icon">&#9776;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
