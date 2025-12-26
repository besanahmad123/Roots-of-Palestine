import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-bold text-[#2c3e50] mb-4">
        قيّم موقع جذور فلسطين
      </h2>

      <div className="flex justify-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-3xl ${
              rating >= star ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      {rating > 0 && (
        <p className="mt-4 text-gray-700">
          شكراً لتقييمك: <span className="font-bold">{rating} / 5</span>
        </p>
      )}
    </div>
  );
}

export default StarRating;