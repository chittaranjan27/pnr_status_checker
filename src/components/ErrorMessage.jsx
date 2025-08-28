import React from 'react';
import '../styles/ErrorMessage.css';

const ErrorMessage = ({ message, onRetry, showRetry = true }) => {
  // Simple SVG icons as inline components
  const XCircleIcon = () => (
    <svg className="error-main-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const RefreshIcon = () => (
    <svg className="retry-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );

  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon-wrapper">
          <XCircleIcon />
        </div>
        <div className="error-details">
          <p className="error-title">Error</p>
          <p className="error-message">{message}</p>
          
          <div className="error-solutions">
            <p className="solutions-title">Common solutions:</p>
            <ul className="solutions-list">
              <li>Verify your 10-digit PNR number</li>
              <li>Check if the journey date hasn't passed</li>
              <li>Ensure PNR is from Indian Railways</li>
            </ul>
          </div>
        </div>
      </div>
      
      {showRetry && onRetry && (
        <div className="error-actions">
          <button onClick={onRetry} className="retry-button">
            <RefreshIcon />
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;