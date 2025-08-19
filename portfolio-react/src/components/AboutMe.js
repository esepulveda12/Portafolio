import React from 'react';
import './AboutMe.css';

const AboutMe = () => {

  const experiences = [
    {
      role: "Software Developer",
      date: "Presente"
    },
    {
      role: "Diseñadora UI/UX",
      date: "Oct. 2021 - Dic. 2022"
    },
    {
      role: "Desarrollo Web y Aplicaciones IOS - Android",
      date: "Ene. 2021 - Ago. 2021"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-section-header">Sobre Mí</div>
        <div className="about-section-title">Mi Historia</div>
        <p className="about-history-text">
          Soy Emily Sepulveda, actualmente estoy finalizando mi carrera en Ingeniería de Software en la Corporación Universitaria Iberoamericana, donde me especializo en creación de páginas web, diseño de sistemas y metodologías ágiles. Desde octubre de 2021, trabajo como desarrolladora freelance en Fiverr, colaborando en proyectos diversos que van desde aplicaciones personalizadas hasta soluciones tecnológicas innovadoras. Esta experiencia me ha permitido enfrentar desafíos técnicos variados y colaborar con clientes internacionales.
        </p>
      </div>

      <div className="about-section">
        <div className="about-section-header">Mi Experiencia</div>
        <div className="about-experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="about-experience-item">
              <div className="about-role">{exp.role}</div>
              <div className="about-date">{exp.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
