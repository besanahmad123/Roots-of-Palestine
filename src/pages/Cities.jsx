
import React, { useState } from "react";
import CityCard from "../components/CityCard.jsx";
 import Footer from "../components/Footer.jsx";





import HebronImg from "../assets/images/الخليل.jpg";
import JerusalemImg from "../assets/images/القدس.jpg";
import GazaImg from "../assets/images/غزة.jpg";
import RamImg from "../assets/images/رام الله.jpg";
import BethlehemImg from "../assets/images/بيت لحم.jpg";
import NablusImg from "../assets/images/نابلس.jpg";
import JeninImg from "../assets/images/جنين.jpg";
import TulkarmImg from "../assets/images/طولكرم.jpg";
import QalqilyaImg from "../assets/images/قلقيليه.jpg";
import JerichoImg from "../assets/images/اريحا.jpg";
import NazarethImg from "../assets/images/الناصره.jpg";
import HaifaImg from "../assets/images/حيفا.jpg";
import AcreImg from "../assets/images/عكا.jpg";
import JaffaImg from "../assets/images/يافا.jpg";



function Cities() {
  const allCities = [
    { name: "القدس", info: "عاصمة فلسطين التاريخية والدينية.", image: JerusalemImg },
    { name: "غزة", info: "مدينة الصمود والتاريخ العريق.", image: GazaImg },
    { name: "نابلس", info: "مدينة الجبال والكنافة الشهيرة.", image: NablusImg },
    { name: "الخليل", info: "مدينة الأنبياء والحرم الإبراهيمي.", image: HebronImg },
    { name: "رام الله", info: "المركز الثقافي والإداري.", image: RamImg },
    { name: "بيت لحم", info: "مهد السيد المسيح.", image: BethlehemImg },
    { name: "جنين", info: "مدينة المقاومة والزراعة.", image: JeninImg },
    { name: "طولكرم", info: "مدينة السهل الساحلي.", image: TulkarmImg },
    { name: "قلقيلية", info: "مدينة البرتقال والليمون.", image: QalqilyaImg },
    { name: "أريحا", info: "أقدم مدينة في العالم.", image: JerichoImg },
    { name: "الناصرة", info: "مدينة التراث المسيحي.", image: NazarethImg },
    { name: "حيفا", info: "مدينة البحر والجبل.", image: HaifaImg },
    { name: "عكا", info: "مدينة تاريخية ساحلية.", image: AcreImg },
    { name: "يافا", info: "عروس البحر المتوسط.", image: JaffaImg },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredCities = allCities.filter(
    (city) =>
      city.name.includes(searchTerm) ||
      city.info.includes(searchTerm)
  );

  const displayedCities = filteredCities.slice(0, visibleCount);

  const hasMore = visibleCount < filteredCities.length;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* العنوان */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          مدن فلسطين
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          تعرف على مدن فلسطين العريقة
        </p>

        {/* البحث */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="ابحث عن مدينة..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(12);
            }}
            className="w-full px-6 py-3 text-lg rounded-full border-2 border-gray-300 shadow"
          />
        </div>
      </div>

      {/* المدن */}
      <div className="flex flex-wrap justify-center gap-6">
        {displayedCities.map((city, index) => (
          <CityCard
            key={index}
            name={city.name}
            info={city.info}
            image={city.image}
          />
        ))}
      </div>

      {/* عرض المزيد */}
      {hasMore && (
        <div className="text-center mt-16">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="px-10 py-4 bg-green-700 text-white text-lg font-bold rounded-full shadow"
          >
            عرض المزيد
          </button>
        </div>
      )}


      <Footer />
      
    </div>
  );
}

export default Cities;
