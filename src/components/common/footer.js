import React from "react";
import "../../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* About Section */}
      <div className="footer-about">
        <span className="footer-title">NEDAC</span>
        <div className="footer-description">
          <span className="footer-text">
            NEDAC is one of the largest alumni associations of any 
            Pakistani institution in the world. It has over 800 registered 
            members and growing fast.
          </span>
          <div className="footer-contact">
            <img src="/images/email-icon.svg" alt="Email Icon" className="footer-icon" />
            <span className="footer-email">info@nedalumniAmerica.org</span>
          </div>
          <div className="footer-address">
            <img src="/images/location-icon.svg" alt="Location Icon" className="footer-icon" />
            <span className="footer-address-text">
              624 Highglen Avenue, Markham, ON, L3S 4P6
            </span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-links">
        <span className="footer-section-title">Quick Links</span>
        <div className="footer-link-group">
          <span className="footer-link">Home</span>
          <span className="footer-link">Donate</span>
          <span className="footer-link">Members</span>
          <span className="footer-link">Resources</span>
        </div>
        <div className="footer-link-group">
          <span className="footer-link">Events</span>
          <span className="footer-link">Press Release</span>
          <span className="footer-link">Contact</span>
        </div>
      </div>

      {/* Social Media */}
      <div className="footer-social">
        <span className="footer-section-title">Follow Us</span>
        <div className="social-icons">
          <img src="/images/facebook-icon.svg" alt="Facebook" className="social-icon" />
          <img src="/images/twitter-icon.svg" alt="Twitter" className="social-icon social-icon-twitter" />
          <img src="/images/linkedin-icon.svg" alt="LinkedIn" className="social-icon" />
          <img src="/images/instagram-icon.svg" alt="Instagram" className="social-icon" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <span className="footer-copyright">
          © 2021 NED ALUMNI ASSOCIATION America
        </span>
        <div className="footer-legal">
          <span className="footer-legal-link">Legal</span>
          <span className="footer-legal-link">Terms of Service</span>
          <span className="footer-legal-link">Terms of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
