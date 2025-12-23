import flag from "../assets/images/palestine-flag.jpg";
import map from "../assets/images/palestine_map.jpg";

function Home() {
  return (
    <div className="p-10 text-center font-[Arial] bg-white ltr min-h-screen">

      {/* العنوان */}
      <h1 className="text-[48px] font-bold text-[#233a51] mb-5">
        Roots of Palestine
      </h1>

      {/* النص */}
      <p className="
        max-w-[750px]
        mx-auto
        mb-10
        bg-[#f6f6f6]
        p-5
        rounded-[10px]
        leading-[1.8]
      ">
        فلسطين أرض الجذور العميقة والتاريخ العريق، حيث تتجسد الهوية والثقافة في
        كل مدينة وقرية. يهدف هذا الموقع إلى التعريف بفلسطين من خلال تسليط الضوء
        على مدنها وقراها وتراثها وأهم محطاتها التاريخية، بهدف حفظ الذاكرة
        الوطنية وتعزيز الانتماء الثقافي.
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
        <div className="bg-[#f1f1f1] w-[200px] h-[100px] p-5 rounded-[10px] text-[16px] shadow hover:scale-105 transition flex items-center justify-center">
          📍 الموقع: الشرق الأوسط
        </div>

        <div className="bg-[#f1f1f1] w-[200px] h-[100px] p-5 rounded-[10px] text-[16px] shadow hover:scale-105 transition flex items-center justify-center">
          📐 المساحة: حوالي 27,000 كم²
        </div>

        <div className="bg-[#f1f1f1] w-[200px] h-[100px] p-5 rounded-[10px] text-[16px] shadow hover:scale-105 transition flex items-center justify-center">
          👥 عدد السكان: حوالي 5 ملايين
        </div>

        <div className="bg-[#f1f1f1] w-[200px] h-[100px] p-5 rounded-[10px] text-[16px] shadow hover:scale-105 transition flex items-center justify-center">
          🏛 العاصمة: القدس
        </div>

        <div className="bg-[#f1f1f1] w-[200px] h-[100px] p-5 rounded-[10px] text-[16px] shadow hover:scale-105 transition flex items-center justify-center">
          💰 العملة: الشيكل الإسرائيلي
        </div>

        <div className="bg-[#f1f1f1] w-[200px] h-[100px] p-5 rounded-[10px] text-[16px] shadow hover:scale-105 transition flex items-center justify-center">
          🗣 اللغة الرسمية: العربية
        </div>
      </div>

    </div>
  );
}

export default Home;
