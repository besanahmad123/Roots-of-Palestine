// src/components/LoadMoreButton.jsx
import React from "react";

function LoadMoreButton({ onClick, hasMore }) {
  if (!hasMore) return null; // لو ما في مزيد، ما يظهر الزر

  return (
    <div className="text-center mt-12">
      <button
        onClick={onClick}
        className="px-8 py-4 bg-green-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-800 transition-colors duration-300"
      >
        عرض المزيد
      </button>
    </div>
  );
}

export default LoadMoreButton;