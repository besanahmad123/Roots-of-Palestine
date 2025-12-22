import React, { useState } from "react"; 
function Card({ city }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
     className="cards-wrapper cursor-pointer"
     onClick={() => setShowMore(!showMore)}
     >
      <img src={city.Image} alt={city.name} className="img" />
      <h3>{city.name}</h3>
      <p>{showMore ? city.fullInfo : city.shortInfo}</p>
    </div>
  );
}

export default Card;
