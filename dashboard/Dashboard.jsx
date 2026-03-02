import React, { useState } from 'react';
import Layout from './components/Layout';
import Topbar from './components/Topbar'; // On l'appelle ici pour passer la recherche

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [devices, setDevices] = useState([
    { id: 1, name: "Lumière salon", room: "Salon", status: false, icon: "fa-lightbulb" },
    { id: 2, name: "Thermostat", room: "Maison", status: false, icon: "fa-temperature-half" },
    { id: 3, name: "Serrure entrée", room: "Entrée", status: false, icon: "fa-lock" },
    { id: 4, name: "Enceinte", room: "Chambre", status: true, icon: "fa-volume-high" },
    { id: 5, name: "Smart TV", room: "Salon", status: false, icon: "fa-tv" },
    { id: 6, name: "Caméra jardin", room: "Extérieur", status: true, icon: "fa-camera" },
    { id: 7, name: "Lumière cuisine", room: "Cuisine", status: false, icon: "fa-lightbulb" },
    { id: 8, name: "Lumière chambre", room: "Chambre", status: true, icon: "fa-lightbulb" },
  ]);

  const toggleDevice = (id) => {
    setDevices(devices.map(d => d.id === id ? {...d, status: !d.status} : d));
  };

  // Logique de recherche
  const filteredDevices = devices.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.room.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-layout">
      {/* On passe setSearchTerm à la Topbar via une structure Layout modifiée ou en direct */}
      <Layout customTopbar={<Topbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}>
        
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon-bg blue"><i className="fa-solid fa-power-off"></i></div>
            <div className="stat-info">
              <p>Appareils actifs</p>
              <h4>5/8 <span className="trend-up">↗</span></h4>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-bg purple"><i className="fa-solid fa-bolt"></i></div>
            <div className="stat-info">
              <p>Consommation</p>
              <h4>12.4 kWh <span className="trend-down">↘</span></h4>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-bg cyan"><i className="fa-solid fa-chart-line"></i></div>
            <div className="stat-info">
              <p>Économies</p>
              <h4>23% <span className="trend-up">↗</span></h4>
            </div>
          </div>
        </div>

        <div className="devices-header">
          <div className="title-group">
            <h2>Mes appareils</h2>
            <span>{filteredDevices.length} appareils trouvés</span>
          </div>
          <button className="btn-add-device"><i className="fa-solid fa-plus"></i> Ajouter</button>
        </div>

        <div className="devices-grid">
          {filteredDevices.map(device => (
            <div key={device.id} className={`device-item ${device.status ? 'is-on' : 'is-off'}`}>
              <div className="item-top">
                <div className="item-icon"><i className={`fa-solid ${device.icon}`}></i></div>
                <div className="item-dot"></div>
              </div>
              <div className="item-mid">
                <h4>{device.name}</h4>
                <p>{device.room}</p>
              </div>
              <div className="item-bottom">
                <span className="status-txt">{device.status ? 'Allumé' : 'Éteint'}</span>
                <label className="smart-switch">
                  <input type="checkbox" checked={device.status} onChange={() => toggleDevice(device.id)} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}