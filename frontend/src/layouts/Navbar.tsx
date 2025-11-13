import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[70%] bg-white backdrop-blur-md text-gray-800 shadow-lg rounded-2xl px-6 py-3 z-50 ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Bridgehub</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="hover:text-[#215C8E] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#215C8E] transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-[#215C8E] transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-[#215C8E] transition-colors">
            Contact
          </a>
          <a href="/request-support">
            <button className="bg-[#215C8E] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all">
              Get Help
            </button>
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
          />
          <span
            className={`block h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center mt-4 space-y-3 md:hidden animate-slideDown">
          <a href="#home" className="hover:text-[#215C8E] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#215C8E] transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-[#215C8E] transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-[#215C8E] transition-colors">
            Contact
          </a>
          <button className="bg-[#215C8E] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all">
            Get Help
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
