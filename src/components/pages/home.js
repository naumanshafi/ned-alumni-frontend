import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/home.css";
import EventsHome from '../common/eventshome';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="hero-container">
      <div className="hero-overlay">
        <div className="welcome-section">
          <div className="welcome-tag">Welcome to NEDATS</div>
          <h1 className="hero-title">NED Alumni Association <br/>of Tri-State (NEDATS)</h1>
          <p className="hero-description">
            The NED Alumni Association of Tri-State (NJ, NY, CT) is one of the largest NED 
            alumni associations in the US serving more than 500+ NED alumni across many 
            disciplines of NED University of Engineering & Technology. Our services include 
            networking opportunities, professional development, mentorship programs, and community events.
          </p>
          <div className="hero-buttons">
            <button className="view-latest-btn" onClick={() => navigate('/events/upcoming')}>
              VIEW LATEST EVENT
            </button>
            <button className="learn-more-btn" onClick={() => navigate('/about-us')}>
              Read About Us
            </button>
          </div>
        </div>
      </div>
      <img
        src="/images/ned_welcome.jpg"
        alt="NED University of Engineering and Technology Main Entrance"
        className="hero-image"
      />
    </div>

    <EventsHome />

        <div className = "scholarship-container">
          <div className="scholarship-section">
            <img src="/images/scholarship-banner.png" alt="Scholarship Banner" className="scholarship-banner" />
        
            <div className="scholarship-content">
                <div className="scholarship-header">
                    <div className="scholarship-title">
                        <img src="/images/education-icon.svg" alt="Education Icon" className="scholarship-icon" />
                        <span className="scholarship-heading">SUPPORTING EXCELLENCE IN EDUCATION</span>
                    </div>
                    <span className="scholarship-main-title">NED Alumni America Scholarships</span>
                </div>
        
                <span className="scholarship-description">
                    NED Alumni America continues to stand with deserving students and their families through the 
                    NED Alumni America Scholarships. The criteria for scholarship awards are determined on a 
                    need-cum-merit basis by NED University of Engineering &amp; Technology, while the funding 
                    is provided by NED Alumni America. <br /><br />
        
                    Since its inaugural year in 2017, a total of 82 scholarships have been awarded to encourage 
                    students to excel in engineering education. With your support, we aim to expand the scholarship 
                    program in the coming years.
                </span>
        
                <div className="scholarship-buttons">
                    <div className="scholarship-learn-more-button">
                        <span className="button-text">Learn more...</span>
                    </div>
                    <div className="watch-video-button">
                        <span className="button-text">Watch Video</span>
                    </div>
                </div>
            </div>
          </div>
        </div> 

        <div className="join-ned-section">
            <div className="ned-header-description">
              <div className="join-ned-header">
                  <div className="join-ned-title">
                      <img src="/images/centennial-logo.svg" alt="Education Icon" className="join-ned-icon" />
                      <span className="join-ned-heading">DELIVERING REAL VALUE</span>
                  </div>
                  <span className="join-ned-main-title">
                      <span className="highlight-text">Join NED</span> Alumni America
                  </span>
              </div>
        
              <div className="join-ned-description">
                  <span className="join-ned-text">
                      We welcome all NED alumni in America to join us and become part of a vibrant 
                      network of professionals, entrepreneurs, and community leaders.
                  </span>
              </div>
            </div>

          <div className="join-ned-benefits">
              <div className="benefit-card">
                  <div className="benefit-image">
                      <div className="image-overlay">
                        <img src="/images/network.png" alt="Network Image" className="benefit-img"/>
                      </div>
                  </div>
                  <span className="benefit-title">Network</span>
                  <span className="benefit-description">Connect and catch up with fellow NED alumni</span>
                  <div className="event-button">
                      <span className="event-text">Our Event</span>
                  </div>
              </div>
      
              <div className="benefit-card">
                  <div className="benefit-image">
                      <div className="image-overlay">
                        <img src="/images/grow.png" alt="Network Image" className="benefit-img"/>
                      </div>
                  </div>
                  <span className="benefit-title">Grow</span>
                  <span className="benefit-description">Develop as a leader by participating in our programs</span>
                  <div className="event-button">
                      <span className="event-text">Our Event</span>
                  </div>
              </div>
      
              <div className="benefit-card">
                  <div className="benefit-image">
                      <div className="image-overlay">
                        <img src="/images/impact.png" alt="Network Image" className="benefit-img"/>
                      </div>
                  </div>
                  <span className="benefit-title">Make Impact</span>
                  <span className="benefit-description">
                      Create a real impact for your alma mater and future scholars
                  </span>
                  <div className="event-button">
                      <span className="event-text">Our Event</span>
                  </div>
              </div>
          </div>
        </div>

        <div className="nedats-glance-section">
            <div className="nedats-glance-header-description">
              <div className="nedats-glance-header">
                  <div className="nedats-glance-title">
                      <img src="/images/centennial-logo.svg" alt="Update Icon" className="nedats-glance-icon" />
                      <span className="nedats-glance-heading">IMPORTANT UPDATES</span>
                  </div>
                  <span className="nedats-glance-main-title">
                      NEDATS <span className="highlight-text">At a Glance</span>
                  </span>
              </div>
        
              <div className="nedats-glance-description">
                  <span className="nedats-glance-text">
                      TBD
                  </span>
              </div>
            </div>

          <div className="nedats-glance-benefits">
              <div className="glance-card">
                  <div className="glance-image">
                      <div className="image-overlay">
                        <img src="/images/network.png" alt="Feature Image" className="glance-img"/>
                      </div>
                  </div>
                  <span className="glance-title">Community</span>
                  <span className="glance-description">Join our active community of NED alumni in the Tri-State area</span>
                  <div className="glance-button">
                      <span className="glance-text">Learn More</span>
                  </div>
              </div>
      
              <div className="glance-card">
                  <div className="glance-image">
                      <div className="image-overlay">
                        <img src="/images/grow.png" alt="Feature Image" className="glance-img"/>
                      </div>
                  </div>
                  <span className="glance-title">Events</span>
                  <span className="glance-description">Participate in our regular networking and community events</span>
                  <div className="glance-button">
                      <span className="glance-text">View Calendar</span>
                  </div>
              </div>
      
              <div className="glance-card">
                  <div className="glance-image">
                      <div className="image-overlay">
                        <img src="/images/impact.png" alt="Feature Image" className="glance-img"/>
                      </div>
                  </div>
                  <span className="glance-title">Resources</span>
                  <span className="glance-description">
                      Access exclusive resources and opportunities for NED alumni
                  </span>
                  <div className="glance-button">
                      <span className="glance-text">Explore</span>
                  </div>
              </div>
          </div>
        </div>

{/*         <div className="alumni-convention">
          <div className="alumni-convention-content">
              <div className="alumni-convention-header">
                  <div className="alumni-convention-title">
                      <img src="/images/centennial-logo.svg" alt="Education Icon" className="alumni-convention-icon" />
                      <span className="alumni-convention-heading">SUPPORTING EXCELLENCE IN EDUCATION</span>
                  </div>
                  <span className="alumni-convention-main-title">
                      <span className="highlight-text">NEDUET</span> Centennial Convention 2022
                  </span>
              </div>
      
              <span className="alumni-convention-description">
                  NED International Alumni Network (NEDIAN) Association organized
                  the 2022 Centennial Alumni Convention as the prestigious alma
                  mater turned 100 years old. Following the benchmark set in the 2019
                  convention, this convention hosted **6000+ alumni** from Pakistan
                  and around the world.
              </span>
      
              <div className="alumni-convention-buttons">
                  <div className="learn-more-button-1">
                      <span className="button-text">Learn more...</span>
                  </div>
                  <div className="watch-video-button">
                      <span className="button-text">Watch Video</span>
                  </div>
              </div>
          </div>
      
          <div className="alumni-convention-image">
              <img src="/images/100-year-anniversary.svg" alt="100 Year Anniversary" className="alumni-convention-img"/>
          </div>
        </div> */}
    </>
  );
};

export default Home;
