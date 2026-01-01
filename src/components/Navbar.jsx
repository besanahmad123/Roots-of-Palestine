import { Link } from "react-router-dom";
import KeyOliveImg from "../assets/images/key-olive.jpg";

function Navbar() {
  const navLinks = [
    { to: "/", label: "الرئيسية" },
    { to: "/cities", label: "المدن" },
    { to: "/villages", label: "القرى" },
    { to: "/history", label: "التاريخ" },
    { to: "/heritage", label: "التراث" },
    { to: "/contact", label: "تواصل معنا" },
  ];

  const linkClasses =
    "px-6 py-4 bg-gray-100 border-2 border-gray-300 rounded-lg text-lg font-semibold text-gray-800 hover:bg-green-50 hover:border-green-600 hover:text-green-700 transition-all duration-300";

  return (
    <header className="bg-white shadow-md border-b-4 border-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-12 flex items-center justify-between">
        
        <div className="w-32"></div>

        {/* العنوان والروابط في الوسط */}
        <div className="text-center flex-1">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Roots of Palestine
          </h1>
          <p className="text-xl text-gray-700 mb-12">جذور فلسطين</p>

          {/* الروابط كصناديق مربعة جنب بعض */}
          <nav className="flex justify-center gap-6 flex-wrap">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.to} className={linkClasses}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* المفتاح على اليمين */}
        <div>
          <img
            src={KeyOliveImg}
            alt="مفتاح العودة وغصن الزيتون"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;