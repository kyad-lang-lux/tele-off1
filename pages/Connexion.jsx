import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Connexion() {
  return (
    <div className="login-page">
      <Navbar />
      
      <main className="login-container">
        {/* Partie Gauche : Image et Slogan */}
        <div className="login-visual">
          <div className="visual-overlay">
            <div className="visual-content">
              <div className="login-logo-small">
                 <img src="../public/img/img1.jpg" alt="Téléoff" /> 
                 {/* Utilise une version blanche de ton logo si possible */}
              </div>
              <h1>Votre maison plus intelligente que jamais</h1>
              <p>Contrôler vos éclairages depuis la plateforme peut importe votre emplacement</p>
            </div>
          </div>
        </div>

        {/* Partie Droite : Formulaire */}
        <div className="login-form-section">
          <div className="form-wrapper">
            <h2>Connexion à téléoff</h2>
            <p className="subtitle">Heureux de vous revoir ! Veuillez entrer vos identifiants</p>

            <form>
              <div className="input-group">
                <label>E-mail</label>
                <div className="input-field">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="email" placeholder="Votre email" required />
                </div>
              </div>

              <div className="input-group">
                <label>Mot de passe</label>
                <div className="input-field">
                  <i className="fa-solid fa-lock"></i>
                  <input type="password" placeholder="••••••••••••••" required />
                  <i className="fa-solid fa-eye eye-icon"></i>
                </div>
              </div>

              <button type="submit" className="btn-login">
                <i className="fa-solid fa-right-to-bracket"></i> Se connecter
              </button>
            </form>

            <p className="footer-form-text">
              Pas encore de compte ? <a href="#">Veuillez nous contacter</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}