import React from "react";
import "../../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section footer-about">
          <h3 className="footer-title">NEDATS</h3>
          <p className="footer-text">
            NED Alumni Association of Tri-State<br></br>
            [NY, NJ, CT]
          </p>
          <div className="footer-contact-info">
            <div className="footer-contact">
              <img src="/images/email-icon.svg" alt="Email" className="footer-icon" />
              <a href="mailto:info@nedalumniAmerica.org" className="footer-email">
                info@nedats.org
              </a>
            </div>
            <div className="footer-address">
              <img src="/images/location-icon.svg" alt="Location" className="footer-icon" />
              <div className="footer-address-text">
                9 Bosko Dr. East Brunswick, NJ 08816
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h3 className="footer-section-title">Quick Links</h3>
          <div className="footer-links-container">
            <ul className="footer-link-list">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/donate" className="footer-link">Donate</a></li>
              <li><a href="/members" className="footer-link">Members</a></li>
              <li><a href="/resources" className="footer-link">Resources</a></li>
            </ul>
            <ul className="footer-link-list">
              <li><a href="/events" className="footer-link">Events</a></li>
              <li><a href="/press" className="footer-link">Press Release</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-section footer-social">
          <h3 className="footer-section-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <img src="/images/facebook-icon.svg" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <img src="/images/twitter-icon.svg" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <img src="/images/linkedin-icon.svg" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <img src="/images/instagram-icon.svg" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} NED Alumni Association of Tri-State [NY, NJ, CT]
          </p>
          <div className="footer-legal">
            <a href="/legal" className="footer-legal-link">Legal</a>
            <a href="/terms" className="footer-legal-link">Terms of Service</a>
            <a href="/privacy" className="footer-legal-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
