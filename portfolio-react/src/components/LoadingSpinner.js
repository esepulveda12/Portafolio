import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        {/* Spinner principal */}
        <div className="spinner-ring">
          <div className="spinner-ring-inner"></div>
        </div>
        
        
        {/* Partículas flotantes */}
        <div className="loading-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default LoadingSpinner;