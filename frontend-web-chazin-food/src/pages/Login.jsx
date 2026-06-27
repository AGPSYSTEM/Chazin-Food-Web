import './Login.css';
import { useState } from 'react';
import chazinLogo from '../assets/chazin-food-logo.png';
import badgeIcon from '../assets/icons/badge-icon.svg';
import sparkleLeft from '../assets/icons/sparkle-left.svg';
import sparkleRight from '../assets/icons/sparkle-right.svg';
import loginTabIcon from '../assets/icons/login-tab-icon.svg';
import registerTabIcon from '../assets/icons/register-tab-icon.svg';
import emailIcon from '../assets/icons/email-icon.svg';
import passwordIcon from '../assets/icons/password-icon.svg';
import eyeIcon from '../assets/icons/eye-icon.svg';
import submitIcon from '../assets/icons/submit-icon.svg';
import registerBadgeIcon from '../assets/icons/register-badge.svg';
import registerSparkleLeft from '../assets/icons/register-sparkle-left.svg';
import registerSparkleRight from '../assets/icons/register-sparkle-right.svg';
import registerNameIcon from '../assets/icons/register-name-icon.svg';
import registerEmailIcon from '../assets/icons/register-email-icon.svg';
import registerPhoneIcon from '../assets/icons/register-phone-icon.svg';
import registerPasswordIcon from '../assets/icons/register-password-icon.svg';
import registerEyeIcon from '../assets/icons/register-eye-icon.svg';
import registerConfirmIcon from '../assets/icons/register-confirm-icon.svg';
import registerEyeIcon2 from '../assets/icons/register-eye-icon2.svg';
import registerSubmitIcon from '../assets/icons/register-submit-icon.svg';
import registerLoginTabIcon from '../assets/icons/register-login-tab.svg';
import registerRegisterTabIcon from '../assets/icons/register-register-tab.svg';

function Login({ onLogin }) {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (email === 'admin@chazinfood.com' && password === 'admin123') {
      onLogin({ email, role: 'admin' });
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <div className="decoration-blob blob-1"></div>
      <div className="decoration-blob blob-2"></div>
      <div className="decoration-blob blob-3"></div>
      <div className="ticks-pattern"></div>
      <div className="bottom-wave"></div>
      
      <div className="login-wrapper">
        <div className="header">
          <div className="logo-container">
            <div className="logo-glow"></div>
            <div className="logo-circle">
              <img src={chazinLogo} alt="Chazin Food" className="logo-image" />
            </div>
            <div className="badge">
              <img src={activeTab === 'login' ? badgeIcon : registerBadgeIcon} alt="" className="icon" />
            </div>
          </div>
          <h1 className="title">Chazin Food</h1>
          <div className="subtitle-row">
            <img src={activeTab === 'login' ? sparkleLeft : registerSparkleLeft} alt="" className="sparkle" />
            <p className="subtitle">Sistema de Gestión</p>
            <img src={activeTab === 'login' ? sparkleRight : registerSparkleRight} alt="" className="sparkle" />
          </div>
        </div>

        <div className="form-card">
          <div className="card-top-bar"></div>
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              <img src={activeTab === 'login' ? loginTabIcon : registerLoginTabIcon} alt="" className="tab-icon" />
              Iniciar Sesión
            </button>
            <button 
              className={`tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              <img src={activeTab === 'login' ? registerTabIcon : registerRegisterTabIcon} alt="" className="tab-icon" />
              Registrarse
            </button>
          </div>
          
          {activeTab === 'login' ? (
            <form className="form" onSubmit={handleLogin}>
              {error && <p className="error-message">{error}</p>}
              <div className="form-group">
                <label>Correo Electrónico</label>
                <div className="input-wrapper">
                  <img src={emailIcon} alt="" className="input-icon" />
                  <input 
                    type="email" 
                    placeholder="usuario@chazinfood.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Contraseña</label>
                <div className="input-wrapper">
                  <img src={passwordIcon} alt="" className="input-icon" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    type="button" 
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <img src={eyeIcon} alt="" className="eye-icon" />
                  </button>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                <img src={submitIcon} alt="" className="submit-icon" />
                Iniciar Sesión
              </button>

              <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
            </form>
          ) : (
            <form className="form register-form">
              <p className="form-instructions">
                Los campos marcados con <span className="required">*</span> son obligatorios. 
                La cuenta se crea con rol <strong>Cliente</strong>.
              </p>
              <div className="form-group">
                <label>Nombre Completo <span className="required">*</span></label>
                <div className="input-wrapper">
                  <img src={registerNameIcon} alt="" className="input-icon" />
                  <input type="text" placeholder="Tu nombre completo" />
                </div>
              </div>
              <div className="form-group">
                <label>Correo Electrónico <span className="required">*</span></label>
                <div className="input-wrapper">
                  <img src={registerEmailIcon} alt="" className="input-icon" />
                  <input type="email" placeholder="tu@correo.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Teléfono <span className="optional">(opcional)</span></label>
                <div className="input-wrapper">
                  <img src={registerPhoneIcon} alt="" className="input-icon" />
                  <input type="tel" placeholder="+58 412 000 0000" />
                </div>
              </div>
              <div className="form-group">
                <label>Contraseña <span className="required">*</span></label>
                <div className="input-wrapper">
                  <img src={registerPasswordIcon} alt="" className="input-icon" />
                  <input type="password" placeholder="Mínimo 6 caracteres" />
                  <button type="button" className="password-toggle">
                    <img src={registerEyeIcon} alt="" className="eye-icon" />
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>Confirmar Contraseña <span className="required">*</span></label>
                <div className="input-wrapper">
                  <img src={registerConfirmIcon} alt="" className="input-icon" />
                  <input type="password" placeholder="Repite tu contraseña" />
                  <button type="button" className="password-toggle">
                    <img src={registerEyeIcon2} alt="" className="eye-icon" />
                  </button>
                </div>
              </div>
              <button type="submit" className="submit-btn">
                <img src={registerSubmitIcon} alt="" className="submit-icon" />
                Crear Cuenta
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
