import React from 'react';
import Layout from './components/Layout';
import './Dashboard.css';

export default function Dashboard() {
  const stats = [
    { label: "Appareils actifs", value: "5/8", icon: "fa-power-off", color: "blue" },
    { label: "Consommation", value: "12.4 kWh", icon: "fa-bolt", color: "orange" },
    { label: "Économies", value: "23%", icon: "fa-chart-line", color: "cyan" }
  ];

  return (
    <Layout>
      <div className="view-header">
        <h1>Bonjour, Jean 👋</h1>
        <p>Bienvenue sur votre tableau de bord</p>
      </div>

      <div className="stats-row">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className={`icon-circle ${s.color}`}><i className={`fa-solid ${s.icon}`}></i></div>
            <div className="stat-text">
              <span>{s.label}</span>
              <h3>{s.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="devices-container">
        <div className="section-title">
          <h2>Mes appareils</h2>
          <button className="btn-action-primary">+ Ajouter</button>
        </div>
        
        <div className="devices-grid">
           {/* On répète ici tes cartes d'appareils comme précédemment */}
           <div className="device-card active">
              <div className="card-top">
                <div className="d-icon"><i className="fa-solid fa-lightbulb"></i></div>
                <div className="d-dot"></div>
              </div>
              <h4>Lumière salon</h4>
              <p>Salon</p>
              <div className="card-bottom">
                <span>Allumé</span>
                <label className="switch"><input type="checkbox" checked readOnly /><span className="slider"></span></label>
              </div>
           </div>
           {/* ... autres cartes ... */}
        </div>
      </div>
    </Layout>
  );
}