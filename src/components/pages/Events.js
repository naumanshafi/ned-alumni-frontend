import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/pages/event-cards.css';

const Events = () => {
  return (
    <div className="ned-events-container">
      <div className="event-banner">
        <h1 className="event-heading">NED Alumni Events</h1>
      </div>
      <div className="events-content">
        <section className="events-navigation">
          <div style={{ 
            display: 'flex', 
            gap: '40px', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            margin: '40px 0 80px'
          }}>
            <Link to="/events/upcoming" 
                  style={{ 
                    textDecoration: 'none', 
                    flex: '1', 
                    maxWidth: '500px',
                    minWidth: '280px'
                  }}>
              <div style={{ 
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '50px 40px',
                textAlign: 'center',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '1px solid #eaeaea',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="event-nav-box">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(137, 12, 37, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '25px'
                }}>
                  <span style={{ fontSize: '32px' }}>📅</span>
                </div>
                <h2 style={{ 
                  color: '#890c25',
                  fontSize: '28px',
                  fontWeight: '700',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>Upcoming Events</h2>
                <p style={{ 
                  color: '#555',
                  fontSize: '17px',
                  lineHeight: '1.6',
                  maxWidth: '350px',
                  margin: '0 auto'
                }}>View our exciting upcoming events and activities planned for the NED Alumni community</p>
              </div>
            </Link>
            
            <Link to="/events/past" 
                  style={{ 
                    textDecoration: 'none', 
                    flex: '1', 
                    maxWidth: '500px',
                    minWidth: '280px'
                  }}>
              <div style={{ 
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '50px 40px',
                textAlign: 'center',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '1px solid #eaeaea',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="event-nav-box">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(137, 12, 37, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '25px'
                }}>
                  <span style={{ fontSize: '32px' }}>🏆</span>
                </div>
                <h2 style={{ 
                  color: '#890c25',
                  fontSize: '28px',
                  fontWeight: '700',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>Past Events</h2>
                <p style={{ 
                  color: '#555',
                  fontSize: '17px',
                  lineHeight: '1.6',
                  maxWidth: '350px',
                  margin: '0 auto'
                }}>Browse through our previous events and memories from the NED Alumni gatherings</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events; 