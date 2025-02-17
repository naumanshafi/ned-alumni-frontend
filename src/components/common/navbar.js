import React from "react";
import "../../assets/css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top"></div>
      <div className="navbar-bottom">
        {/* Logo */}
        <div className="logo">
          <img src="/images/ned_logo.png" alt="NEDAC Logo" />
        </div>

        {/* Navigation Menu */}
        <div className="navbar-menu">
          <span className="menu-item">Home</span>
          <span className="menu-item">About</span>
          <span className="menu-item">Board & Committees</span>
          <span className="menu-item">Giving</span>
          <span className="menu-item">Member</span>
          <span className="menu-item">Resources</span>
          <span className="menu-item">Events</span>
          <span className="menu-item">Media</span>
          <span className="menu-item">Contact</span>
        </div>

        {/* Auth Buttons */}
        <div className="navbar-auth">
          <button className="auth-button sign-in">Sign In</button>
          <button className="auth-button sign-up">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
