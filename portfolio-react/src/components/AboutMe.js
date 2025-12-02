import React from 'react';
import './AboutMe.css';

const AboutMe = () => {

  const experiences = [
    {
      role: "Analista de Calidad de Software (QA)",
      date: "Jun. 2025 - Presente"
    },
    {
      role: "Desarrollo Web Freelance (Fiverr)",
      date: "Ene. 2022 - Ago. 2025"
    },
    {
      role: "Diseñadora UI/UX y Desarrollo Móvil",
      date: "Sep. 2020 - Dic. 2021"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-section-header">Mi Historia</div>
        <p className="about-history-text">
          Ingeniera de Software especializada en la creación de productos digitales completos. Mi experiencia abarca el ciclo de desarrollo desde el diseño <strong>UX/UI</strong> hasta la implementación. Mi principal fortaleza es la habilidad de combinar el <strong>desarrollo web (React/Next.js)</strong> con el <strong>desarrollo móvil multiplataforma (Flutter/Dart)</strong>.
          <br /><br />
          Recientemente, mi enfoque se ha dirigido hacia la calidad y eficiencia, participando en proyectos de <strong>QA Automation</strong> utilizando <strong>Python</strong> para asegurar productos confiables en entornos ágiles. Previamente, como <strong>Freelancer en Fiverr</strong>, cultivé mi autonomía y gestión de proyectos al liderar el desarrollo web para clientes internacionales, lo que me ha preparado para adaptarme rápidamente a cualquier desafío técnico.
        </p>
      </div>

      <div className="about-section">
        <div className="about-section-header">Mi Trayectoria</div>
        <div className="about-experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="about-experience-item">
              <div className="about-role"><strong>{exp.role}</strong></div>
              <div className="about-date">{exp.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
