// src/views/DashboardView.jsx
import React, { useEffect, useState } from 'react';
import PolicyCard from '../components/PolicyCard';
import { fetchAllPolicies } from '../utils/api';

const DashboardView = ({ onGoToPolicyDetails, onGoBack }) => {
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPolicies = async () => {
      try {
        setLoading(true);
        const data = await fetchAllPolicies();
        setPolicies(data);
      } catch (err) {
        setError("Failed to fetch policies. Please try again later.");
        console.error("Error fetching policies:", err);
      } finally {
        setLoading(false);
      }
    };

    getPolicies();
  }, []);

  return (
    <div className="dashboard-view-container">
      <div className="dashboard-view-header">
        <button
          onClick={onGoBack}
          className="dashboard-view-back-button"
        >
          ← Back to Home
        </button>
        <h2 className="dashboard-view-title">Your Scanned Policies</h2>
        <div className="dashboard-view-spacer"></div>
      </div>

      {loading && (
        <div className="loading-state-container">
          <div className="spinner"></div>
          <p className="loading-state-text">Loading policies...</p>
        </div>
      )}

      {error && !loading && (
        <div className="error-state-container">
          <p className="error-state-message">Error:</p>
          <p className="error-state-text">{error}</p>
          <p className="error-state-details">Please ensure the backend server is running and accessible.</p>
        </div>
      )}

      {!loading && !error && policies.length === 0 && (
        <div className="no-policies-state-container">
          <h2 className="no-policies-state-heading">No policies scanned yet!</h2>
          <p className="no-policies-state-text">
            Install our browser extension to start analyzing privacy policies and see them here.
          </p>
          <a
            href="#"
            className="no-policies-state-cta-button"
          >
            Get Extension
          </a>
        </div>
      )}

      {!loading && !error && policies.length > 0 && (
        <div className="dashboard-view-grid">
          {policies.map((policy) => (
            <PolicyCard key={policy._id} policy={policy} onSelectPolicy={onGoToPolicyDetails} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardView;