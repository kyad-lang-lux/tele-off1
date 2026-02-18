import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Acceuil() {
  return (
    <div className="home-page">
      <Navbar />
      <main className="hero-section">
        <div className="container">
          {/* Texte centré */}
          <div className="hero-text">
            <h1 className="fade-in">Contrôlez Votre <br /> <span>Maison à Distance</span></h1>
            <p className="fade-in-delay">
              Téléoff réunit tous vos appareils dans une interface élégante et intuitive.
            </p>
            
            <div className="hero-cta fade-in-delay2">
              <button className="btn-main-orange">
                Commencer <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Image Unique avec effet de flottaison */}
          <div className="hero-visuals">
            <div className="phone-wrapper center floating">
              <img src="../img/img.png" alt="Téléoff Dashboard" />
            </div>
          </div>
        </div>
      </main>


      <section className="features-section">
  <div className="container">
    <div className="features-header fade-in">
      <h2>Une plateforme <span>complète</span></h2>
      <p>Découvrez toutes les fonctionnalités qui font de Téléoff la solution idéale pour votre maison connectée.</p>
    </div>

    <div className="features-grid">
      {/* Carte 1 */}
      <div className="feature-card fade-in-delay">
        <div className="icon-wrapper blue-bg">
          <i className="fa-solid fa-mobile-screen-button"></i>
        </div>
        <h3>Contrôle à distance</h3>
        <p>Gérez tous vos appareils depuis n'importe où grâce à notre application intuitive.</p>
      </div>

      {/* Carte 2 */}
      <div className="feature-card fade-in-delay">
        <div className="icon-wrapper blue-bg">
          <i className="fa-solid fa-shield-halved"></i>
        </div>
        <h3>Sécurité renforcée</h3>
        <p>Protégez votre maison avec un chiffrement de bout en bout et une authentification sécurisée.</p>
      </div>

      {/* Carte 3 */}
      <div className="feature-card fade-in-delay">
        <div className="icon-wrapper blue-bg">
          <i className="fa-solid fa-bolt-lightning"></i>
        </div>
        <h3>Réponse instantanée</h3>
        <p>Actions en temps réel avec une latence rapide pour tous vos appareils.</p>
      </div>

      {/* Carte 4 */}
      <div className="feature-card fade-in-delay2">
        <div className="icon-wrapper blue-bg">
          <i className="fa-solid fa-clock"></i>
        </div>
        <h3>Automatisations</h3>
        <p>Créez des scénarios intelligents qui s'adaptent à votre routine quotidienne.</p>
      </div>

      {/* Carte 5 */}
      {/* <div className="feature-card fade-in-delay2">
        <div className="icon-wrapper blue-bg">
          <i className="fa-solid fa-wifi"></i>
        </div>
        <h3>Multi-protocoles</h3>
        <p>Compatible Wi-Fi, Zigbee, Z-Wave et Bluetooth pour une flexibilité maximale.</p>
      </div> */}

      {/* Carte 6 */}
      <div className="feature-card fade-in-delay2">
        <div className="icon-wrapper blue-bg">
          <i className="fa-solid fa-chart-pie"></i>
        </div>
        <h3>Statistiques détaillées</h3>
        <p>Suivez votre consommation énergétique et optimisez vos dépenses.</p>
      </div>
    </div>
  </div>
</section>

<section className="how-it-works">
  <div className="container">
    <div className="section-header fade-in">
      <h2>Comment ça <span>fonctionne ?</span></h2>
      <p>En trois étapes simples, transformez votre maison en un espace intelligent et connecté.</p>
    </div>

    <div className="steps-grid">
      {/* Étape 1 */}
      <div className="step-card fade-in-delay">
        <div className="step-number">1</div>
        <div className="step-content">
          <h3>Créez votre compte</h3>
          <p>Inscrivez-vous gratuitement en quelques secondes et accédez à votre tableau de bord personnel.</p>
        </div>
      </div>

      {/* Étape 2 */}
      <div className="step-card fade-in-delay">
        <div className="step-number">2</div>
        <div className="step-content">
          <h3>Connectez vos appareils</h3>
          <p>Ajoutez vos appareils compatibles en scannant leur QR code ou via la détection automatique.</p>
        </div>
      </div>

      {/* Étape 3 */}
      <div className="step-card fade-in-delay">
        <div className="step-number">3</div>
        <div className="step-content">
          <h3>Contrôlez votre maison</h3>
          <p>Gérez tous vos appareils, créez des scénarios et profitez d'une maison vraiment intelligente.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta-dark-section">
  <div className="cta-container fade-in">
    <div className="cta-content">
      <h2>Prêt à transformer <span>votre maison ?</span></h2>
      <p>
        Rejoignez des milliers d'utilisateurs qui ont déjà adopté Téléoff pour une 
        maison plus intelligente, plus sûre et plus économe en énergie.
      </p>
      
      <div className="cta-buttons">
        <button className="btn-cta-orange">
          S'enregister <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button className="btn-cta-outline">
          Se connecter
        </button>
      </div>
    </div>
    
    {/* Décoration subtile en arrière-plan */}
    <div className="glow-effect"></div>
  </div>
</section>
{/* Bouton Retour en haut */}
<div 
  className="scroll-to-top" 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <i className="fa-solid fa-arrow-up"></i>
</div>
<Footer/>
    </div>
  );
}