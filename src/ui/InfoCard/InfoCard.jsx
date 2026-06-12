import React from "react";
import "./InfoCard.css";

function InfoCard({ icon, label, children }) {
  return (
    <div className="info-card-container">
      <div className="info-card-header">
        {icon}
        <p className="info-card-label">{label}</p>
      </div>
      {children}
    </div>
  );
}

export default InfoCard;
