import React from "react";
import { useState } from "react";
import ThreeDObject from "./ThreeDObject";
import PaymentModal from "../components/PaymentModal";

const CardComponent = ({ ThreeDContent, title, description }) => {
  const [ModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="relative h-60">{ThreeDContent}</div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex justify-between px-6 py-4">
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded">
          Deskripsi
        </button>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          Beli Sekarang!
        </button>
        <PaymentModal isOpen={ModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default CardComponent;
