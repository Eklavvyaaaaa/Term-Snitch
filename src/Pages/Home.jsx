// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Understand Privacy Policies at a Glance
      </h1>
      <p className="home-description">
        Our Privacy Policy Advisor uses advanced AI to simplify complex legal jargon, giving you clear summaries, risk scores, and actionable advice for any website's privacy policy.
      </p>
      <div className="home-cta-group">
        <a
          href="#" // Placeholder for extension link
          className="home-cta-button"
        >
          ➕ Install Our Browser Extension
        </a>
        <p className="home-small-text">
          (Link coming soon for Chrome, Firefox, etc.)
        </p>
      </div>
      <div className="home-dashboard-link-section">
        <p>Already have the extension?</p>
        <p>
          Head over to your <a href="/dashboard">Dashboard</a> to see your scanned policies.
        </p>
      </div>
    </div>
  );
};

export default Home;