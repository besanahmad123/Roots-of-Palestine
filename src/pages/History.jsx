import React from "react";

function History() {
  const events = [
    {
      year: "1917",
      title: "وعد بلفور",
      description: "إصدار الحكومة البريطانية وعدًا بإقامة وطن قومي لليهود في فلسطين.",
      image: "src/assets/images/balfour.jpg",
    },
    {
      year: "1947",
      title: "قرار التقسيم",
      description: "قرار الجمعية العامة للأمم المتحدة بتقسيم فلسطين إلى دولتين.",
      image: "src/assets/images/partition.jpg",
    },
    {
      year: "1948",
      title: "النكبة",
      description: "تهجير مئات الآلاف من الفلسطينيين وإعلان قيام دولة إسرائيل.",
      image: "src/assets/images/nakba.jpg",
    },
    {
      year: "1967",
      title: "النكسة",
      description: "احتلال الضفة الغربية وقطاع غزة والقدس الشرقية.",
      image: "src/assets/images/naksa.jpg",
    },
    {
      year: "1987",
      title: "الانتفاضة الأولى",
      description: "انتفاضة شعبية فلسطينية ضد الاحتلال.",
      image: "src/assets/images/intifada1.jpg",
    },
    {
      year: "2000",
      title: "الانتفاضة الثانية",
      description: "انتفاضة شعبية ومسلحة عُرفت بانتفاضة الأقصى.",
      image: "src/assets/images/intifada2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">

      {/* العنوان */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#2c3e50] mb-3">
          التاريخ الفلسطيني
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          محطات تاريخية مفصلية شكّلت مسار القضية الفلسطينية
        </p>
      </div>

      {/* البطاقات */}
      <div className="flex flex-wrap justify-center gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="
              bg-white
              w-56
              rounded-xl
              shadow
              border
              border-gray-200
            "
          >
            {/* الصورة */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-32 object-cover rounded-t-xl"
            />


            {/* التاريخ بشكل مميز */}
            <div className="flex justify-center mt-3">
              <span className="
                bg-green-700
                text-white
                px-4
                py-1
                rounded-full
                text-sm
                font-bold
              ">
                {event.year}
              </span>
            </div>




            {/* المحتوى */}
            <div className="p-4 text-center">
              <h3 className="text-sm font-bold text-[#2c3e50] mb-2">
                {event.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default History;
