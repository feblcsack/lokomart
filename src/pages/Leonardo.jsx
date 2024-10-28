import React, { useState, startTransition } from "react";
import Hero from "../templates/Hero";
import CanvasPage from "./CanvasPage";
import { HeroParallaxDemo } from "../test";
import CardContainer from "../components/CardContainer";
import { Link } from "react-router-dom";

const Leonardo = () => {
  const [inputCode, setInputCode] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State untuk menu

  const handleChange = (e) => {
    setInputCode(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    startTransition(() => {
      if (inputCode.to() === "RESKA") {
        setShowCard(true);
        setShowMenu(true); // Tampilkan menu saat kode benar
      } else {
        setShowCard(false);
        setShowMenu(false); // Sembunyikan menu saat kode salah
        alert("kode salah");
      }
    });
  };

  return (
    <div>
      <Hero
        inputCode={inputCode}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
      {showMenu && (
        <div className="relative z-50 bottom-32 mt-10 md:bottom-40 left-0 w-full flex flex-col items-center p-2 md:p-6 py-10">
          <div className="bg-primary text-white pt-2 px-6 md:px-20 rounded-t-2xl shadow-lg text-center">
            <h5 className="text-2xl font-semibold mb-1">Menu Kami</h5>
          </div>

          <div className="bg-white/80 text-primary bg-opacity-75 rounded-3xl shadow-lg w-[90%] md:max-w-[350px] text-center p-2 md:p-4">
            <div className=" gap-2 md:gap-7 text-xs md:text-2xl">
              <Link
                to="/"
                className="block py-2 md:px-4 ml-4 rounded-2xl transition-all duration-300 bg-primary text-white px-2 md:px-10"
              >
                Makanan & Minuman
              </Link>
            </div>
          </div>
        </div>
      )}
      {showCard && (
        <section id="card-container" className="my-10">
          <CardContainer />
          <CanvasPage />
        </section>
      )}

      <HeroParallaxDemo />
    </div>
  );
};

export default Leonardo;
