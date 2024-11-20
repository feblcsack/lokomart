import React, { useState } from "react";
import ThreeDObject from "./ThreeDObject";
import PaymentModal from "../components/PaymentModal";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const CardComponent = ({ ThreeDContent, title, description, deskripsi }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const increaseItem = () => setItemCount((prev) => prev + 1);
  const decreaseItem = () => setItemCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg p-4 bg-gray-50 border border-black/[0.1] ">
      <div className="px-6 py-4">
        <div className="text-xl font-bold text-neutral-600 mb-2">{title}</div>
        <p className="text-neutral-500 text-sm max-w-sm mt-2">{description}</p>
      </div>
      <div className="relative h-60">{ThreeDContent}</div>

      <div className="flex flex-col sm:flex-row justify-between gap-2 px-4 py-2">
        <div className="flex justify-center gap-2">
          <button
            className="px-4 py-2 rounded-full border border-gray-400 text-gray-600 bg-white text-sm font-semibold hover:bg-gray-100 transition duration-200"
            onClick={decreaseItem}
          >
            -
          </button>
          <span className="text-md mt-2 font-normal text-neutral-600">
            {itemCount} Item
          </span>
          <button
            className="px-4 py-2 rounded-full border border-gray-400 text-gray-600 bg-white text-sm font-semibold hover:bg-gray-100 transition duration-200"
            onClick={increaseItem}
          >
            +
          </button>
        </div>
        <button
          className="px-4 flex py-2 rounded-xl bg-[#13112e] dark:bg-white dark:text-black text-white text-xs font-bold transition-transform transform hover:scale-105 justify-center items-center"
          onClick={openModal}
        >
          <MdOutlineAddShoppingCart className="text-lg mr-2" />
          Beli Sekarang!
        </button>
      </div>

      <PaymentModal isOpen={ModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CardComponent;
