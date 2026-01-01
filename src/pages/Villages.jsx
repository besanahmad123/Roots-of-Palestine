import React, { useState } from "react";
import VillageCard from "../components/VillageCard.jsx";
import LoadMoreButton from "../components/LoadMoreButton.jsx";
import Footer from "../components/Footer.jsx";




import DeirYassinImg from "../assets/images/DeirYasen.jpg";
import DeirHannaImg from "../assets/images/DeirHana.jpg";
import AlTanturaImg from "../assets/images/eltantora.jpg";
import LiftaImg from "../assets/images/Leftha.jpg";
import AlSafsafImg from "../assets/images/alsafsaf.jpg";
import AlDamunImg from "../assets/images/eldamon.jpg";
import MajdalShamsImg from "../assets/images/MajdalShams.jpg";
import KafrYasifImg from "../assets/images/KafrYasif.jpg";
import EinKaremImg from "../assets/images/EinKarem.jpg";
import ArrabaImg from "../assets/images/Araba.jpg";
import SakhninImg from "../assets/images/Sakhnin.jpg";
import TalfitImg from "../assets/images/talfeet.jpg";


const villages = [
  { name: "دير ياسين", district: "القدس", description: "قرية فلسطينية غرب القدس، شهدت مذبحة عام 1948.", displaced: true, image: DeirYassinImg },
  { name: "الطنطورة", district: "حيفا", description: "قرية ساحلية جنوب حيفا، هُجّر أهلها عام 1948.", displaced: true, image: AlTanturaImg },
  { name: "لفتا", district: "القدس", description: "قرية تاريخية غرب القدس، هُجّر سكانها عام 1948.", displaced: true, image: LiftaImg },
  { name: "الصفصاف", district: "صفد", description: "قرية في قضاء صفد، وقعت فيها مجزرة.", displaced: true, image: AlSafsafImg },
  { name: "الدامون", district: "عكا", description: "قرية فلسطينية مهجّرة في الجليل.", displaced: true, image: AlDamunImg },
  { name: "عين كارم", district: "القدس", description: "قرية تاريخية جنوب غرب القدس.", displaced: true, image: EinKaremImg },

  { name: "دير حنا", district: "عكا", description: "بلدة عربية بقيت مأهولة بعد 1948.", displaced: false, image: DeirHannaImg },
  { name: "كفر ياسيف", district: "عكا", description: "قرية عربية تضم مسلمين ومسيحيين.", displaced: false, image: KafrYasifImg },
  { name: "مجدل شمس", district: "الجولان", description: "بلدة درزية في الجولان المحتل.", displaced: false, image: MajdalShamsImg },
  { name: "عرابة", district: "عكا", description: "من قرى يوم الأرض الخالدة.", displaced: false, image: ArrabaImg },
  { name: "سخنين", district: "عكا", description: "مدينة عربية مركز ثقافي.", displaced: false, image: SakhninImg },
  { name: "تلفيت", district: "نابلس", description: "قرية فلسطينية في الضفة الغربية.", displaced: false, image: TalfitImg },
];


function Villages() {
  const [showDisplaced, setShowDisplaced] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredVillages = villages.filter(
    (v) => v.displaced === showDisplaced
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4" dir="rtl">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
        القرى الفلسطينية
      </h1>

      {/* أزرار التبديل */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => {
            setShowDisplaced(true);
            setVisibleCount(4);
          }}
          className={`px-6 py-2 rounded-lg font-medium ${
            showDisplaced ? "bg-blue-700 text-white" : "bg-gray-200"
          }`}
        >
          قرى مهجّرة
        </button>

        <button
          onClick={() => {
            setShowDisplaced(false);
            setVisibleCount(4);
          }}
          className={`px-6 py-2 rounded-lg font-medium ${
            !showDisplaced ? "bg-blue-700 text-white" : "bg-gray-200"
          }`}
        >
          قرى غير مهجّرة
        </button>
      </div>

      {/* القرى */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredVillages.slice(0, visibleCount).map((village, index) => (
          <VillageCard key={index} {...village} />
        ))}
      </div>

      {/* عرض المزيد */}
      <LoadMoreButton
        onClick={() => setVisibleCount((prev) => prev + 4)}
        hasMore={visibleCount < filteredVillages.length}
      />

    <Footer />

    </div>
  );
}

export default Villages;
