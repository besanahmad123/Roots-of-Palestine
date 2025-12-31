

import React, { useState } from 'react';

import DeirYassinImg from '../assets/images/DeirYasen.jpg';
import DeirHannaImg from '../assets/images/DeirHana.jpg';
import AlTanturaImg from '../assets/images/eltantora.jpg';
import LiftaImg from '../assets/images/Leftha.jpg';
import AlSafsafImg from '../assets/images/alsafsaf.jpg';
import AlDamunImg from '../assets/images/eldamon.jpg';
import MajdalShamsImg from '../assets/images/MajdalShams.jpg';
import KafrYasifImg from '../assets/images/KafrYasif.jpg';
import EinKaremImg from '../assets/images/EinKarem.jpg';
import ArrabaImg from '../assets/images/Araba.jpg';
import SakhninImg from '../assets/images/Sakhnin.jpg';
import TalfitImg from '../assets/images/talfeet.jpg';



import LoadMoreButton from "../components/LoadMoreButton.jsx";



const villages = [
  { name: "دير ياسين", district: "القدس", description: "قرية فلسطينية غرب القدس، شهدت مذبحة مروعة في 9 أبريل 1948...", displaced: true, image: DeirYassinImg },
  { name: "الطنطورة", district: "حيفا", description: "قرية ساحلية جنوب حيفا، تم احتلالها وتهجير أهلها في مايو 1948...", displaced: true, image: AlTanturaImg },
  { name: "لفتا", district: "القدس", description: "قرية تاريخية غرب القدس، هُجّر سكانها في يوليو 1948...", displaced: true, image: LiftaImg },
  { name: "الصفصاف", district: "صفد", description: "قرية في قضاء صفد، وقعت فيها مجزرة خلال عملية حيرام...", displaced: true, image: AlSafsafImg },
  { name: "الدامون", district: "عكا", description: "قرية في قضاء عكا، تم احتلالها وتهجير أهلها في يوليو 1948...", displaced: true, image: AlDamunImg },
  { name: "عين كارم", district: "القدس", description: "قرية تاريخية جنوب غرب القدس، هُجّر سكانها في يوليو 1948...", displaced: true, image: EinKaremImg },
  { name: "دير حنا", district: "عكا", description: "مدينة عربية في الجليل الأسفل، بقيت مأهولة بعد 1948...", displaced: false, image: DeirHannaImg },
  { name: "كفر ياسيف", district: "عكا", description: "قرية عربية في الجليل الغربي، بقيت مأهولة وتضم مسلمين ومسيحيين...", displaced: false, image: KafrYasifImg },
  { name: "مجدل شمس", district: "الجولان", description: "بلدة درزية في الجولان السوري المحتل، بقيت مأهولة منذ 1967...", displaced: false, image: MajdalShamsImg },
  { name: "عرابة", district: "عكا", description: "قرية في الجليل الأسفل، بقيت مأهولة واشتهرت بمشاركتها في يوم الأرض...", displaced: false, image: ArrabaImg },
  { name: "سخنين", district: "عكا", description: "مدينة عربية في الجليل الأسفل، بقيت مأهولة وتُعدّ مركزاً ثقافياً...", displaced: false, image: SakhninImg },
  { name: "تلفيت", district: "نابلس", description: "قرية فلسطينية في محافظة نابلس بالضفة الغربية، بقيت مأهولة...", displaced: false, image: TalfitImg },
];

function Villages() {
  const [showDisplaced, setShowDisplaced] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4); // عدد الصور المبدئي

  const filteredVillages = villages.filter(
    (village) => village.displaced === showDisplaced
  );

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4); // كل مرة نزيد 4 صور
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8" dir="rtl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900">
        القرى الفلسطينية
      </h1>


      {/* أزرار التبديل */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => {
            setShowDisplaced(true);
            setVisibleCount(4);
          }}
          className={`px-6 py-3 mx-2 rounded-lg font-medium transition-all duration-300 shadow-md ${
            showDisplaced
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          قرى مهجرة
        </button>
        <button
          onClick={() => {
            setShowDisplaced(false);
            setVisibleCount(4);
          }}
          className={`px-6 py-3 mx-2 rounded-lg font-medium transition-all duration-300 shadow-md ${
            !showDisplaced
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          قرى غير مهجرة
        </button>
      </div>

      {/* شبكة البطاقات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVillages.slice(0, visibleCount).map((village, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={village.image}
              alt={village.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {village.name}
              </h2>
              <p className="text-gray-600 mb-3">القضاء: {village.district}</p>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {village.description}
              </p>
              {village.displaced && (
                <p className="text-red-600 font-semibold mb-3">مهجرة</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* زر عرض المزيد */}
      <LoadMoreButton
        onClick={handleShowMore}
        hasMore={visibleCount < filteredVillages.length}
      />
    </div>
  );
}

export default Villages;