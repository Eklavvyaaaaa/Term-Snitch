// src/views/HomeView.jsx
import React from 'react';

const HomeView = ({ onGoToDashboard }) => {
  return (
    <div className="home-view-container">
      <h1 className="home-view-title">
        Understand Privacy Policies at a Glance
      </h1>
      <p className="home-view-description">
        Our Privacy Policy Advisor uses advanced AI to simplify complex legal jargon, giving you clear summaries, risk scores, and actionable advice for any website's privacy policy.
      </p>
      <div className="home-view-cta-group">
        <a
          href="#" // Placeholder for extension link
          className="home-view-cta-button"
        >
          ➕ Install Our Browser Extension
        </a>
        <button
          onClick={onGoToDashboard}
          className="home-view-dashboard-link-button"
        >
          Already have policies? View Dashboard →
        </button>
      </div>
    </div>
  );
};

export default HomeView;