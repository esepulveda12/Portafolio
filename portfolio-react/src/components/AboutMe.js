import React from 'react';

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
    <div className="container">
      <div className="section">
        <div className="section-header">Sobre Mí</div>
        <div className="section-title">Mi Historia</div>
        <p className="history-text">
          Soy Emily Sepulveda, actualmente estoy finalizando mi carrera en Ingeniería de Software en la Corporación Universitaria Iberoamericana, donde me especializo en creación de páginas web, diseño de sistemas y metodologías ágiles. Desde octubre de 2021, trabajo como desarrolladora freelance en Fiverr, colaborando en proyectos diversos que van desde aplicaciones personalizadas hasta soluciones tecnológicas innovadoras. Esta experiencia me ha permitido enfrentar desafíos técnicos variados y colaborar con clientes internacionales.
        </p>
      </div>

      <div className="section">
        <div className="section-header">Mi Experiencia</div>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="role">{exp.role}</div>
              <div className="date">{exp.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
