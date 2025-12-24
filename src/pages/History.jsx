function History() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* العنوان */}
      <h1 className="text-4xl font-bold text-center text-[#2c3e50] mb-12">
        الأحداث التاريخية في فلسطين
      </h1>

      {/* البطاقات */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* سايكس بيكو */}
        <div className="w-64 h-80 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col items-center">
          <img
            src="src/assets/images/سايكس بيكو.png.webp"
            alt="سايكس بيكو"
            className="w-40 h-40 object-cover mt-4 rounded"
          />
          <div className="p-4 text-center flex flex-col justify-between flex-1">
            <h3 className="text-lg font-bold text-blue-700 mb-2">
              1916 – اتفاقية سايكس بيكو
            </h3>
            <p className="text-gray-700 text-sm">
              تقسيم سري للمشرق العربي بين بريطانيا وفرنسا.
            </p>
          </div>
        </div>

        {/* وعد بلفور */}
        <div className="w-64 h-80 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col items-center">
          <img
            src="src/assets/images/وعد بلفور.jpg"
            alt="وعد بلفور"
            className="w-40 h-40 object-cover mt-4 rounded"
          />
          <div className="p-4 text-center flex flex-col justify-between flex-1">
            <h3 className="text-lg font-bold text-blue-700 mb-2">
              1917 – وعد بلفور
            </h3>
            <p className="text-gray-700 text-sm">
              تعهد بريطاني بإنشاء وطن قومي لليهود في فلسطين.
            </p>
          </div>
        </div>

        {/* النكبة */}
        <div className="w-64 h-80 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col items-center">
          <img
            src="src/assets/images/النكبة.png"
            alt="النكبة"
            className="w-40 h-40 object-cover mt-4 rounded"
          />
          <div className="p-4 text-center flex flex-col justify-between flex-1">
            <h3 className="text-lg font-bold text-blue-700 mb-2">
              1948 – النكبة
            </h3>
            <p className="text-gray-700 text-sm">
              تهجير جماعي للفلسطينيين وتدمير مئات القرى.
            </p>
          </div>
        </div>

        {/* النكسة */}
        <div className="w-64 h-80 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col items-center">
          <img
            src="src/assets/images/النكسة.jpg"
            alt="النكسة"
            className="w-40 h-40 object-cover mt-4 rounded"
          />
          <div className="p-4 text-center flex flex-col justify-between flex-1">
            <h3 className="text-lg font-bold text-blue-700 mb-2">
              1967 – النكسة
            </h3>
            <p className="text-gray-700 text-sm">
              احتلال الضفة الغربية والقدس وقطاع غزة.
            </p>
          </div>
        </div>

        {/* الانتفاضة الأولى */}
        <div className="w-64 h-80 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col items-center">
          <img
            src="src/assets/images/الانتفاضة الاولى.jpg"
            alt="الانتفاضة الأولى"
            className="w-40 h-40 object-cover mt-4 rounded"
          />
          <div className="p-4 text-center flex flex-col justify-between flex-1">
            <h3 className="text-lg font-bold text-blue-700 mb-2">
              1987 – الانتفاضة الأولى
            </h3>
            <p className="text-gray-700 text-sm">
              انتفاضة شعبية ضد الاحتلال الإسرائيلي.
            </p>
          </div>
        </div>

        {/* الانتفاضة الثانية */}
        <div className="w-64 h-80 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col items-center">
          <img
            src="src/assets/images/الانتفاضة التانيةjpg.jpg"
            alt="الانتفاضة الثانية"
            className="w-40 h-40 object-cover mt-4 rounded"
          />
          <div className="p-4 text-center flex flex-col justify-between flex-1">
            <h3 className="text-lg font-bold text-blue-700 mb-2">
              2000 – الانتفاضة الثانية
            </h3>
            <p className="text-gray-700 text-sm">
              مواجهات واسعة بعد اقتحام المسجد الأقصى.
            </p>
          </div>
        </div>

        {/* اتفاقية أوسلو */}
        <div className="w-64 h-80 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col items-center">
          <img
            src="src/assets/images/اتفاقية اوسلو.jpg"
            alt="اتفاقية أوسلو"
            className="w-40 h-40 object-cover mt-4 rounded"
          />
          <div className="p-4 text-center flex flex-col justify-between flex-1">
            <h3 className="text-lg font-bold text-blue-700 mb-2">
              1993 – اتفاقية أوسلو
            </h3>
            <p className="text-gray-700 text-sm">
              اتفاق سياسي بين منظمة التحرير الفلسطينية وإسرائيل.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;

