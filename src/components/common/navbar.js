import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../assets/css/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    if (path === '/' && currentPath === '/') {
      return "menu-item active";
    }
    if (path !== '/' && currentPath.startsWith(path)) {
      return "menu-item active";
    }
    return "menu-item";
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

        {/* Auth Buttons */}
        <div className="navbar-auth">
          <button className="auth-button sign-in" onClick={() => navigate('/login')}>Sign In</button>
          <button className="auth-button sign-up" onClick={() => navigate('/register')}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
