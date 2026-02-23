import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Conditions() {
  return (
    <div className="policy-page">
      <Navbar />
      
      <header className="policy-header">
        <div className="container">
          <h1>Conditions <span>d'utilisation</span></h1>
          <p>Dernière mise à jour : 23 Février 2026</p>
        </div>
      </header>

      <main className="policy-content container">
        <section className="policy-section">
          <h2>1. Acceptation des termes</h2>
          <p>
            En accédant à la plateforme <strong>Téléoff</strong>, vous acceptez d'être lié par les présentes conditions d'utilisation, toutes les lois et réglementations applicables, et acceptez que vous êtes responsable du respect des lois locales applicables.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Licence d'utilisation</h2>
          <p>
            Il est accordé une licence limitée pour accéder et utiliser les services de Téléoff à des fins personnelles et non commerciales. Cette licence ne vous permet pas de :
          </p>
          <ul>
            <li>Modifier ou copier le code source de l'application.</li>
            <li>Utiliser le service pour toute activité illégale.</li>
            <li>Tenter de décompiler ou d'inverser l'ingénierie des logiciels de Téléoff.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Responsabilité</h2>
          <p>
            Téléoff s'efforce de maintenir un service opérationnel 24h/24. Toutefois, nous ne pouvons être tenus responsables :
          </p>
          <ul>
            <li>Des pannes de réseau internet ou d'électricité affectant vos appareils.</li>
            <li>Des dommages causés par une mauvaise installation de vos objets connectés.</li>
            <li>D'un accès non autorisé à votre compte dû à un mot de passe trop simple.</li>
          </ul>
          <div className="policy-note alert">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <span>La sécurité de votre maison dépend aussi de la protection de vos identifiants.</span>
          </div>
        </section>

        <section className="policy-section">
          <h2>4. Modifications du service</h2>
          <p>
            Nous nous réservons le droit de modifier, suspendre ou interrompre temporairement une partie de nos services pour maintenance ou mise à jour technique. Les utilisateurs seront prévenus via l'application pour toute maintenance programmée.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Résiliation</h2>
          <p>
            Nous pouvons résilier ou suspendre l'accès à notre service immédiatement, sans préavis ni responsabilité, pour toute raison que ce soit, y compris, sans s'y limiter, si vous enfreignez les présentes conditions.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}