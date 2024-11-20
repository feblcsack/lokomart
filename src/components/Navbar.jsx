import React, { useEffect, useRef, useState } from "react";
import logoImg from "/kai.png";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-[99999] bg-white text-black shadow-lg border-b border-gray-300 ${
        isVisible && !isScrolling
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      } transition-transform duration-300 ease-out`}
    >
      <div className="flex items-center justify-between p-4">
        {/* Logo di kiri */}
        <div className="flex items-center">
          <img src={logoImg} alt="Logo" className="w-30 h-20 " />
        </div>

        {/* Menu di kanan */}
        <ul className="hidden md:flex space-x-2 ml-auto mr-5">
          <li className="relative group">
            <a
              href="#hero"
              className="block px-3 py-2 rounded hover:bg-neutral-300 hover:text-white transition-all duration-300"
            >
              Beranda
            </a>
          </li>
          <li className="relative group">
            <a
              href="#about"
              className="block px-3 py-2 rounded  hover:bg-neutral-300 hover:text-white transition-all duration-300"
            >
              Tentang
            </a>
          </li>
        </ul>

        {/* Tombol 3D di kanan */}
        <div className="hidden md:flex relative">
          <a
            href="#3d"
            className="bg-orange-500 text-center text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all duration-300"
          >
            Lacak Pesananmu!
          </a>
        </div>

        {/* Button Hamburger untuk Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1 items-center"
        >
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full pb-10 flex flex-col items-center space-y-4 pt-4">
          <a
            href="#hero"
            className="block px-3 py-2 rounded hover:bg-green-700 hover:text-white transition-all duration-300"
            onClick={toggleMenu}
          >
            Beranda
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded hover:bg-green-700 hover:text-white transition-all duration-300"
            onClick={toggleMenu}
          >
            Tentang
          </a>
          <a
            href="#3d"
            className="bg-orange-500 text-center text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all duration-300"
            onClick={toggleMenu}
          >
            Lacak Pesananmu!
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
