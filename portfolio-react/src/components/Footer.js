import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src="images/logo.png" alt="Emily Sepúlveda Logo" className="footer-logo" />
        
        <nav className="footer-nav">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mi</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
        
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        
        <div className="copyright">
          © 2024 Emily Sepúlveda. Todos los derechos reservados. Diseñado y desarrollado por Emily Sepúlveda.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
