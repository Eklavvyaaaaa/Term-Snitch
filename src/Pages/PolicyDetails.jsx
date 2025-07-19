// src/pages/PolicyDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPolicyById } from '../Utils/api';
import RiskMeter from '../Components/RiskMeter';

const PolicyDetails = () => {
  const { id } = useParams();
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPolicy = async () => {
      try {
        setLoading(true);
        const data = await fetchPolicyById(id);
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
  }, [id]);

  const formatDateTime = (timestamp) => {
    const dateObj = new Date(timestamp);
    return `${dateObj.toLocaleDateString()} at ${dateObj.toLocaleTimeString()}`;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <p className="loading-text">Loading policy details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <Link to="/dashboard" className="back-to-dashboard-link">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  if (!policy) {
    return (
      <div className="no-policies-container">
        <h2>Policy not found</h2>
        <p>The requested policy ID may be invalid or no longer exists.</p>
        <Link to="/dashboard" className="back-to-dashboard-link">
          Go back to Dashboard
        </Link>
      </div>
    );
  }

  const domain = policy.site
    .replace(/^(https?:\/\/)?(www\.)?/, '')
    .split('/')[0];

  return (
    <main className="policy-details-container">
      <h1 className="policy-details-title">{domain}</h1>
      <p className="policy-details-site-url">{policy.site}</p>

      <div className="policy-details-meta">
        <RiskMeter score={policy.riskScore} />
        <span className="policy-details-date">
          Scanned on: {formatDateTime(policy.date)}
        </span>
      </div>

      <section className="summary-section">
        <h2 className="section-heading">LLM-Generated Summary</h2>
        <p className="summary-content">{policy.summary}</p>
      </section>

      <section className="recommendations-section">
        <h2 className="section-heading">Actionable Recommendations</h2>
        <ul className="recommendations-list">
          {policy.recommendations && policy.recommendations.length > 0 ? (
            policy.recommendations.map((rec, index) => (
              <li key={index}>
                <span className="check-icon">✔</span> {rec}
              </li>
            ))
          ) : (
            <li className="no-recommendations">
              No specific recommendations found for this policy.
            </li>
          )}
        </ul>
      </section>

      <section className="raw-text-section">
        <h2 className="section-heading">Full Raw Policy Text</h2>
        <div className="raw-text-content">{policy.rawText}</div>
      </section>
    </main>
  );
};

export default PolicyDetails;
