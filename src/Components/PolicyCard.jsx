// src/components/PolicyCard.jsx
import React from 'react';
import RiskMeter from './RiskMeter';

const PolicyCard = ({ policy, onSelectPolicy }) => {
  const truncatedSummary = policy.summary.length > 120
    ? `${policy.summary.slice(0, 120)}...`
    : policy.summary;

  return (
    <div className="policy-card"
         onClick={() => onSelectPolicy(policy._id)}>
      <div>
        <h3>
          {policy.site.replace(/^(https?:\/\/)?(www\.)?/,'').split('/')[0]}
        </h3>
        <p className="policy-card-site-url">{policy.site}</p>
        <p className="policy-card-summary">
          <span className="policy-card-summary-label">Summary:</span> {truncatedSummary}
        </p>
      </div>
      <div className="policy-card-footer">
        <RiskMeter score={policy.riskScore} />
        <span className="policy-card-view-details">
          View Details →
        </span>
      </div>
    </div>
  );
};

export default PolicyCard;