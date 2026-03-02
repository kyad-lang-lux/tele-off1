import React, { useState } from 'react';
import Layout from './components/Layout';
import Topbar from './components/Topbar';

export default function Appareils() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [showAddModal, setShowAddModal] = useState(false);
  
  const [devices, setDevices] = useState([
    { id: 1, name: "Lumière salon", room: "Salon", status: true, icon: "fa-lightbulb" },
    { id: 2, name: "Thermostat", room: "Maison", status: true, icon: "fa-temperature-half" },
    { id: 3, name: "Serrure entrée", room: "Entrée", status: false, icon: "fa-lock" },
    { id: 4, name: "Enceinte", room: "Chambre", status: true, icon: "fa-volume-high" },
    { id: 5, name: "Smart TV", room: "Salon", status: false, icon: "fa-tv" },
    { id: 6, name: "Caméra jardin", room: "Extérieur", status: true, icon: "fa-camera" },
  ]);

  const rooms = ["Tous", "Salon", "Chambre", "Cuisine", "Entrée", "Extérieur", "Bureau", "Couloir", "Maison"];

  // Logique de filtrage
  const filteredDevices = devices.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRoom = activeFilter === "Tous" || d.room === activeFilter;
    return matchesSearch && matchesRoom;
  });

  const toggleDevice = (id) => {
    setDevices(devices.map(d => d.id === id ? {...d, status: !d.status} : d));
  };

  return (
    <Layout customTopbar={<Topbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}>
      <div className="devices-page">
        
        <div className="devices-page-header">
          <div className="title-group">
            <h1>Mes appareils</h1>
            <span>{devices.filter(d => d.status).length} actifs sur {devices.length} appareils</span>
          </div>
          <button className="btn-add-purple" onClick={() => setShowAddModal(true)}>
            <i className="fa-solid fa-plus"></i> Ajouter un appareil
          </button>
        </div>

        {/* Barre de recherche secondaire (style capture) */}
        <div className="secondary-search">
          <i className="fa-solid fa-filter"></i>
          <input 
            type="text" 
            placeholder="Rechercher un appareil..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filtres par pièces */}
        <div className="room-filters">
          {rooms.map(room => (
            <button 
              key={room} 
              className={`filter-pill ${activeFilter === room ? 'active' : ''}`}
              onClick={() => setActiveFilter(room)}
            >
              {room}
            </button>
          ))}
        </div>

        {/* Grille des appareils */}
        <div className="devices-grid">
          {filteredDevices.map(device => (
            <div key={device.id} className={`device-item ${device.status ? 'is-on' : 'is-off'}`}>
              <div className="item-top">
                <div className="item-icon">
                  <i className={`fa-solid ${device.icon}`}></i>
                </div>
                <div className="item-dot"></div>
              </div>
              <div className="item-mid">
                <h4>{device.name}</h4>
                <p>{device.room}</p>
              </div>
              <div className="item-bottom">
                <span className="status-txt">{device.status ? 'Allumé' : 'Éteint'}</span>
                <label className="smart-switch">
                  <input 
                    type="checkbox" 
                    checked={device.status} 
                    onChange={() => toggleDevice(device.id)} 
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Modale d'ajout d'appareil */}
        {showAddModal && (
          <div className="modal-overlay">
            <div className="modal-content animate-pop">
              <div className="modal-header">
                <h3>Nouvel appareil</h3>
                <button onClick={() => setShowAddModal(false)}><i className="fa-solid fa-xmark"></i></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Nom de l'appareil</label>
                  <input type="text" placeholder="Ex: Lampe de chevet" />
                </div>
                <div className="form-group">
                  <label>Pièce</label>
                  <select>
                    {rooms.filter(r => r !== "Tous").map(r => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Type d'appareil</label>
                  <div className="icon-picker">
                    <i className="fa-solid fa-lightbulb active"></i>
                    <i className="fa-solid fa-plug"></i>
                    <i className="fa-solid fa-tv"></i>
                    <i className="fa-solid fa-wind"></i>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-cancel" onClick={() => setShowAddModal(false)}>Annuler</button>
                <button className="btn-confirm">Ajouter l'appareil</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}