import React, { useEffect, useRef, useState } from "react";
import logoImg from "/kai.png";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  // useEffect(() => {
  //   let lastScrollTop = 0;
  //   let scrollTimeout;

  //   const handleScroll = () => {
  //     const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //     if (currentScrollTop > lastScrollTop) {
  //       setIsScrolling(true);
  //       setIsVisible(false);
  //     } else {
  //       setIsScrolling(false);
  //       setIsVisible(true);
  //     }

  //     lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

  //     clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(() => {
  //       setIsScrolling(false);
  //       setIsVisible(true);
  //     }, 200);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

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
        <ul className="flex space-x-2 ml-auto mr-5">
          <li className="relative group">
            <a
              href="#hero"
              className="block px-3 py-2 rounded hover:bg-green-700 hover:text-white transition-all duration-300"
            >
              Beranda
            </a>
          </li>
          <li className="relative group">
            <a
              href="#about"
              className="block px-3 py-2 rounded hover:bg-green-700 hover:text-white transition-all duration-300"
            >
              Tentang
            </a>
          </li>
        </ul>

        {/* Tombol 3D di kanan */}
        <div className="flex items-center">
          <a
            href="#3d"
            className="bg-orange-500 text-center text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 
              sm:px-3 sm:py-1.5 sm:text-sm md:px-5 md:py-2.5 md:text-base lg:px-6 lg:py-3 lg:text-lg"
          >
            Lacak Pesananmu!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
