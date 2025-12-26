// src/pages/Cities.jsx
import React, { useState } from "react";

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
    { name: "القدس", info: "عاصمة فلسطين الأبدية، قلب التراث الديني والتاريخي.", image: JerusalemImg },
    { name: "غزة", info: "مدينة الصمود والتاريخ العريق، أقدم مدن العالم.", image: GazaImg },
    { name: "نابلس", info: "مدينة الجبال، مشهورة بالسوق القديم والكنافة.", image: NablusImg },
    { name: "الخليل", info: "مدينة الأنبياء، تضم الحرم الإبراهيمي.", image: HebronImg },
    { name: "رام الله", info: "المركز الثقافي والإداري، مدينة نابضة بالحياة.", image: RamImg },
    { name: "بيت لحم", info: "مهد السيد المسيح، تضم كنيسة المهد.", image: BethlehemImg },
    { name: "جنين", info: "مدينة الشمال المقاومة، مشهورة بالزراعة.", image: JeninImg },
    { name: "طولكرم", info: "مدينة السهل الساحلي، تراث زراعي غني.", image: TulkarmImg },
    { name: "قلقيلية", info: "مدينة البرتقال والليمون، تراث زراعي مميز.", image: QalqilyaImg },
    { name: "أريحا", info: "أقدم مدينة في العالم، مدينة النخيل.", image: JerichoImg },
    { name: "الناصرة", info: "مدينة الطفولة المسيحية، تراث ديني عريق.", image: NazarethImg },
    { name: "حيفا", info: "مدينة البحر والجبل، مزيج من الثقافات.", image: HaifaImg },
    { name: "عكا", info: "مدينة تاريخية ساحلية، جدرانها شاهدة على التاريخ.", image: AcreImg },
    { name: "يافا", info: "عروس البحر، مدينة البرتقال والفن.", image: JaffaImg },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredCities = allCities.filter((city) =>
    city.name.includes(searchTerm) || city.info.includes(searchTerm)
  );

  const displayedCities = filteredCities.slice(0, visibleCount);

  const hasMore = visibleCount < filteredCities.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* عنوان الصفحة */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">مدن فلسطين</h1>
        <p className="text-lg text-gray-600 mb-8">
          تعرف على مدن فلسطين وتراثها العريق
        </p>

        {/* شريط البحث */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="ابحث عن مدينة..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(12);
            }}
            className="w-full px-6 py-3 text-lg rounded-full border-2 border-gray-300 shadow-md focus:outline-none focus:border-green-600 focus:ring-4 focus:ring-green-200 transition-all"
          />
        </div>
      </div>

      {/* البطاقات الصغيرة جدًا المربعة المتناسقة */}
      <div className="flex flex-wrap justify-center gap-6">
        {displayedCities.length > 0 ? (
          displayedCities.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 overflow-hidden w-40 h-40"
            >
              {/* الصورة تشغل معظم البطاقة */}
              <div className="h-32 bg-gray-200">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* الاسم تحت */}
              <div className="p-2 text-center">
                <h2 className="text-sm font-bold text-gray-900">
                  {city.name}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl text-gray-500 mt-20">
            لا توجد مدن تطابق البحث
          </p>
        )}
      </div>

      {/* زر عرض المزيد */}
      {hasMore && (
        <div className="text-center mt-16">
          <button
            onClick={loadMore}
            className="px-10 py-4 bg-green-700 text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-800 transition-all duration-300"
          >
            عرض المزيد
          </button>
        </div>
      )}
    </div>
  );
}

export default Cities;