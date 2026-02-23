import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Confidentialite() {
  return (
    <div className="policy-page">
      <Navbar />
      
      <header className="policy-header">
        <div className="container">
          <h1>Politique de <span>Confidentialité</span></h1>
          <p>Dernière mise à jour : 23 Février 2026</p>
        </div>
      </header>

      <main className="policy-content container">
        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            Chez <strong>Téléoff</strong>, nous prenons votre vie privée très au sérieux. 
            Cette politique détaille comment nous collectons, utilisons et protégeons vos données 
            lorsque vous utilisez notre plateforme de gestion domotique.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Données collectées</h2>
          <p>Pour faire fonctionner votre maison connectée, nous collectons :</p>
          <ul>
            <li><strong>Informations de compte :</strong> Nom, e-mail et identifiants de connexion.</li>
            <li><strong>Données des appareils :</strong> État de vos lampes, température, et journaux d'activité des capteurs.</li>
            <li><strong>Données techniques :</strong> Adresse IP, type de navigateur et identifiants de vos objets connectés.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Utilisation de vos données</h2>
          <p>Vos informations sont utilisées exclusivement pour :</p>
          <ul>
            <li>Assurer le contrôle à distance de vos équipements.</li>
            <li>Générer vos statistiques de consommation énergétique.</li>
            <li>Améliorer la sécurité et la stabilité de l'application.</li>
          </ul>
          <div className="policy-note">
            <i className="fa-solid fa-circle-info"></i>
            <span>Nous ne vendons jamais vos données personnelles à des tiers.</span>
          </div>
        </section>

        <section className="policy-section">
          <h2>4. Sécurité</h2>
          <p>
            Toutes les communications entre votre application Téléoff et vos appareils sont 
            chiffrées de bout en bout via le protocole SSL/TLS. Vos mots de passe sont 
            hachés et stockés de manière sécurisée.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et 
            de suppression de vos données. Vous pouvez exercer ces droits en nous contactant 
            directement via la page support.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}