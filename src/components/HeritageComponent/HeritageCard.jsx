function HeritageCard({ name, info, images, proverbs }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
      {/* عرض الصور إذا موجودة */}
      {images && (
        <div className="flex gap-3 mb-4 justify-center">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={name}
              className="w-1/3 h-32 object-cover rounded"
            />
          ))}
        </div>
      )}

      {/* عرض الأمثال إذا موجودة */}
      {proverbs && (
        <div className="grid grid-cols-1 gap-3 mb-4">
          {proverbs.map((prov, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg shadow text-white font-semibold
                ${i === 0 ? "bg-green-500" : i === 1 ? "bg-blue-500" : "bg-purple-500"}`}
            >
              {prov}
            </div>
          ))}
        </div>
      )}

      <h2 className="text-xl font-bold text-[#2c3e50] mb-2">{name}</h2>
      <p className="text-gray-600">{info}</p>
    </div>
  );
}

export default HeritageCard;