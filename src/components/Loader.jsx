import React from 'react';
import '../styles/Loader.css';

const Loader = ({ message = "Checking PNR status..." }) => {
  return (
    <div className="loader-container">
      <div className="loader-spinner">
        <div className="spinner-outer"></div>
        <div className="spinner-inner"></div>
      </div>
      <p className="loader-text">{message}</p>
      <div className="loader-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;