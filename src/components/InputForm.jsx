import React, { useState } from 'react';
import '../styles/InputForm.css';
import pnrApi from '../api/pnrApi';

const InputForm = ({ onSubmit, isLoading }) => {
  const [pnr, setPnr] = useState('');
  const [error, setError] = useState('');
  const [showSamples, setShowSamples] = useState(false);

  // Simple SVG icons as inline components
  const TrainIcon = () => (
    <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0M15 17a2 2 0 104 0" />
    </svg>
  );

  const AlertIcon = () => (
    <svg className="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const SearchIcon = () => (
    <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  const InfoIcon = () => (
    <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const handleSubmit = () => {
    setError('');
    
    const trimmedPnr = pnr.trim();
    
    if (!trimmedPnr) {
      setError('Please enter a PNR number');
      return;
    }
    
    if (trimmedPnr.length !== 10) {
      setError('PNR number must be exactly 10 digits');
      return;
    }
    
    if (!/^\d+$/.test(trimmedPnr)) {
      setError('PNR number should contain only numbers');
      return;
    }
    
    onSubmit(trimmedPnr);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSubmit();
    }
  };

  const handleSamplePNR = (samplePnr) => {
    setPnr(samplePnr);
    setError('');
    setShowSamples(false);
  };

  const samplePNRs = pnrApi.getSamplePNRs();

  return (
    <div className="input-form">
      <div className="form-group">
        <label htmlFor="pnr" className="form-label">
          Enter PNR Number
        </label>
        <div className="input-wrapper">
          <input
            id="pnr"
            type="text"
            value={pnr}
            onChange={(e) => {
              setPnr(e.target.value);
              if (error) setError('');
            }}
            onKeyPress={handleKeyPress}
            placeholder="Enter 10-digit PNR number"
            className={`form-input ${error ? 'error' : ''}`}
            maxLength={10}
            disabled={isLoading}
          />
          <TrainIcon />
        </div>
        
        {error && (
          <div className="error-message">
            <AlertIcon />
            {error}
          </div>
        )}
      </div>
      
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isLoading || !pnr.trim()}
        className="submit-button"
      >
        {isLoading ? (
          <>
            <div className="loading-spinner"></div>
            Checking...
          </>
        ) : (
          <>
            <SearchIcon />
            Check Status
          </>
        )}
      </button>
      
      {/* Sample PNRs Section */}
      <div className="sample-pnrs">
        <div className="sample-header">
          <div className="sample-title">
            <InfoIcon />
            Try Sample PNRs
          </div>
          <button
            onClick={() => setShowSamples(!showSamples)}
            className="toggle-button"
          >
            {showSamples ? 'Hide' : 'Show'}
          </button>
        </div>
        
        {showSamples && (
          <div className="sample-list">
            {samplePNRs.map((sample, index) => (
              <button
                key={index}
                onClick={() => handleSamplePNR(sample.pnr)}
                disabled={isLoading}
                className="sample-item"
              >
                <span className="sample-pnr">{sample.pnr}</span>
                <span className="sample-description">{sample.description}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputForm;