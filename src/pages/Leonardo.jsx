import React from "react";
import Hero from "../templates/Hero";
// import Gallery from "../templates/Galery";
import Paintings from "../templates/Paintings";
import leonardoPaintings from "../docs/LeonardoPaintings";
// import ArtTimeline from "../components/ArtTimeline";
import CanvasPage from "./CanvasPage";
import { HeroParallaxDemo } from "../test";
import CardComponent from "../components/CardComponent";
import CardContainer from "../components/CardContainer";
// import { LayoutGridDemo } from "../tast";

const Leonardo = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      {/* <Gallery /> */}
      <CardContainer/>
      {/* <ArtTimeline /> */}
      <CanvasPage />
      <HeroParallaxDemo />
      {/* <LayoutGridDemo/> */}
    </div>
  );
};

export default Leonardo;
