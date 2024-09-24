import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import VincentPaintings from "../docs/VincentPaintings";
import Paintings from "../templates/Paintings";
import { HeroParallaxDemo } from "../test";
import CanvasPage from "./CanvasPage";
import CardAsli from "../components/CardAsli";

const Vincent = () => {
  const location = useLocation();

  return (
    <div>
      <Hero />
      {/* <Gallery /> */}
      <CardAsli/>
      <CanvasPage />
      <HeroParallaxDemo/>
    </div>
  );
};

export default Vincent;
