import React from 'react';
import '../styles/PassengerList.css';

const PassengerList = ({ pnrData }) => {
  // Simple SVG icons as inline components
  const TrainIcon = () => (
    <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0M15 17a2 2 0 104 0" />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  );

  const UserIcon = () => (
    <svg className="passenger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="route-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="calendar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg className="status-icon confirmed" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="status-icon rac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const AlertCircleIcon = () => (
    <svg className="status-icon waitlist" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const getStatusIcon = (status) => {
    switch (status) {
      case 'CNF':
        return <CheckCircleIcon />;
      case 'RAC':
        return <ClockIcon />;
      case 'WL':
        return <AlertCircleIcon />;
      default:
        return <AlertCircleIcon />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'CNF':
        return 'Confirmed';
      case 'RAC':
        return 'RAC (Reservation Against Cancellation)';
      case 'WL':
        return 'Waitlisted';
      default:
        return status;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'CNF':
        return 'status-confirmed';
      case 'RAC':
        return 'status-rac';
      case 'WL':
        return 'status-waitlist';
      default:
        return 'status-waitlist';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="passenger-results">
      {/* Journey Details */}
      <div className="journey-card card">
        <div className="journey-header">
          <h2 className="section-title">
            <TrainIcon />
            Journey Details
          </h2>
        </div>
        
        <div className="journey-grid">
          <div className="journey-detail">
            <span className="detail-label">PNR Number</span>
            <div className="detail-value pnr-number">
              {pnrData.pnr}
            </div>
          </div>
          
          <div className="journey-detail">
            <span className="detail-label">Train Details</span>
            <div className="detail-value">
              {pnrData.trainNumber} - {pnrData.trainName}
            </div>
          </div>
          
          <div className="journey-detail">
            <span className="detail-label">Date of Journey</span>
            <div className="detail-value date-info">
              <CalendarIcon />
              {formatDate(pnrData.dateOfJourney)}
            </div>
          </div>
          
          <div className="journey-detail">
            <span className="detail-label">Class</span>
            <div className="detail-value">
              <span className="class-badge">{pnrData.class}</span>
            </div>
          </div>
        </div>
        
        <div className="route-info mt-4">
          <MapPinIcon />
          <span className="route-text">
            <strong>{pnrData.from}</strong>
            <span className="route-arrow">→</span>
            <strong>{pnrData.to}</strong>
          </span>
        </div>
        
        {pnrData.chartStatus && (
          <div className="mt-3">
            <span className="detail-label">Chart Status</span>
            <div className="mt-1">
              <span className={`chart-status ${
                pnrData.chartStatus === 'Chart Prepared' 
                  ? 'chart-prepared' 
                  : 'chart-not-prepared'
              }`}>
                {pnrData.chartStatus}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Passenger Details */}
      <div className="passengers-card card">
        <div className="journey-header">
          <h2 className="section-title">
            <UsersIcon />
            Passenger Details ({pnrData.passengers.length})
          </h2>
        </div>
        
        <div className="passengers-list">
          {pnrData.passengers.map((passenger, index) => (
            <div
              key={passenger.id}
              className={`passenger-item ${getStatusClass(passenger.currentStatus)}`}
            >
              <div className="passenger-header">
                <div className="passenger-name-row">
                  <UserIcon />
                  <span className="passenger-name">
                    {index + 1}. {passenger.name}
                  </span>
                  <span className="passenger-info">
                    ({passenger.age} years, {passenger.gender})
                  </span>
                </div>
                
                <div className="passenger-details">
                  <div className="passenger-detail">
                    <span className="detail-key">Coach:</span>
                    <span className="detail-value">{passenger.coach}</span>
                  </div>
                  <div className="passenger-detail">
                    <span className="detail-key">Seat/Berth:</span>
                    <span className="detail-value">{passenger.seatNumber}</span>
                  </div>
                  {passenger.foodChoice && (
                    <div className="passenger-detail">
                      <span className="detail-key">Food:</span>
                      <span className="detail-value">{passenger.foodChoice}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="passenger-status">
                <div className="status-indicator">
                  {getStatusIcon(passenger.currentStatus)}
                  <span className="status-text">
                    {getStatusText(passenger.currentStatus)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Legend */}
        <div className="status-legend">
          <h3 className="legend-title">Status Legend:</h3>
          <div className="legend-grid">
            <div className="legend-item">
              <CheckCircleIcon />
              <span className="legend-text"><strong>CNF:</strong> Confirmed seat/berth</span>
            </div>
            <div className="legend-item">
              <ClockIcon />
              <span className="legend-text"><strong>RAC:</strong> Reservation Against Cancellation</span>
            </div>
            <div className="legend-item">
              <AlertCircleIcon />
              <span className="legend-text"><strong>WL:</strong> Waitlisted ticket</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerList;