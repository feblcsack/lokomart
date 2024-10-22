import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import DaliPaintings from "../docs/DaliPaintings";
import Paintings from "../templates/Paintings";
import ArtTimeline from "../components/ArtTimeline";
import CanvasPage from "./CanvasPage";

const Dali = () => {
  const location = useLocation();

  return (
    <div>
      <Hero />
      <Gallery/>
      <Paintings painterData={DaliPaintings} painterName="Salvador Dali" />
      <ArtTimeline />
              <CanvasPage />
    </div>
  );
};

export default Dali;
