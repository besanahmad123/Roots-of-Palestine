import { useState } from "react";
import Footer from "../components/Footer";
import HeritageCard from "../components/HeritageCard";
import HeritageSwitch from "../components/HeritageSwitch";


import Thobe1 from "../assets/images/thobe1.jpg";
import Thobe2 from "../assets/images/thobe2.jpg";
import Thobe3 from "../assets/images/thobe3.png";

import Pottery1 from "../assets/images/pottery1.jpg";
import Pottery2 from "../assets/images/pottery2.jpg";
import Pottery3 from "../assets/images/pottery3.jpg";

import Architecture1 from "../assets/images/architecture1.jpg";
import Architecture2 from "../assets/images/architecture2.jpg";
import Architecture3 from "../assets/images/architecture3.gif";

import Dabka1 from "../assets/images/dabka1.jpg";
import Dabka2 from "../assets/images/dabka2.jpg";
import Dabka3 from "../assets/images/dabka3.jpg";

import Songs1 from "../assets/images/songs1.jpg";
import Songs2 from "../assets/images/songs2.jpg";






function Heritage() {
  const [type, setType] = useState("material");

  const materialHeritage = [
    {
      name: "الثوب الفلسطيني",
      info: "زي تقليدي مطرز يعكس الهوية الفلسطينية",
      images: [Thobe1, Thobe2, Thobe3],
    },
    {
      name: "الأواني الفخارية",
      info: "أدوات منزلية قديمة مصنوعة من الفخار",
      images: [Pottery1, Pottery2, Pottery3],
    },
    {
      name: "العمارة القديمة",
      info: "بيوت حجرية وأسواق تاريخية تعكس التراث العمراني",
      images: [Architecture1, Architecture2, Architecture3],
    },
  ];

  const immaterialHeritage = [
    {
      name: "الدبكة",
      info: "رقصة جماعية شعبية تعبر عن الفرح والوحدة",
      images: [Dabka1, Dabka2, Dabka3],
    },
    {
      name: "الأغاني الشعبية",
      info: "أغاني تراثية تُغنى في المناسبات والأفراح",
      images: [Songs1, Songs2], 
    },
    {
      name: "الأمثال الشعبية",
      info: "أمثال قديمة تحمل الحكمة وتجارب الأجداد",
      proverbs: [
        "اعمل الخير وارمه في البحر",
        "الصبر مفتاح الفرج",
        "العين لا تعلو على الحاجب",
      ],
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
      
      <HeritageSwitch type={type} setType={setType} />

      {/* بطاقات التراث */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {heritageItems.map((item, index) => (
          <HeritageCard
            key={index}
            name={item.name}
            info={item.info}
            images={item.images}
            proverbs={item.proverbs}
          />
        ))}
      </div>

      
      <Footer />
    </div>
  );
}

export default Heritage;