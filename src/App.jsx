import React, { useState } from 'react';
import './styles/App.css';
import InputForm from './components/InputForm';
import PassengerList from './components/PassengerList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import pnrApi from './api/pnrApi';

const App = () => {
  const [pnrData, setPnrData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Simple SVG train icon
  const TrainIcon = () => (
    <svg className="train-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0M15 17a2 2 0 104 0" />
    </svg>
  );

  const handlePNRSubmit = async (pnrNumber) => {
    setIsLoading(true);
    setError('');
    setPnrData(null);

    try {
      const response = await pnrApi.checkPNRStatus(pnrNumber);
      setPnrData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setError('');
    setPnrData(null);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-title">
            <TrainIcon />
            <h1>PNR Status Checker</h1>
          </div>
          <p className="header-subtitle">
            Check your railway ticket status instantly
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Input Form */}
        <div className="content-section">
          <div className="card">
            <InputForm onSubmit={handlePNRSubmit} isLoading={isLoading} />
          </div>
        </div>

        {/* Results Area */}
        {isLoading && (
          <div className="content-section">
            <div className="card">
              <Loader />
            </div>
          </div>
        )}

        {error && (
          <div className="content-section">
            <ErrorMessage message={error} onRetry={handleRetry} />
          </div>
        )}

        {pnrData && (
          <div className="content-section">
            <PassengerList pnrData={pnrData} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          This is a demo application with mock data. In production, integrate with official railway APIs.
        </p>
      </footer>
    </div>
  );
};

export default App;