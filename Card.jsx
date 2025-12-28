import React, { useState } from "react";

const VillageCard = ({ village }) => {
  const [showStatus, setShowStatus] = useState(false);

  return (
    <div style={{
      width: "260px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      margin: "10px"
    }}>
      <img
        src={village.image}
        alt={village.name}
        style={{ width: "100%", height: "160px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px" }}>
        <h3>{village.name}</h3>
        <p><strong>القضاء:</strong> {village.district}</p>
        <p style={{ fontSize: "14px" }}>{village.info}</p>
        <button
          onClick={() => setShowStatus(!showStatus)}
          style={{
            marginTop: "8px",
            padding: "6px 12px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          نكبة
        </button>
        {showStatus && (
          <p style={{ marginTop: "5px", color: "red", fontWeight: "bold" }}>
            {village.status}
          </p>
        )}
      </div>
    </div>
  );
};

export default VillageCard;
