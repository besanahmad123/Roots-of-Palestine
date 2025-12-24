function Heritage() {
  const tangible = [
    { name: "المواقع التاريخية", info: "أثار ومعالم تاريخية", image: "src/assets/images/tangible1.jpg" },
    { name: "الأزياء التقليدية", info: "الملابس التراثية الفلسطينية", image: "src/assets/images/tangible2.jpg" }
  ];

  const intangible = [
    { name: "الدبكات", info: "رقصات فلسطينية شعبية", image: "src/assets/images/intangible1.jpg" },
    { name: "الأكلات", info: "الأطباق التقليدية", image: "src/assets/images/intangible2.jpg" }
  ];

  const [filter, setFilter] = React.useState("tangible");

  const displayed = filter === "tangible" ? tangible : intangible;

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-[#2c3e50] mb-8">التراث الفلسطيني</h1>

      {/* أزرار الاختيار */}
      <div className="flex justify-center gap-4 mb-10">
        <button onClick={() => setFilter("tangible")} className={`px-4 py-2 rounded shadow ${filter === "tangible" ? "bg-blue-700 text-white" : "bg-white text-gray-700"}`}>تراث مادي</button>
        <button onClick={() => setFilter("intangible")} className={`px-4 py-2 rounded shadow ${filter === "intangible" ? "bg-blue-700 text-white" : "bg-white text-gray-700"}`}>تراث غير مادي</button>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {displayed.map((item, index) => (
          <div key={index} className="w-64 h-80 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col items-center">
            <img src={item.image} alt={item.name} className="w-40 h-40 object-cover mt-4 rounded"/>
            <div className="p-4 text-center flex flex-col justify-between flex-1">
              <h3 className="text-lg font-bold text-blue-700 mb-2">{item.name}</h3>
              <p className="text-gray-700 text-sm">{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Heritage;
