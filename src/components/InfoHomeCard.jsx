import React from "react";

function InfoCard({ children }) {
  return (
    <div className="bg-[#f1f1f1] w-[200px] h-[100px] p-5 rounded-[10px] text-[16px] shadow hover:scale-105 transition flex items-center justify-center">
      {children}
    </div>
  );
}

export default InfoCard;