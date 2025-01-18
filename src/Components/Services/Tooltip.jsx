import React, { useState } from 'react';
import './Tooltip.css';  // Add styles for the tooltip

const Tooltip = ({ children, title }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className="tooltip">{title}</div>}
    </div>
  );
};

export default Tooltip;
