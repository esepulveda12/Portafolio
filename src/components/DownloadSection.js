import React from 'react';
import './DownloadSection.css';

const DownloadSection = () => {
  return (
    <div className="download-container">
      <div className="content">
        <h2 className="title">DESCARGA MI CURRÍCULUM PARA CONOCER MÁS</h2>
        <button className="download-button">
          <span className="download-dot"></span>
          Descargar HV
        </button>
      </div>
    </div>
  );
};

export default DownloadSection;
