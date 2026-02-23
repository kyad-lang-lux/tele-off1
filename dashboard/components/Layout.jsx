import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import MobileNav from './MobileNav';
import '../Dashboard.css';

export default function Layout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content-scroll">
          {children}
        </div>
      </div>
      <MobileNav />
    </div>
  );
}