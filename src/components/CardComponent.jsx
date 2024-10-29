import React, { useState } from "react";
import ThreeDObject from "./ThreeDObject";
import PaymentModal from "../components/PaymentModal";

const CardComponent = ({ ThreeDContent, title, description, deskripsi }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const toggleDescription = () => setShowDescription((prev) => !prev);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="relative h-60">{ThreeDContent}</div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex justify-between gap-2 px-4 py-2">
        <button
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
          onClick={toggleDescription}
        >
          {showDescription ? "Sembunyikan Deskripsi" : "Deskripsi"}
        </button>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
          onClick={openModal}
        >
          Beli Sekarang!
        </button>
      </div>
      {showDescription && (
        <div className="mt-4 px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
          <p>{deskripsi}</p>
        </div>
      )}
      <PaymentModal isOpen={ModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CardComponent;
