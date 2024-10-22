import React, { useEffect, useRef, useState } from "react";
import PaymentModal from "./PaymentModal"; 

const Card = ({ title, description, image, isOpen, onToggle }) => {
  const cardRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false); 

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        if (isOpen) {
          onToggle();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div
      ref={cardRef}
      className="relative max-w-lg mx-auto bg-white rounded-3xl shadow-lg overflow-hidden md:w-[400px]"
    >
      <img
        src={image}
        className="w-full h-52 md:h-60 object-cover"
        alt={title}
      />
      <div className="p-6">
        <h5 className="text-2xl font-bold mb-3">{title}</h5>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-600 mb-4 text-md">{description}</p>
        </div>
        <button
          onClick={onToggle}
          className="bg-primary text-white py-2 px-6 mt-2 hover:bg-primary-dark transition-colors duration-300 rounded-lg"
        >
          {isOpen ? "Tutup" : "Deskripsi"}
        </button>

        <button
          onClick={openModal}
          className="bg-green-500 text-white py-2 px-6 mt-2 hover:bg-green-600 transition-colors duration-300 rounded-full ml-12"
        >
          Beli Sekarang!
        </button>
      </div>
      <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Card;
