import React, { useState } from 'react';
import Layout from './components/Layout';
import Topbar from './components/Topbar';

export default function Profil() {
  const [activeTab, setActiveTab] = useState('infos'); // 'infos' ou 'securite'

  return (
    <Layout customTopbar={<Topbar />}>
      <div className="profile-container">
        
        {/* HEADER PROFIL */}
        <div className="profile-header-card">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar-main">JD</div>
            <button className="btn-edit-avatar">
              <i className="fa-solid fa-camera"></i>
            </button>
          </div>
          <div className="profile-header-info">
            <h2>Jean Dupont</h2>
            <p className="email">jean.dupont@email.com</p>
            <p className="since">Membre depuis mars 2025</p>
          </div>
        </div>

        {/* ONGLETS (Tabs) */}
        <div className="profile-tabs">
          <button 
            className={`tab-btn ${activeTab === 'infos' ? 'active' : ''}`}
            onClick={() => setActiveTab('infos')}
          >
            Informations
          </button>
         
          <button 
            className={`tab-btn ${activeTab === 'securite' ? 'active' : ''}`}
            onClick={() => setActiveTab('securite')}
          >
            Sécurité
          </button>
        </div>

        {/* CONTENU : INFORMATIONS */}
        {activeTab === 'infos' && (
          <div className="profile-content-card animate-fade">
            <h3>Informations personnelles</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Prénom</label>
                <input type="text" defaultValue="Jean" />
              </div>
              <div className="form-group">
                <label>Nom</label>
                <input type="text" defaultValue="Dupont" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="jean.dupont@email.com" />
              </div>
              <div className="form-group">
                <label>Téléphone</label>
                <input type="text" defaultValue="+33 6 12 34 56 78" />
              </div>
              <div className="form-group full-width">
                <label>Adresse</label>
                <input type="text" defaultValue="12 Rue de la Paix, 75001 Paris" />
              </div>
            </div>
            <button className="btn-save">
              <i className="fa-solid fa-floppy-disk"></i> Enregistrer
            </button>
          </div>
        )}

        {/* CONTENU : SÉCURITÉ */}
        {activeTab === 'securite' && (
          <div className="profile-content-card animate-fade">
            <h3>Sécurité du compte</h3>
            <div className="form-grid single-col">
              <div className="form-group">
                <label>Mot de passe actuel</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <div className="form-group">
                <label>Nouveau mot de passe</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <div className="form-group">
                <label>Confirmer le mot de passe</label>
                <input type="password" placeholder="••••••••" />
              </div>
            </div>
            <button className="btn-save">
              <i className="fa-solid fa-shield-halved"></i> Mettre à jour
            </button>
          </div>
        )}
         <br />
      <br />
      <br />

      </div>
    </Layout>
  );
}