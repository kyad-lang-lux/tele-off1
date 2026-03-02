import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Topbar({ searchTerm, setSearchTerm }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="dash-topbar">
      <div className="welcome-text desktop-only">
        <h3>Bonjour, Jean 👋</h3>
        <span>Bienvenue sur votre tableau de bord</span>
      </div>

      <div className="topbar-actions">
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder="Rechercher..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Conteneur du profil avec Menu Déroulant */}
        <div className="profile-menu-container">
          <div 
            className="user-avatar-circle" 
            onClick={() => setShowMenu(!showMenu)}
          >
            JD
          </div>

          {showMenu && (
            <div className="profile-dropdown">
              <div className="dropdown-item" onClick={() => navigate('/dashboard/profil')}>
                <i className="fa-solid fa-circle-user"></i>
                <span>Mon Profil</span>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item logout" onClick={() => navigate('/connexion')}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <span>Déconnexion</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}