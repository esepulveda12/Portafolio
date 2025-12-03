import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { socialLinks } from '../config/socialLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src="images/logo.png" alt="Emily Sepúlveda Logo" className="footer-logo" />

        <ul className="footer-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre mi</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <div className="footer-social">
          {socialLinks.map((social, idx) => {
            const iconMap = {
              github: <Github size={22} />,
              linkedin: <Linkedin size={22} />,
              instagram: <Instagram size={22} />,
            };
            const icon = iconMap[social.icon?.toLowerCase?.()] || <Github size={22} />;
            return (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                {icon}
              </a>
            );
          })}
        </div>
        
        <div className="copyright">
          © 2024 Emily Sepúlveda. Todos los derechos reservados. Diseñado y desarrollado por Emily Sepúlveda.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
