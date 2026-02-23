import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Support() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: "Comment connecter mon premier appareil ?", a: "Scannez simplement le QR code présent sur votre appareil via l'application Téléoff. La détection est automatique." },
    { q: "Quels sont les protocoles compatibles ?", a: "Téléoff supporte le Wi-Fi, Zigbee 3.0, Z-Wave et le Bluetooth Mesh." },
    { q: "L'application fonctionne-t-elle sans internet ?", a: "Oui, le contrôle local via votre réseau Wi-Fi domestique reste fonctionnel même sans connexion internet." },
    { q: "Comment réinitialiser mon mot de passe ?", a: "Cliquez sur 'Mot de passe oublié' sur la page de connexion pour recevoir un lien de récupération par e-mail." }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="support-page">
      <Navbar />
      
      <header className="support-header">
        <div className="container">
          <h1>Centre de <span>Support</span></h1>
          <p>Besoin d'aide ? Consultez notre FAQ ou contactez-nous directement.</p>
        </div>
      </header>

      <main className="container support-content">
        {/* Section FAQ */}
        <section className="faq-section">
          <h2>Questions fréquentes</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.q}</h3>
                  <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Contact Direct (Pas de formulaire) */}
        <section className="contact-methods">
          <h2>Contactez-nous</h2>
          <p>Notre équipe technique vous répond en moins de 24h.</p>
          
          <div className="contact-grid">
            <a href="mailto:contact@teleoff.com" className="contact-card">
              <i className="fa-solid fa-envelope"></i>
              <h3>E-mail</h3>
              <p>contact@teleoff.com</p>
              <span>Envoyer un message</span>
            </a>

            <a href="https://wa.me/22900000000" className="contact-card">
              <i className="fa-brands fa-whatsapp"></i>
              <h3>WhatsApp</h3>
              <p>+229 00 00 00 00</p>
              <span>Discuter en direct</span>
            </a>

            <a href="tel:+22900000000" className="contact-card">
              <i className="fa-solid fa-phone"></i>
              <h3>Téléphone</h3>
              <p>Lun - Ven, 8h - 18h</p>
              <span>Nous appeler</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}