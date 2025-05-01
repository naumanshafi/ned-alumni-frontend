import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pastEventsData from '../../data/past_events.json';
import '../../assets/css/pages/event-cards.css';

const PastEvents = () => {
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    setPastEvents(pastEventsData.events);
  }, []);

  const formatDate = (dateString) => {
    const parts = dateString.split('/');
    return parts;
  };

  return (
    <div className="ned-events-container">
      <div className="event-banner">
        <h1 className="event-heading">NED Alumni Past Events</h1>
      </div>
      <div className="events-content">
        <div className="events-grid">
          {pastEvents.map(event => {
            const [day, month, year] = formatDate(event.date);
            const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            const monthName = months[parseInt(month) - 1];
            
            return (
              <div key={event.id} className="event-card">
                <div className="card-image-container">
                  <img src={event.image} alt={event.name} className="card-image" />
                  <div className="event-date">
                    <div className="date-day">{day}</div>
                    <div className="date-month">{monthName}</div>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="event-title">{event.name}</h2>
                  
                  <div className="event-details">
                    <div className="detail-item">
                      <span className="detail-icon">📍</span>
                      <span className="detail-text">{event.location}</span>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-icon">📅</span>
                      <span className="detail-text">{event.date}</span>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-icon">⏰</span>
                      <span className="detail-text">{event.startTime} - {event.endTime}</span>
                    </div>
                  </div>
                  
                  <div className="event-action">
                    <Link to={`/event-details/${event.id}`} className="contact-btn">MORE DETAILS</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PastEvents; 