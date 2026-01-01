function VillageCard({ name, district, description, image, displaced }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden w-56">
      {/* الصورة */}
      <div className="h-36 bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* المحتوى */}
      <div className="p-4 text-center">
        <h2 className="text-base font-bold text-gray-800 mb-1">
          {name}
        </h2>

        <p className="text-xs text-gray-500 mb-2">
          القضاء: {district}
        </p>

        <p className="text-sm text-gray-600 mb-2 line-clamp-3">
          {description}
        </p>

        {displaced && (
          <span className="text-red-600 text-sm font-semibold">
            قرية مهجّرة
          </span>
        )}
      </div>
    </div>
  );
}

export default VillageCard;
