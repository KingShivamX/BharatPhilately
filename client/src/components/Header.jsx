import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#41102D] p-4 text-white flex flex-col md:flex-row items-center justify-between relative w-full h-20">
      {/* Logo and Branding */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <span className="text-2xl font-bold">BharatPhilately</span>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white"
        >
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 absolute md:static top-16 left-0 w-full md:w-auto bg-[#41102D] md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} md:opacity-100 md:translate-y-0`}
        style={{ zIndex: 10 }}
      >
        <Link to="/" className="block md:inline-block mb-2 md:mb-0 px-2 py-1 text-center hover:underline">
          Home
        </Link>
        <Link to="/auth/login" className="block md:inline-block mb-2 md:mb-0 px-2 py-1 text-center hover:underline">
          Login
        </Link>
        <Link to="/auth/register" className="block md:inline-block mb-2 md:mb-0 px-2 py-1 text-center hover:underline">
          Register
        </Link>
        <Link to="/about" className="block md:inline-block mb-2 md:mb-0 px-2 py-1 text-center hover:underline">
          About Us
        </Link>
        <Link to="/services" className="block md:inline-block mb-2 md:mb-0 px-2 py-1 text-center hover:underline">
          Services
        </Link>
        <Link to="/contact" className="block md:inline-block mb-2 md:mb-0 px-2 py-1 text-center hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
