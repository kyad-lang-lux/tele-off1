import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Téléoff" />
        </Link>

        {/* Menu Mobile Toggle */}
        <input type="checkbox" id="menu-btn" className="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="navicon"></span>
        </label>

        {/* Liens de navigation */}
        <ul className="nav-menu">
          <li>
            <NavLink to="/Acceuil" className={({ isActive }) => isActive ? "active" : ""}>
               Acceuil
            </NavLink>
          </li>
          <li>
            <NavLink to="/Support" className={({ isActive }) => isActive ? "active" : ""}>
              Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/enregistrement" className={({ isActive }) => isActive ? "active" : ""}>
               S'enregistrer
            </NavLink>
          </li>
          <li className="mobile-only">
            <Link to="/Connexion" className="btn-nav">
              <i className="fa-solid fa-right-to-bracket"></i> Connexion
            </Link>
          </li>
        </ul>

        {/* Bouton Connexion (Desktop) */}
        <div className="nav-actions">
          <Link to="/Connexion" className="btn-nav">
            <i className="fa-solid fa-right-to-bracket"></i> Connexion
          </Link>
        </div>
      </div>
    </nav>
  );
}