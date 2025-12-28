const VillageCard = ({ village }) => {
  return (
    <div style={{
      width: "260px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <img
        src={village.image}
        alt={village.name}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "10px" }}>
        <h3>{village.name}</h3>
        <p><strong>القضاء:</strong> {village.district}</p>
        <p><strong>الحالة:</strong> {village.status}</p>
        <p style={{ fontSize: "14px" }}>{village.info}</p>
      </div>
    </div>
  );
};

export default VillageCard;
