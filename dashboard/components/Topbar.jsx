import React from 'react';
import '../Dashboard.css';

export default function Topbar() {
  return (
    <header className="dash-topbar">
      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Rechercher..." />
      </div>
      <div className="topbar-right">
        <div className="notif-btn">
          <i className="fa-solid fa-bell"></i>
          <span className="notif-badge"></span>
        </div>
        <div className="user-pill">
          <span>JD</span>
        </div>
      </div>
    </header>
  );
}