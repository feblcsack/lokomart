import React from "react";
import ThreeDObject from "./ThreeDObject";

const CardAja = ({ ThreeDObject, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="relative h-60">{ThreeDObject}</div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex justify-between px-6 py-4">
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded">
          Deskripsi
        </button>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
          Beli Sekarang!
        </button>
      </div>
    </div>
  );
};

export default CardAja;
