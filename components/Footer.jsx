import React from 'react';
import logo from '../img/logo.png'; // Ton logo image

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne Gauche : Logo et Description */}
        <div className="footer-brand">
          <img src={logo} alt="Téléoff Logo" className="footer-logo" />
          <p>
            Téléoff simplifie le contrôle de votre maison connectée. 
            Gérez tous vos appareils intelligents depuis une seule application.
          </p>
        </div>

        {/* Colonne Droite : Légal */}
        <div className="footer-links">
          <h4>Légal</h4>
          <ul>
            <li><a href="/confidentialite">Confidentialité</a></li>
            <li><a href="/conditions">Conditions d'utilisation</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 <strong>Téléoff</strong>. Tous droits réservés.</p>
      </div>
    </footer>
  );
}