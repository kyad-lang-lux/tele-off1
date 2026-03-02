import React, { useState } from 'react';
import Layout from './components/Layout';
import Topbar from './components/Topbar';

export default function Scenarios() {
  const [showModal, setShowModal] = useState(false);
  const [scenarios, setScenarios] = useState([
    { id: 1, name: "Mode nuit", desc: "Éteindre toutes les lumières et verrouiller les portes", icon: "fa-moon", active: false, time: "23h00" },
    { id: 2, name: "Mode travail", desc: "Lumière bureau à 80% + musique calme", icon: "fa-briefcase", active: true, time: "09h00" },
    { id: 3, name: "Mode cinéma", desc: "TV allumée + lumières tamisées à 20%", icon: "fa-clapperboard", active: false, time: "Manuel" }
  ]);

  // Données factices pour la sélection d'appareils
  const availableDevices = ["Lumière Salon", "Thermostat", "Smart TV", "Volets", "Enceinte"];

  const toggleScenario = (id) => {
    setScenarios(scenarios.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  return (
    <Layout customTopbar={<Topbar />}>
      <div className="scenarios-page">
        
        {/* HEADER & STATS */}
        <div className="devices-header">
          <div className="title-group">
            <h2>Scénarios</h2>
            <span>{scenarios.filter(s => s.active).length} actifs sur {scenarios.length}</span>
          </div>
          <button className="btn-add-device" onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-plus"></i> Créer un scénario
          </button>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon-bg blue"><i className="fa-solid fa-bolt"></i></div>
            <div className="stat-info"><p>Actifs</p><h4>2</h4></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-bg purple"><i className="fa-solid fa-clock"></i></div>
            <div className="stat-info"><p>Programmés</p><h4>4</h4></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-bg cyan"><i className="fa-solid fa-play"></i></div>
            <div className="stat-info"><p>Exécutions jour</p><h4>7</h4></div>
          </div>
        </div>

        {/* LISTE DES SCÉNARIOS */}
        <div className="scenarios-list">
          {scenarios.map(s => (
            <div key={s.id} className={`scenario-item ${s.active ? 'active' : ''}`}>
              <div className="scenario-main-info">
                <div className="scenario-icon-box">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <div className="scenario-texts">
                  <h4>{s.name} {s.active && <span className="badge-active">Actif</span>}</h4>
                  <p>{s.desc}</p>
                  <div className="scenario-meta">
                    <span><i className="fa-regular fa-clock"></i> {s.time}</span>
                    <span><i className="fa-solid fa-wand-magic-sparkles"></i> 4 actions</span>
                  </div>
                </div>
              </div>
              <div className="scenario-actions">
                <button className="action-circle"><i className="fa-solid fa-play"></i></button>
                <button className="action-circle"><i className="fa-solid fa-pen"></i></button>
                <label className="smart-switch">
                  <input type="checkbox" checked={s.active} onChange={() => toggleScenario(s.id)} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL D'AJOUT (Simple représentation) */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content animate-fade">
              <div className="modal-header">
                <h3>Nouveau Scénario</h3>
                <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Nom du scénario</label>
                  <input type="text" placeholder="Ex: Départ Maison" />
                </div>
                <div className="form-group">
                  <label>Heure d'exécution</label>
                  <input type="time" />
                </div>
                <div className="form-group">
                  <label>Appareils à inclure</label>
                  <div className="device-selector-grid">
                    {availableDevices.map(device => (
                      <label key={device} className="device-checkbox">
                        <input type="checkbox" />
                        <span>{device}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-save" onClick={() => setShowModal(false)}>Créer le scénario</button>
              </div>
            </div>
          </div>
        )}

         <br />
      <br />
      <br />
      </div>

    </Layout>
  );
}