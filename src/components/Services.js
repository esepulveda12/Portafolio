import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      number: "01.",
      title: "Sitios Web HTML5, CSS3 & React",
      description: "Diseño y desarrollo de sitios web modernos y funcionales, optimizados para una experiencia de usuario excepcional."
    },
    {
      number: "02.",
      title: "Diseño UI/UX Personalizado",
      description: "Desarrollo interfaces intuitivas y estéticamente agradables, mejorando la experiencia del usuario con un diseño que combina funcionalidad y estilo único."
    },
    {
      number: "03.",
      title: "Diseño Gráfico",
      description: "Me especializo en crear activos visuales impactantes que reflejan la personalidad única y los valores fundamentales de tu marca, asegurando una representación memorable y auténtica.",
      highlighted: true
    },
    {
      number: "04.",
      title: "Aplicaciones Móviles",
      description: "Creación de aplicaciones móviles innovadoras para iOS y Android, con un enfoque en rendimiento y usabilidad."
    }
  ];

  return (
    <div className="services-container" id="servicios">
      <div className="services-title">Servicios</div>
      
      {services.map((service, index) => (
        <div key={index} className={`service-card ${service.highlighted ? 'highlighted' : ''}`}>
          <div className="left-content">
            <div className="service-number">{service.number}</div>
            <div className="service-title">{service.title}</div>
          </div>
          <div className="service-description">
            {service.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
