import React from "react";
import "../../assets/css/home.css";

const Home = () => {
  return (
    <>
    <div class="home-container">
          <div class="home-content">
            <div class="home-heading">
              <img
                src="/images/ecapsmallsvg18262-dxs.svg"
                alt="Small Icon"
                class="icon-small"
              />
              <span class="text-primary">NED ALUMNI AMERICA</span>
            </div>
            <span class="text-heading">
              Explore Boundless Opportunities at NED
            </span>
          </div>
          <div class="home-details">
            <span class="text-secondary">
              Since 2006, NED Alumni America has been delivering programs to
              promote networking, skills enhancement, and leadership
              development among NEDUET graduates across America
            </span>
            <div class="action-buttons">
              <div class="button-primary">
                <span class="text-button">Watch Video</span>
              </div>
              <div class="link-container">
                <span class="link-text">Learn more</span>
                <img
                  src="/images/icon18262-cbxr.svg"
                  alt="Arrow Icon"
                  class="icon-small-arrow"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="social-gallary-container">
          <div class="social-links-container">
            <div class="social-link">
              <img src="/images/youtube-icon.svg" alt="YouTube" />
            </div>
            <div class="social-link">
              <img src="/images/linkedin-icon.svg" alt="LinkedIn" />
            </div>
            <div class="social-link">
              <img src="/images/instagram-icon.svg" alt="Instagram" />
            </div>
            <div class="social-link">
              <img src="/images/facebook-icon.svg" alt="Facebook" />
            </div>
          </div>
          <div class="image-gallery-container">
            <img
              src="/images/rectangle106918262-ztwe-400h.png"
              alt="Gallery Image"
              class="gallery-main-image"
            />
          </div>
        </div>

        <div class="fundraising-events-container">
          <div class="fundraising-section">
              <div class="fundraising-content">
                  <span class="fundraising-title">Fundraising NED Cloud</span>
                  <span class="fundraising-description">
                      NED Cloud, a project by NED ALUMNI America (NEDAC), is a 
                      transformative project aimed at revolutionizing cloud 
                      computing solutions.
                  </span>
              </div>
              <div class="fundraising-image">
                  <img src="/images/Poster.svg" 
                       alt="NEDAC Cloud Fundraising Flyer"/>
              </div>
          </div>
      
          <div class="events-section">
              <span class="events-title">Upcoming Events :</span>
              <div class="event-card">
                  <div class="event-details">
                      <span class="event-name">NEDAC 17th Annual Gala Dinner 2024</span>
                      <span class="event-description">
                          NED Cloud, a project by NED ALUMNI America (NEDAC), is a 
                          transformative project aimed at revolutionizing cloud 
                          computing solutions.
                      </span>
                      <div class="event-location-date">
                          <span class="event-location">Apollo Convention Center</span>
                          <div class="event-date">
                              <img src="/images/calendar-icon.svg" 
                                    alt="Event Date" class="event-calendar-icon" />
                              <span class="event-date-text">Saturday, November 02, 2024</span>
                          </div>
                      </div>
                  </div>
                  <div class="event-view-more">
                      <span class="view-more-text">View More...</span>
                  </div>
              </div>
              <div class="event-navigation">
                  <img src="/images/arrow-left.svg" 
                        alt="Scroll Up" class="event-arrow-up" />
                  <img src="/images/arrow-right.svg" 
                        alt="Scroll Down" class="event-arrow-down" />
              </div>
          </div>
        </div>

        <div class="centennial-section">
              <div class="centennial-info">
                  <div class="centennial-header">
                      <img src="/images/centennial-logo.svg" alt="Centennial Logo" class="centennial-icon" />
                      <span class="centennial-title">
                          NED UNIVERSITY OF ENGINEERING &amp; TECHNOLOGY CENTENNIAL (1921-2021)
                      </span>
                  </div>
                  <span class="centennial-subtitle">
                      <span class="centennial-normal-text">Celebrating a</span>
                      <span class="centennial-highlight-text">century-old</span>
                      <span>tradition</span>
                  </span>
                  <span class="centennial-description">
                      NED Alumni America celebrated NEDUET’s 100th anniversary at its
                      14th annual dinner on Dec 5, 2022 in Mississauga, Ontario. The
                      event coincided with the 15th anniversary of NED Alumni
                      America. The President of NEDAC, Ms. Nazli Khan welcomed the
                      guests including the guest of honor, Mr. Sohail Bashir; the
                      keynote speaker, Mr. Aftab Rizvi; the Consul General of
                      Pakistan in Toronto, Mr. Abdul Hameed Khan, as well as alumni
                      and their families.
                  </span>
              </div>
      
              <div class="centennial-programs">
                  <div class="program-column">
                      <div class="program-card">
                          <img src="/images/gradient2.svg" alt="Summer Program" class="program-gradient" />
                          <span class="program-title">Summer Program</span>
                      </div>
                      <div class="program-card">
                          <img src="/images/gradient2.svg" alt="Undergraduate" class="program-gradient" />
                          <span class="program-title">Undergraduate</span>
                      </div>
                  </div>
      
                  <div class="program-column">
                      <div class="program-card">
                          <img src="/images/gradient3.svg" alt="Summer Program" class="program-gradient" />
                          <span class="program-title">Summer Program</span>
                      </div>
                      <div class="program-card">
                          <img src="/images/gradient4.svg" alt="Online Program" class="program-gradient" />
                          <span class="program-title">Online Program</span>
                      </div>
                  </div>
          </div>
            <div class="centennial-learn-more">
              <img src="/images/campus-vector.svg" alt="Campus Vector" class="centennial-campus-image" />
              <div class="learn-more-button">
                  <span class="learn-more-text">LEARN MORE</span>
                  <img src="/images/learn-more-icon.svg" alt="Learn More Icon" class="learn-more-icon" />
              </div>
          </div>
        </div>

        <div class = "scholarship-container">
          <div class="scholarship-section">
            <img src="/images/scholarship-banner.png" alt="Scholarship Banner" class="scholarship-banner" />
        
            <div class="scholarship-content">
                <div class="scholarship-header">
                    <div class="scholarship-title">
                        <img src="/images/education-icon.svg" alt="Education Icon" class="scholarship-icon" />
                        <span class="scholarship-heading">SUPPORTING EXCELLENCE IN EDUCATION</span>
                    </div>
                    <span class="scholarship-main-title">NED Alumni America Scholarships</span>
                </div>
        
                <span class="scholarship-description">
                    NED Alumni America continues to stand with deserving students and their families through the 
                    NED Alumni America Scholarships. The criteria for scholarship awards are determined on a 
                    need-cum-merit basis by NED University of Engineering &amp; Technology, while the funding 
                    is provided by NED Alumni America. <br /><br />
        
                    Since its inaugural year in 2017, a total of 82 scholarships have been awarded to encourage 
                    students to excel in engineering education. With your support, we aim to expand the scholarship 
                    program in the coming years.
                </span>
        
                <div class="scholarship-buttons">
                    <div class="scholarship-learn-more-button">
                        <span class="button-text">Learn more...</span>
                    </div>
                    <div class="watch-video-button">
                        <span class="button-text">Watch Video</span>
                    </div>
                </div>
            </div>
          </div>
        </div> 

        <div class="join-ned-section">
            <div class="ned-header-description">
              <div class="join-ned-header">
                  <div class="join-ned-title">
                      <img src="/images/centennial-logo.svg" alt="Education Icon" class="join-ned-icon" />
                      <span class="join-ned-heading">DELIVERING REAL VALUE</span>
                  </div>
                  <span class="join-ned-main-title">
                      <span class="highlight-text">Join NED</span> Alumni America
                  </span>
              </div>
        
              <div class="join-ned-description">
                  <span class="join-ned-text">
                      We welcome all NED alumni in America to join us and become part of a vibrant 
                      network of professionals, entrepreneurs, and community leaders.
                  </span>
              </div>
            </div>

          <div class="join-ned-benefits">
              <div class="benefit-card">
                  <div class="benefit-image">
                      <div class="image-overlay">
                        <img src="/images/network.png" alt="Network Image" class="benefit-img"/>
                      </div>
                  </div>
                  <span class="benefit-title">Network</span>
                  <span class="benefit-description">Connect and catch up with fellow NED alumni</span>
                  <div class="event-button">
                      <span class="event-text">Our Event</span>
                  </div>
              </div>
      
              <div class="benefit-card">
                  <div class="benefit-image">
                      <div class="image-overlay">
                        <img src="/images/grow.png" alt="Network Image" class="benefit-img"/>
                      </div>
                  </div>
                  <span class="benefit-title">Grow</span>
                  <span class="benefit-description">Develop as a leader by participating in our programs</span>
                  <div class="event-button">
                      <span class="event-text">Our Event</span>
                  </div>
              </div>
      
              <div class="benefit-card">
                  <div class="benefit-image">
                      <div class="image-overlay">
                        <img src="/images/impact.png" alt="Network Image" class="benefit-img"/>
                      </div>
                  </div>
                  <span class="benefit-title">Make Impact</span>
                  <span class="benefit-description">
                      Create a real impact for your alma mater and future scholars
                  </span>
                  <div class="event-button">
                      <span class="event-text">Our Event</span>
                  </div>
              </div>
          </div>
        </div>

        <div class="alumni-convention">
          <div class="alumni-convention-content">
              <div class="alumni-convention-header">
                  <div class="alumni-convention-title">
                      <img src="/images/centennial-logo.svg" alt="Education Icon" class="alumni-convention-icon" />
                      <span class="alumni-convention-heading">SUPPORTING EXCELLENCE IN EDUCATION</span>
                  </div>
                  <span class="alumni-convention-main-title">
                      <span class="highlight-text">NEDUET</span> Centennial Convention 2022
                  </span>
              </div>
      
              <span class="alumni-convention-description">
                  NED International Alumni Network (NEDIAN) Association organized
                  the 2022 Centennial Alumni Convention as the prestigious alma
                  mater turned 100 years old. Following the benchmark set in the 2019
                  convention, this convention hosted **6000+ alumni** from Pakistan
                  and around the world.
              </span>
      
              <div class="alumni-convention-buttons">
                  <div class="learn-more-button-1">
                      <span class="button-text">Learn more...</span>
                  </div>
                  <div class="watch-video-button">
                      <span class="button-text">Watch Video</span>
                  </div>
              </div>
          </div>
      
          <div class="alumni-convention-image">
              <img src="/images/100-year-anniversary.svg" alt="100 Year Anniversary" class="alumni-convention-img"/>
          </div>
        </div>
    </>
  );
};

export default Home;
