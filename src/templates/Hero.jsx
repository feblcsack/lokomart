import React from "react";
import { Link } from "react-router-dom";
import heroData from "../docs/HeroData";
import { FlipWords } from "../components/ui/flip-words";
import CardContainer from "../components/CardContainer";

const Hero = ({ inputCode, handleChange, onSubmit }) => {
  const currentData = heroData[0] || {};
  const { image, description } = currentData;

  const words = ["Makanan", "Minuman"];

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white/100 via-white/40 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <form onSubmit={onSubmit} className="mb-4">
          <input
            type="text"
            value={inputCode}
            onChange={handleChange}
            placeholder="Masukkan kode unik"
            className="p-2 rounded-md border border-gray-300 text-black"
          />
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
          >
            Submit
          </button>
        </form>

        <div className="mt-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Pesan <FlipWords words={words} />
            di Kereta?
          </h1>
          <p className="mt-3 text-lg md:text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
