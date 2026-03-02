import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar-desktop">
      <div className="sidebar-logo-container">
        <div className="logo-box">
          <i className="fa-solid fa-house-signal"></i>
        </div>
        <h2>Téléoff</h2>
      </div>
      <nav className="nav-links">
        <NavLink title="Tableau de bord" to="/dashboard" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fa-solid fa-grip-vertical"></i> <span>Tableau de bord</span>
        </NavLink>
        <NavLink title="Appareils" to="../appareils" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fa-solid fa-plug"></i> <span>Appareils</span>
        </NavLink>
        <NavLink title="Historique" to="../historique" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fa-solid fa-clock-rotate-left"></i> <span>Historique</span>
        </NavLink>
        <NavLink title="Scénarios" to="../scenarios" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fa-solid fa-wand-magic-sparkles"></i> <span>Scénarios</span>
        </NavLink>
        <NavLink title="Profil" to="../profil" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fa-solid fa-user"></i> <span>Profil</span>
        </NavLink>
      </nav>
    </aside>
  );
}