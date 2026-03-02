import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MobileNav() {
  return (
    <nav className="mobile-bottom-nav">
      <NavLink to="/dashboard" end className="mobile-link">
        <i className="fa-solid fa-house"></i>
        <span>Accueil</span>
      </NavLink>
      <NavLink to="../appareils" className="mobile-link">
        <i className="fa-solid fa-plug"></i>
        <span>Appareils</span>
      </NavLink>
      <NavLink to="../scenarios" className="mobile-link">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
        <span>Scénarios</span>
      </NavLink>
      <NavLink to="../profil" className="mobile-link">
        <i className="fa-solid fa-user"></i>
        <span>Profil</span>
      </NavLink>
    </nav>
  );
}