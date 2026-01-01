
function CityCard({ name, info, image }) {

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden w-40 h-48">
      {/* الصورة */}
      <div className="h-32 bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      

      {/* الاسم + المعلومة */}
      <div className="p-2 text-center">
        <h2 className="text-sm font-bold text-gray-900">
          {name}
        </h2>
        <p className="text-[10px] text-gray-600 mt-1">
          {info}
        </p>
      </div>
    </div>
  );
}

export default CityCard;
