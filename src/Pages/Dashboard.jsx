// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import PolicyCard from '../Components/PolicyCard';
import { fetchAllPolicies } from '../Utils/api';

const Dashboard = () => {
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

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Loading policies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">Error:</p>
        <p>{error}</p>
        <p className="error-details">Please ensure the backend server is running and accessible.</p>
      </div>
    );
  }

  if (policies.length === 0) {
    return (
      <div className="no-policies-container">
        <h2>No policies scanned yet!</h2>
        <p>
          Install our browser extension to start analyzing privacy policies.
        </p>
        <a
          href="/"
          className="cta-button"
        >
          Get Extension
        </a>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Your Scanned Policies</h2>
      <div className="dashboard-grid">
        {policies.map((policy) => (
          <PolicyCard key={policy._id} policy={policy} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;