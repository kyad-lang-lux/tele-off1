import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Importation pour décoder le rôle
import api from '../src/services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Appel à l'API d'authentification
      const response = await api.post('/token/', {
        email: email,
        password: password
      });

      // 2. Stockage des tokens
      const { access, refresh } = response.data;
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);

      // 3. Décodage du token pour connaître le rôle (ADMIN, INSTALLER, CUSTOMER)
      const decoded = jwtDecode(access);
      localStorage.setItem('user_role', decoded.role || 'CUSTOMER');

      // 4. Redirection vers le tableau de bord
      navigate('/dashboard'); 
    } catch (err) {
      setError("Identifiants incorrects ou problème de connexion.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      
      <main className="login-container">
        <div className="login-visual">
          {/* ... ton contenu visuel ... */}
        </div>

        <div className="login-form-section">
          <div className="form-wrapper">
            <h2>Connexion à téléoff</h2>
            <p className="subtitle">Heureux de vous revoir ! Veuillez entrer vos identifiants</p>

            {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label>E-mail</label>
                <div className="input-field">
                  <i className="fa-solid fa-envelope"></i>
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Mot de passe</label>
                <div className="input-field">
                  <i className="fa-solid fa-lock"></i>
                  <input 
                    type="password" 
                    placeholder="••••••••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <button type="submit" className="btn-login" disabled={loading}>
                {loading ? "Connexion..." : (
                  <><i className="fa-solid fa-right-to-bracket"></i> Se connecter</>
                )}
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