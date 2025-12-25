function HeritageSwitch({ type, setType }) {
  return (
    <div className="flex justify-center gap-6 mb-14">
      <button
        onClick={() => setType("material")}
        className={`px-8 py-3 text-lg rounded-xl font-semibold shadow transition ${
          type === "material"
            ? "bg-[#2c3e50] text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        تراث مادي
      </button>
      <button
        onClick={() => setType("immaterial")}
        className={`px-8 py-3 text-lg rounded-xl font-semibold shadow transition ${
          type === "immaterial"
            ? "bg-[#2c3e50] text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        تراث غير مادي
      </button>
    </div>
  );
}

export default HeritageSwitch;