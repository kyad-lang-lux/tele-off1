import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Dashboard.css';

export default function MobileNav() {
  return (
    <nav className="mobile-bottom-nav">
      <NavLink to="/dashboard" end className="mobile-link"><i className="fa-solid fa-house"></i></NavLink>
      <NavLink to="/dashboard/appareils" className="mobile-link"><i className="fa-solid fa-plug"></i></NavLink>
      <NavLink to="/dashboard/scenarios" className="mobile-link"><i className="fa-solid fa-wand-magic-sparkles"></i></NavLink>
      <NavLink to="/dashboard/profil" className="mobile-link"><i className="fa-solid fa-user"></i></NavLink>
    </nav>
  );
}