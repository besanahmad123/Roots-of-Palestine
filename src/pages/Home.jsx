import flag from "../assets/images/palestine-flag.jpg";
import map from "../assets/images/palestine_map.jpg";
import Footer from "../components/Footer.jsx";
import InfoCard from "../components/InfoHomeCard.jsx";


function Home() {
  const infoCards = [
    "📍 الموقع: الشرق الأوسط",
    "📐 المساحة: حوالي 27,000 كم²",
    "👥 عدد السكان: حوالي 5 ملايين",
    "🏛 العاصمة: القدس",
    "💰 العملة: الشيكل الإسرائيلي",
    "🗣 اللغة الرسمية: العربية",
  ];



  return (
    <div className="p-10 text-center font-[Arial] bg-white ltr min-h-screen">
      <h1 className="text-[48px] font-bold text-[#233a51] mb-5">
        Roots of Palestine
      </h1>

      <p className="max-w-[750px] mx-auto mb-10 bg-[#f6f6f6] p-5 rounded-[10px] leading-[1.8]">
        فلسطين أرض الجذور العميقة والتاريخ العريق، حيث تتجسد الهوية والثقافة في
        كل مدينة وقرية. يهدف هذا الموقع إلى التعريف بفلسطين من خلال تسليط الضوء
        على مدنها وقراها وتراثها وأهم محطاتها التاريخية، بهدف حفظ الذاكرة
        الوطنية وتعزيز الانتماء الثقافي
      </p>


      {/* الصور */}
      <div className="flex justify-center gap-[30px] mb-[50px] flex-wrap">
        <img
          src={flag}
          alt="علم فلسطين"
          className="w-[300px] h-[180px] object-cover rounded-[10px]"
        />
        <img
          src={map}
          alt="خريطة فلسطين"
          className="w-[300px] h-auto rounded-[10px]"
        />
      </div>



      {/* البطاقات */}
      <div className="flex justify-center gap-4 flex-wrap mt-[50px]">
        {infoCards.map((text, index) => (
          <InfoCard key={index}>{text}</InfoCard>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;