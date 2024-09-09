import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import heroData from '../docs/HeroData';
import { FlipWords } from '../components/ui/flip-words'; 
import { PlaceholdersAndVanishInput } from '../components/ui/placeholders-and-vanish-input'; // Impor komponen baru

const Hero = () => {
  const location = useLocation();
  const { pathname } = location;

  const currentData = heroData.find((data) => data.path === pathname) || {};
  const { image, title, description } = currentData;

  // Daftar placeholder untuk input baru
  const placeholders = [
    "Ayo, masukkan kode booking",
    "Masukkan kode booking ",
    "Di mana kode booking Anda?",
  ];

  // Fungsi untuk menangani input perubahan
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  // Fungsi untuk menangani submit
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  // Daftar kata-kata yang ingin diubah
  const words = ['Makanan', 'Minuman'];

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white/90 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        {/* Ganti input search dengan PlaceholdersAndVanishInput */}
        <div className="mb-4 flex items-center">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>

        {/* Teks dengan FlipWords */}
        <div className="mt-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Pesan <FlipWords words={words} />di Kereta?
          </h1>
          <p className="mt-3 text-lg md:text-xl">{description}</p>
        </div>
      </div>

      {/* Section Menu */}
      <div className="relative z-50 bottom-32 mt-5 md:bottom-40 left-0 w-full flex flex-col items-center p-2 md:p-6 py-10">
        <div className="bg-primary text-white pt-2 px-6 md:px-20 rounded-t-2xl shadow-lg text-center">
          <h5 className="text-2xl font-semibold mb-1">Menu Kami</h5>
        </div>

        <div className="bg-white/80 text-primary bg-opacity-75 rounded-3xl shadow-lg w-[90%] md:max-w-[350px] text-center p-2 md:p-4">
          <div className="flex gap-2 md:gap-7 text-xs md:text-2xl">
            <Link
              to="/"
              className={`block py-2 md:px-4 rounded-2xl transition-all duration-300 ${
                pathname === '/'
                  ? 'bg-primary text-white px-2 md:px-10'
                  : 'text-primary hover:bg-gray-200'
              }`}
            >
              Makanan
            </Link>
            <Link
              to="/vincent"
              className={`block py-2 md:px-4 rounded-2xl transition-all duration-300 ${
                pathname === '/vincent'
                  ? 'bg-primary text-white px-2 md:px-10'
                  : 'text-primary hover:bg-gray-200'
              }`}
            >
              Minuman
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
