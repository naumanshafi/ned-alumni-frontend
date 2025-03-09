import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import AuthService from '../auth/AuthService';
import "../../assets/css/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const currentPath = location.pathname;

  const handleLogout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleAccountSettings = () => {
    navigate('/account-settings');
  };

  const isActive = (path) => {
    if (path === '/' && currentPath === '/') {
      return "menu-item active";
    }
    if (path !== '/' && currentPath.startsWith(path)) {
      return "menu-item active";
    }
    return "menu-item";
  };

  const renderAuthSection = () => {
    if (isAuthenticated) {
      return (
        <div className="profile-dropdown">
          <div className="profile-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </div>
          <div className="profile-dropdown-content">
            <div className="profile-info">
              <button className="profile-button" onClick={handleAccountSettings}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>
                Account Settings
              </button>
              <button className="logout-button" onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="navbar-auth">
        <button className="auth-button sign-in" onClick={() => navigate('/login')}>Sign In</button>
        <button className="auth-button sign-up" onClick={() => navigate('/register')}>Sign Up</button>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-top"></div>
      <div className="navbar-bottom">
        {/* Logo */}
        <div className="logo" onClick={() => navigate('/')}>
          <img src="/images/ned_logo.png" alt="NEDATS Logo" />
        </div>

        {/* Navigation Menu */}
        <div className="navbar-menu">
          <span className={isActive('/')} onClick={() => navigate('/')}>Home</span>
          <span className={isActive('/nedats')} onClick={() => navigate('/nedats')}>Alumni Association</span>
          <span className={isActive('/programs')} onClick={() => navigate('/programs')}>Programs</span>
          <span className={isActive('/member')} onClick={() => navigate('/member')}>TBD</span>
          <div className="menu-item dropdown">
            <span>Events</span>
            <div className="dropdown-content">
              <span onClick={() => navigate('/events/upcoming')}>Upcoming Events</span>
              <span onClick={() => navigate('/events/past')}>Past Events</span>
            </div>
          </div>
          <span className={isActive('/news')} onClick={() => navigate('/news')}>News</span>
        </div>

        {/* Auth Section */}
        {renderAuthSection()}
      </div>
    </nav>
  );
};

export default Navbar;
