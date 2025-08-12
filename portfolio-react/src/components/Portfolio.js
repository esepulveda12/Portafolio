import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
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

  const menuItems = [
    { icon: '👤', label: 'Sobre Mí', id: 'about' },
    { icon: '💻', label: 'Servicios', id: 'services' },
    { icon: '📁', label: 'Proyectos', id: 'projects' },
    { icon: '📧', label: 'Contacto', id: 'contact' }
  ];

  const socialLinks = [
    { icon: '🐙', label: 'GitHub' },
    { icon: '💼', label: 'LinkedIn' },
    { icon: '📷', label: 'Instagram' }
  ];

  return (
    <div className="portfolio-container">
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

      {/* Animated Background Elements */}
      <div className="animated-background">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-toggle"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Logo */}
        <div className="logo-section">
          <div className="logo-container">
            <div className="logo">
              <span>E</span>
            </div>
            {isMenuOpen && (
              <div className="logo-text">
                <h2>Emily</h2>
                <p>Software Developer</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={item.id}>
                <button
                  className="nav-item"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="nav-icon">{item.icon}</span>
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
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {social.icon}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className={`main-content ${isMenuOpen ? 'shifted' : ''}`}>
        <div className="hero-section">
          <div className="hero-content">
            {/* Animated Title */}
            <div className="title-section">
              <h1 className="main-title">Emily</h1>
              <h2 className="subtitle">Sepúlveda</h2>
              <div className="title-line"></div>
            </div>

            {/* Profile Image with Floating Animation */}
            <div className="profile-section">
              <div className="profile-container">
                <div className="profile-image">
                  <img
                    src="images/placeholder.jpeg"
                    alt="Emily Sepúlveda"
                  />
                </div>
                <div className="profile-glow"></div>
              </div>
            </div>

            {/* Description */}
            <div className="description-section">
              <p className="description">
                Soy desarrolladora de software con más de 3 años de experiencia en
                <span className="highlight"> UX/UI</span>. 
                Combino diseño y desarrollo para crear experiencias digitales
                que no solo se ven bien, sino que también funcionan de manera
                óptima. Con experiencia tanto en interfaces como en programación,
                me dedico a transformar ideas en productos completos, centrados en
                la funcionalidad y la experiencia del usuario.
              </p>
            </div>

            {/* CTA Button */}
            <button
              className="cta-button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="button-icon">⭐</span>
              <span>Contáctame</span>
            </button>

            {/* Floating Skills */}
            <div className="skills-section">
              {['React', 'UX/UI', 'JavaScript', 'Node.js', 'Design Systems'].map((skill, index) => (
                <div
                  key={skill}
                  className="skill-tag"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
