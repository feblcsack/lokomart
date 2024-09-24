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
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Leonardo />} />
          <Route path="/vincent" element={<Vincent />} />
          <Route path="/pablo" element={<Pablo />} />
          <Route path="/michaelangelo" element={<Michaelangelo />} />
          <Route path="/dali" element={<Dali />} />
        </Routes>
      )}
    
      <Footer />
    </>
  );
}

export default App;
