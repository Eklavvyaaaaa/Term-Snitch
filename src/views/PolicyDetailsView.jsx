// src/views/PolicyDetailsView.jsx
import React, { useEffect, useState } from 'react';
import { fetchPolicyById } from '../utils/api';
import RiskMeter from '../components/RiskMeter';

const PolicyDetailsView = ({ policyId, onGoBack }) => {
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPolicy = async () => {
      try {
        setLoading(true);
        const data = await fetchPolicyById(policyId);
        if (data) {
          setPolicy(data);
        } else {
          setError("Policy not found.");
        }
      } catch (err) {
        setError("Failed to fetch policy details. Please try again later.");
        console.error("Error fetching policy details:", err);
      } finally {
        setLoading(false);
      }
    };

    getPolicy();
  }, [policyId]);

  return (
    <div className="policy-details-view-container">
      <button
        onClick={onGoBack}
        className="policy-details-back-button"
      >
        ← Back to Dashboard
      </button>

      {loading && (
        <div className="loading-state-container details-loading">
          <div className="spinner"></div>
          <p className="loading-state-text">Loading policy details...</p>
        </div>
      )}

      {error && !loading && (
        <div className="error-state-container details-error">
          <p className="error-state-message">Error:</p>
          <p className="error-state-text">{error}</p>
        </div>
      )}

      {!policy && !loading && !error && (
        <div className="no-policies-state-container details-not-found">
          <h2 className="no-policies-state-heading">Policy not found.</h2>
          <p className="no-policies-state-text">The requested policy ID may be invalid or no longer exists.</p>
        </div>
      )}

      {policy && (
        <div className="policy-details-content-card">
          <h1 className="policy-details-title">
            {policy.site.replace(/^(https?:\/\/)?(www\.)?/,'').split('/')[0]}
          </h1>
          <p className="policy-details-site-url">{policy.site}</p>

          <div className="policy-details-meta">
            <RiskMeter score={policy.riskScore} />
            <span className="policy-details-date">
              Scanned on: {new Date(policy.date).toLocaleDateString()} at {new Date(policy.date).toLocaleTimeString()}
            </span>
          </div>

          <div className="policy-section summary-section">
            <h2 className="section-heading summary-heading">LLM-Generated Summary</h2>
            <p className="summary-content">
              {policy.summary}
            </p>
          </div>

          <div className="policy-section recommendations-section">
            <h2 className="section-heading recommendations-heading">Actionable Recommendations</h2>
            <ul className="recommendations-list">
              {policy.recommendations.length > 0 ? (
                policy.recommendations.map((rec, index) => (
                  <li key={index}>
                    <span className="check-icon">✔</span>
                    <span>{rec}</span>
                  </li>
                ))
              ) : (
                <li className="no-recommendations">No specific recommendations found for this policy.</li>
              )}
            </ul>
          </div>

          <div className="policy-section raw-text-section">
            <h2 className="section-heading raw-text-heading">Full Raw Policy Text</h2>
            <div className="raw-text-content custom-scrollbar">
              {policy.rawText}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PolicyDetailsView;