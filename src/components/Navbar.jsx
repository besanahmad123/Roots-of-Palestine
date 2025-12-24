import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow-md border-b-4 border-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-12 flex items-center justify-between">
        {/* مساحة فارغة يسار */}
        <div className="w-32"></div>

        {/* العنوان والروابط في الوسط */}
        <div className="text-center flex-1">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Roots of Palestine
          </h1>
          <p className="text-xl text-gray-700 mb-12">جذور فلسطين</p>

          {/* الروابط كصناديق مربعة جنب بعض */}
          <nav className="flex justify-center gap-6 flex-wrap">
            <Link 
              to="/" 
              className="px-6 py-4 bg-gray-100 border-2 border-gray-300 rounded-lg text-lg font-semibold text-gray-800 hover:bg-green-50 hover:border-green-600 hover:text-green-700 transition-all duration-300"
            >
              الرئيسية
            </Link>
            <Link 
              to="/cities" 
              className="px-6 py-4 bg-gray-100 border-2 border-gray-300 rounded-lg text-lg font-semibold text-gray-800 hover:bg-green-50 hover:border-green-600 hover:text-green-700 transition-all duration-300"
            >
              المدن
            </Link>
            <Link 
              to="/villages" 
              className="px-6 py-4 bg-gray-100 border-2 border-gray-300 rounded-lg text-lg font-semibold text-gray-800 hover:bg-green-50 hover:border-green-600 hover:text-green-700 transition-all duration-300"
            >
              القرى
            </Link>
            <Link 
              to="/history" 
              className="px-6 py-4 bg-gray-100 border-2 border-gray-300 rounded-lg text-lg font-semibold text-gray-800 hover:bg-green-50 hover:border-green-600 hover:text-green-700 transition-all duration-300"
            >
              التاريخ
            </Link>
            <Link 
              to="/heritage" 
              className="px-6 py-4 bg-gray-100 border-2 border-gray-300 rounded-lg text-lg font-semibold text-gray-800 hover:bg-green-50 hover:border-green-600 hover:text-green-700 transition-all duration-300"
            >
              التراث
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-4 bg-gray-100 border-2 border-gray-300 rounded-lg text-lg font-semibold text-gray-800 hover:bg-green-50 hover:border-green-600 hover:text-green-700 transition-all duration-300"
            >
              تواصل معنا
            </Link>
          </nav>
        </div>

        {/* المفتاح على اليمين */}
        <div>
          <img 
            src="src/assets/images/key-olive.jpg" 
            alt="مفتاح العودة وغصن الزيتون"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;