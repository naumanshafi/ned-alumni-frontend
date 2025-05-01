import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import pastEventsData from '../../data/past_events.json';
import '../../assets/css/pages/event-details.css';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Find the event with the matching ID
    const foundEvent = pastEventsData.events.find(event => event.id === parseInt(id));
    
    if (foundEvent) {
      setEvent(foundEvent);
    }
    
    setLoading(false);
  }, [id]);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!event) {
    return <div className="event-not-found">Event not found</div>;
  }

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="event-details-container">
      <div className="event-details-header">
        <h1>{event.name}</h1>
        <Link to="/events/past" className="back-button">← Back to Events</Link>
      </div>
      
      <div className="event-details-special-layout">
        <div className="event-flyer-container">
          <img src={event.image} alt={event.name} className="event-flyer" />
        </div>
        
        <div className="event-text-container">
          <div className="info-section">
            <p>{event.description}</p>
            
            {event.highlights && (
              <div className="gala-highlights">
                <h3>Event Highlights</h3>
                <ul>
                  {event.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="event-practical-info">
              <h3>Event Details</h3>
              <div className="detail-row">
                <span className="detail-label">Date:</span>
                <span className="detail-value">{formatDate(event.date)}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Time:</span>
                <span className="detail-value">{event.startTime} - {event.endTime}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{event.location}</span>
              </div>
              {event.dressCode && (
                <div className="detail-row">
                  <span className="detail-label">Dress Code:</span>
                  <span className="detail-value">{event.dressCode}</span>
                </div>
              )}
            </div>
            
            {event.tickets && (
              <div className="tickets-section">
                <h3>Ticket Information</h3>
                {event.tickets.map((ticket, index) => (
                  <p key={index}>{ticket}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Event Photos Section */}
      {event.photos && event.photos.length > 0 && (
        <div className="event-photos-section">
          <h2>Event Gallery</h2>
          <div className="event-photos-wrapper">
            <div className="photos-container">
              {event.photos.map((photo, index) => (
                <div key={index} className="event-photo-item">
                  <img src={photo} alt={`${event.name} - Photo ${index + 1}`} />
                  <div className="photo-overlay" onClick={() => openImageModal(photo)}>
                    <div className="eye-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {modalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content">
            <button className="modal-close-btn" onClick={closeImageModal}>×</button>
            <img src={selectedImage} alt="Full size" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails; 