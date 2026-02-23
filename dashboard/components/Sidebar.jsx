import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Dashboard.css';

export default function Sidebar() {
  return (
    <aside className="sidebar-desktop">
      <div className="sidebar-logo">
        <h2>Téléoff</h2>
      </div>
      <nav className="nav-links">
        <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fa-solid fa-chart-pie"></i> <span>Tableau de bord</span>
        </NavLink>
        <NavLink to="/dashboard/appareils" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fa-solid fa-plug"></i> <span>Appareils</span>
        </NavLink>
        <NavLink to="/dashboard/historique" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fa-solid fa-clock-rotate-left"></i> <span>Historique</span>
        </NavLink>
        <NavLink to="/dashboard/scenarios" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fa-solid fa-wand-magic-sparkles"></i> <span>Scénarios</span>
        </NavLink>
        <NavLink to="/dashboard/profil" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <i className="fa-solid fa-user-gear"></i> <span>Profil</span>
        </NavLink>
      </nav>
    </aside>
  );
}