import React, { useState, useEffect } from 'react';
import { User, Code, Briefcase, Mail, Home, Github, Linkedin, Instagram } from 'lucide-react';
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

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Inicio', id: 'inicio' },
    { icon: <User className="w-5 h-5" />, label: 'Sobre Mí', id: 'sobre-mi' },
    { icon: <Code className="w-5 h-5" />, label: 'Servicios', id: 'servicios' },
    { icon: <Briefcase className="w-5 h-5" />, label: 'Proyectos', id: 'proyectos' },
    { icon: <Mail className="w-5 h-5" />, label: 'Contacto', id: 'contacto' }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' }
  ];

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
    </>
  );
};

export default Sidebar;
