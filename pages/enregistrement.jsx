import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Enregistrement() {
  const navigate = useNavigate();

  return (
    <div className="register-page">
      <Navbar />
      
      <header className="register-header">
        <div className="container">
          <h1>Obtenir votre <span>Compte Téléoff</span></h1>
          <p>Une installation professionnelle pour une maison intelligente sans effort.</p>
        </div>
      </header>

      <main className="container register-content">
        {/* Section Explication du Processus */}
        <section className="process-grid">
          <div className="process-step">
            <div className="step-icon">1</div>
            <h3>Contactez-nous</h3>
            <p>Appelez-nous ou envoyez un message WhatsApp pour exprimer votre besoin.</p>
          </div>
          <div className="process-step">
            <div className="step-icon">2</div>
            <h3>Visite Technique</h3>
            <p>Nos experts se déplacent chez vous pour évaluer votre installation électrique.</p>
          </div>
          <div className="process-step">
            <div className="step-icon">3</div>
            <h3>Installation & Création</h3>
            <p>Nous installons le système et créons votre compte administrateur sur place.</p>
          </div>
        </section>

        {/* Section Contact / Call to Action */}
        <section className="activation-box">
          <div className="activation-text">
            <h2>Prêt à activer votre maison ?</h2>
            <p>Le compte Téléoff est exclusivement créé par nos techniciens lors de l'installation physique du boîtier de contrôle.</p>
            
            <div className="contact-actions">
              <a href="https://wa.me/22900000000" className="btn-whatsapp">
                <i className="fa-brands fa-whatsapp"></i> Discuter sur WhatsApp
              </a>
              <a href="tel:+22900000000" className="btn-call">
                <i className="fa-solid fa-phone"></i> +229 00 00 00 00
              </a>
            </div>
          </div>
          
          <div className="activation-info">
             <div className="info-card">
                <i className="fa-solid fa-shield-check"></i>
                <h4>Sécurité Garantie</h4>
                <p>Installation certifiée par nos experts.</p>
             </div>
             <div className="info-card">
                <i className="fa-solid fa-bolt"></i>
                <h4>Zéro Configuration</h4>
                <p>On s'occupe de tout, vous n'avez qu'à piloter.</p>
             </div>
          </div>
        </section>

        <div className="already-installed">
          <p>Déjà client ? <button onClick={() => navigate('/Connexion')}>Connectez-vous ici</button></p>
        </div>
      </main>

      <Footer />
    </div>
  );
}