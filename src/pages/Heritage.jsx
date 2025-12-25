import { useState } from "react";
import Footer from "../components/Footer";

function Heritage() {
  const [type, setType] = useState("material");

  const materialHeritage = [
    {
      name: "الثوب الفلسطيني",
      info: "زي تقليدي مطرز يعكس الهوية الفلسطينية",
      img: "/images/thobe.jpg",
    },
    {
      name: "الأواني الفخارية",
      info: "أدوات منزلية قديمة مصنوعة من الفخار",
      img: "/images/pottery.jpg",
    },
    {
      name: "العمارة القديمة",
      info: "بيوت حجرية وأسواق تاريخية تعكس التراث العمراني",
      img: "/images/architecture.jpg",
    },
  ];

  const immaterialHeritage = [
    {
      name: "الدبكة",
      info: "رقصة جماعية شعبية تعبر عن الفرح والوحدة",
      img: "/images/dabka.jpg",
    },
    {
      name: "الأغاني الشعبية",
      info: "أغاني تراثية تُغنى في المناسبات والأفراح",
      img: "/images/songs.jpg",
    },
    {
      name: "الأمثال الشعبية",
      info: "أمثال قديمة تحمل الحكمة وتجارب الأجداد",
      img: "/images/proverbs.jpg",
    },
  ];

  const heritageItems =
    type === "material" ? materialHeritage : immaterialHeritage;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6 text-center">
      <h1 className="text-3xl font-bold text-[#2c3e50] mb-6">
        التراث الفلسطيني
      </h1>

      {/* أزرار التبديل */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setType("material")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            type === "material"
              ? "bg-[#2c3e50] text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          تراث مادي
        </button>
        <button
          onClick={() => setType("immaterial")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            type === "immaterial"
              ? "bg-[#2c3e50] text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          تراث غير مادي
        </button>
      </div>

      {/* بطاقات التراث */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {heritageItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold text-[#2c3e50] mb-2">
              {item.name}
            </h2>
            <p className="text-gray-600">{item.info}</p>
          </div>
        ))}
      </div>

      {/* الفوتر */}
      <Footer />
    </div>
  );
}

export default Heritage;