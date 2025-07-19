// src/components/RiskMeter.jsx
import React from 'react';

const RiskMeter = ({ score }) => {
  let colorClass = '';

  if (score < 4) {
    colorClass = 'green';
  } else if (score < 7) {
    colorClass = 'orange';
  } else {
    colorClass = 'red';
  }

  return (
    <div className={`risk-meter ${colorClass}`}>
      Risk: {score}/10
    </div>
  );
};

export default RiskMeter;