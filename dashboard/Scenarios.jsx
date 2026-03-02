import React, { useState } from 'react';
import Layout from './components/Layout';
import Topbar from './components/Topbar';

export default function Scenarios() {
  const [showModal, setShowModal] = useState(false);
  const [scenarios, setScenarios] = useState([
    { id: 1, name: "Mode nuit", desc: "Éteindre toutes les lumières et verrouiller les portes", icon: "fa-moon", time: "Tous les jours à 23h00", actions: 4, lastRun: "Hier à 23:00", active: false },
    { id: 2, name: "Mode travail", desc: "Lumière bureau à 80% + musique calme + thermostat 21°C", icon: "fa-briefcase", time: "Lun-Ven à 09h00", actions: 3, lastRun: "Aujourd'hui à 09:00", active: true },
    { id: 3, name: "Mode cinéma", desc: "TV allumée + lumière tamisée à 20% + stores fermés", icon: "fa-clapperboard", time: "Manuel", actions: 3, lastRun: "Il y a 3 jours", active: false },
  ]);

  const [newScenario, setNewScenario] = useState({ name: '', desc: '', icon: 'fa-bolt' });

  const toggleScenario = (id) => {
    setScenarios(scenarios.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  const handleAddScenario = (e) => {
    e.preventDefault();
    const scenarioToAdd = {
      id: Date.now(),
      ...newScenario,
      time: "Manuel",
      actions: 1,
      lastRun: "Jamais",
      active: false
    };
    setScenarios([scenarioToAdd, ...scenarios]);
    setShowModal(false);
    setNewScenario({ name: '', desc: '', icon: 'fa-bolt' });
  };

  return (
    <Layout customTopbar={<Topbar />}>
      <div className="scenarios-container">
        
        <div className="devices-header">
          <div className="title-group">
            <h2>Scénarios</h2>
            <span>{scenarios.filter(s => s.active).length} scénarios actifs sur {scenarios.length}</span>
          </div>
          <button className="btn-add-device purple-gradient" onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-plus"></i> Créer un scénario
          </button>
        </div>

        {/* Stats Scénarios */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon-bg blue"><i className="fa-solid fa-bolt"></i></div>
            <div className="stat-info">
              <p>Actifs</p>
              <h4>{scenarios.filter(s => s.active).length}</h4>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-bg purple"><i className="fa-solid fa-clock"></i></div>
            <div className="stat-info">
              <p>Programmés</p>
              <h4>4</h4>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-bg orange"><i className="fa-solid fa-play"></i></div>
            <div className="stat-info">
              <p>Exécutions aujourd'hui</p>
              <h4>7</h4>
            </div>
          </div>
        </div>

        {/* Liste des Scénarios */}
        <div className="scenarios-list">
          {scenarios.map(s => (
            <div key={s.id} className={`scenario-item ${s.active ? 'is-active' : ''}`}>
              <div className="scenario-main-info">
                <div className="scenario-icon">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <div className="scenario-text">
                  <div className="scenario-title-row">
                    <h4>{s.name}</h4>
                    {s.active && <span className="badge-active">Actif</span>}
                  </div>
                  <p className="scenario-desc">{s.desc}</p>
                  <div className="scenario-meta">
                    <span><i className="fa-regular fa-clock"></i> {s.time}</span>
                    <span><i className="fa-solid fa-bolt-lightning"></i> {s.actions} actions</span>
                    <span>Dernière exécution : {s.lastRun}</span>
                  </div>
                </div>
              </div>
              <div className="scenario-actions">
                <button className="icon-action-btn"><i className="fa-solid fa-play"></i></button>
                <button className="icon-action-btn"><i className="fa-solid fa-pen-to-square"></i></button>
                <button className="icon-action-btn delete"><i className="fa-solid fa-trash"></i></button>
                <label className="smart-switch">
                  <input type="checkbox" checked={s.active} onChange={() => toggleScenario(s.id)} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* MODALE D'AJOUT */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content animate-fade">
              <h3>Nouveau scénario</h3>
              <form onSubmit={handleAddScenario}>
                <div className="form-group">
                  <label>Nom du scénario</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Mode Lecture" 
                    required 
                    value={newScenario.name}
                    onChange={(e) => setNewScenario({...newScenario, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input 
                    type="text" 
                    placeholder="Décrivez les actions..." 
                    value={newScenario.desc}
                    onChange={(e) => setNewScenario({...newScenario, desc: e.target.value})}
                  />
                </div>
                <div className="modal-btns">
                  <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>Annuler</button>
                  <button type="submit" className="btn-save">Créer</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}