import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full bg-[#f6f6f6] shadow-md">
      <nav
        className="
          flex
          flex-row-reverse
          justify-between
          items-center
          px-100
          py-100
          rtl
        "
      >
        {/* العنوان */}
        <h2 className="text-2xl font-bold text-[#2c3e50]">
          Roots of Palestine
        </h2>

        {/* الروابط */}
        <div className="flex gap-x-5">
          <Link
            to="/" 
            className="
              bg-white
              px-4
              py-2
              rounded-md
              shadow
              text-[#0f1a21]
              hover:bg-[#c2cad1]
              hover:text-white
              transition
        
              
            "
          >
            Home
          </Link>

          <Link
            to="/cities"
            className="
              bg-white
              px-4
              py-2
              rounded-md
              shadow
              text-[#3b4a57]
              hover:bg-[#e3e6e8]
              hover:text-white
              transition
             
            "
          >
            Cities
          </Link>

          <Link
            to="/villages"
            className="
              bg-white
              px-4
              py-2
              rounded-md
              shadow
              text-[#2c3e50]
              hover:bg-[#cacdcf]
              hover:text-white
              transition
              
            "
          >
            Villages
          </Link>

          <Link
            to="/history"
            className="
              bg-white
              px-4
              py-2
              rounded-md
              shadow
              text-[#2c3e50]
              hover:bg-[#e2e4e6]
              hover:text-white
              transition
              
            "
          >
            History
          </Link>

          <Link
            to="/heritage"
            className="
              bg-white
              px-6
              py-3
              rounded-md
              shadow
              text-[#2c3e50]
              hover:bg-[#d7dde3]
              hover:text-white
              transition
             
            "
          >
            Heritage
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
