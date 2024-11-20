import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Paintings from "./templates/Paintings";
import ArtTimeline from "./components/ArtTimeline";
import CanvasPage from "./pages/CanvasPage";
import Vincent from "./pages/Vincent";
import Leonardo from "./pages/Leonardo";
import Footer from "./components/Footer";
import Pablo from "./pages/Pablo";
import Michaelangelo from "./pages/Michaelangelo";
import Dali from "./pages/Dali";
import Loader from "./components/Loader";
import { HeroParallaxDemo } from "./test";
import CardComponent from "./components/CardComponent";
import CardContainer from "./components/CardContainer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {


    console.log('%c Selamat Datang!', 'color: #00ff00; font-size: 24px; font-weight: bold;');

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Leonardo />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
