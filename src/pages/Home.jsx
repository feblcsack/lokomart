// src/pages/Home.jsx
import React, { useState } from "react";
import PaymentModal from "../components/PaymentModal";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Selamat Datang di Lokomart</h1>

      <button
        onClick={openModal}
        className="bg-primary text-white rounded-full px-5 py-2 hover:bg-primary-dark transition duration-300"
      >
        Beli Sekarang
      </button>

      <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
