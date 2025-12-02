import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-section" id="contacto">
      <div className="contact-title">Contacto</div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Nombre" 
          className="form-input" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Correo" 
          className="form-input" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <textarea 
          name="message"
          placeholder="Mensaje" 
          className="form-textarea" 
          value={formData.message}
          onChange={handleChange}
          required 
        ></textarea>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      
    </div>
  );
};

export default Contact;
