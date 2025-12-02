import React, { useState, useEffect } from 'react';
import { User, Code, Briefcase, Mail, Home, Github, Linkedin, Instagram } from 'lucide-react';
import { socialLinks, navigationSections } from '../config/socialLinks';
import './Sidebar.css';

const Sidebar = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [hoveredItem, setHoveredItem] = useState(null);

  // Scroll spy - detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationSections.map(item => item.id);
      const scrollPosition = window.scrollY + 50; // Reduced offset for faster detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const handleMenuToggle = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    if (onMenuToggle) {
      onMenuToggle(newState);
    }
  };

  const scrollToSection = (sectionId) => {
    // Inmediatamente actualizar el estado activo
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 50; // Reduced offset for consistency
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });

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
      {/* Mobile Backdrop */}
      {isMenuOpen && (
        <div
          className="sidebar-backdrop"
          onClick={handleMenuToggle}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        {/* Animated Background Gradient */}
        <div className="sidebar-gradient"></div>

        {/* Menu Toggle Button */}
        <button
          onClick={handleMenuToggle}
          className="menu-toggle"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Logo/Icon Section */}
        <div className="logo-section">
          <div className="logo-container">
            {isMenuOpen && (
              <div className="logo">
                <img src="images/logo.png" alt="Emily Sepúlveda" />
                <div className="logo-glow"></div>
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
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  aria-label={`Ir a ${item.label}`}
                  data-tooltip={item.label}
                >
                  <span className="nav-icon">{getMenuIcon(item.id)}</span>
                  {isMenuOpen && (
                    <span className="nav-label">{item.label}</span>
                  )}
                  {/* Tooltip for closed sidebar */}
                  {!isMenuOpen && hoveredItem === item.id && (
                    <span className="nav-tooltip">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        {isMenuOpen && <div className="sidebar-divider"></div>}

        {/* Social Links */}
        {isMenuOpen && (
          <div className="social-links">
            <div className="social-title">Sígueme</div>
            <div className="social-buttons">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="social-button"
                  onClick={() => handleSocialClick(social.url)}
                  aria-label={`Visitar ${social.name}`}
                  title={social.name}
                >
                  {getIconComponent(social.icon)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
