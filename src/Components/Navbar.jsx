// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ onGoHome, onGoDashboard }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button onClick={onGoHome} className="navbar-brand-button">
           Term-Snitch
        </button>
        <div className="navbar-links">
          <button
            onClick={onGoHome}
            className="navbar-link-button"
          >
            Home
          </button>
          <button
            onClick={onGoDashboard}
            className="navbar-link-button"
          >
            Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;