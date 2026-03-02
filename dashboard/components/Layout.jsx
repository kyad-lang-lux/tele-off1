import React from 'react';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import '../Dashboard.css';

export default function Layout({ children, customTopbar }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        {/* Le topbar est passé en prop pour rester synchronisé avec la recherche */}
        {customTopbar} 
        <main className="dashboard-content-scroll">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
}