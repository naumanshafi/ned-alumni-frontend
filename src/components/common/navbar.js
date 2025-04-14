import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import AuthService from '../auth/AuthService';
import "../../assets/css/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated, user } = useContext(AuthContext);
  const currentPath = location.pathname;
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [userData, setUserData] = useState({ name: "User", profileImage: null });

  useEffect(() => {
    // In a real app, fetch user data from context or API
    // For now, we'll just use a placeholder
    if (isAuthenticated && user) {
      setUserData({
        name: user.name || "User",
        profileImage: user.profileImage || null
      });
    }
  }, [isAuthenticated, user]);

  const initiateLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
    navigate('/');
    setShowLogoutConfirm(false);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const handleAccountSettings = () => {
    navigate('/account-settings');
  };

  const handleProfileSettings = () => {
    navigate('/profile-settings');
  };

  const handleMessageCenter = () => {
    navigate('/messages');
  };

  const handleHelp = () => {
    navigate('/help');
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
          <div className="profile-section">
            {userData.profileImage ? (
              <img src={userData.profileImage} alt="Profile" className="profile-image" />
            ) : (
              <div className="profile-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
              </div>
            )}
            <span className="user-name">{userData.name}</span>
          </div>
          <div className="profile-dropdown-content">
            <div className="user-header">
              {userData.profileImage ? (
                <img src={userData.profileImage} alt="Profile" className="dropdown-profile-image" />
              ) : (
                <div className="dropdown-profile-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#890c25" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                  </svg>
                </div>
              )}
              <h3 className="dropdown-user-name">{userData.name}</h3>
            </div>
            <div className="profile-info">
              <button className="profile-button" onClick={handleProfileSettings}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
                Profile Settings
              </button>
              <button className="profile-button" onClick={handleMessageCenter}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
                Message Center
              </button>
              <button className="profile-button" onClick={handleAccountSettings}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                </svg>
                Account Settings
              </button>
              <button className="profile-button" onClick={handleHelp}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                </svg>
                Help
              </button>
              <div className="profile-divider"></div>
              <button className="logout-button" onClick={initiateLogout}>
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
        <button className="auth-button sign-in" onClick={() => navigate('/login')}>Login</button>
        <button className="auth-button sign-up" onClick={() => navigate('/register')}>Sign Up</button>
      </div>
    );
  };

  return (
    <>
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
            <span className={isActive('/board-members')} onClick={() => navigate('/board-members')}>Board Members</span>
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

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="modal-overlay" onClick={cancelLogout}>
          <div className="logout-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">
              <div className="modal-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#890c25" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg>
              </div>
              <div className="modal-content">
                <p>Are you sure you want to end your current session?</p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="cancel-button" onClick={cancelLogout}>
                <span>Cancel</span>
              </button>
              <button className="confirm-button" onClick={confirmLogout}>
                <span>Yes, Log Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
