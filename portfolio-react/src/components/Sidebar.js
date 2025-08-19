import React, { useState, useEffect } from 'react';
import { User, Code, Briefcase, Mail, Home, Github, Linkedin, Instagram } from 'lucide-react';
import { socialLinks, navigationSections } from '../config/socialLinks';
import './Sidebar.css';

const Sidebar = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMenuToggle = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    if (onMenuToggle) {
      onMenuToggle(newState);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Cerrar el menú en dispositivos móviles después de navegar
      if (window.innerWidth <= 768) {
        setIsMenuOpen(false);
        if (onMenuToggle) {
          onMenuToggle(false);
        }
      }
    }
  };

  const getIconComponent = (iconName) => {
    const iconMap = {
      github: <Github className="w-5 h-5" />,
      linkedin: <Linkedin className="w-5 h-5" />,
      instagram: <Instagram className="w-5 h-5" />
    };
    return iconMap[iconName] || <Github className="w-5 h-5" />;
  };

  const getMenuIcon = (id) => {
    const iconMap = {
      'inicio': <Home className="w-5 h-5" />,
      'sobre-mi': <User className="w-5 h-5" />,
      'servicios': <Code className="w-5 h-5" />,
      'proyectos': <Briefcase className="w-5 h-5" />,
      'contacto': <Mail className="w-5 h-5" />
    };
    return iconMap[id] || <Home className="w-5 h-5" />;
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${isHovered ? 'scale-150' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      >
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        {/* Menu Toggle Button */}
        <button
          onClick={handleMenuToggle}
          className="menu-toggle"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Logo/Icon Section */}
        <div className="logo-section">
          <div className="logo-container">
            {isMenuOpen && (
              <div className="logo">
                <img src="images/logo.png" alt="Emily Sepúlveda" />
              </div>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            {navigationSections.map((item) => (
              <li key={item.id}>
                <button
                  className="nav-item"
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  aria-label={`Ir a ${item.label}`}
                >
                  <span className="nav-icon">{getMenuIcon(item.id)}</span>
                  {isMenuOpen && (
                    <span className="nav-label">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        {isMenuOpen && (
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <button
                key={index}
                className="social-button"
                onClick={() => handleSocialClick(social.url)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label={`Visitar ${social.name}`}
                title={social.name}
              >
                {getIconComponent(social.icon)}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
