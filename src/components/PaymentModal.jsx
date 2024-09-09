// src/components/PaymentModal.jsx
import React from "react";

const PaymentModal = ({ isOpen, onClose }) => {
  const handlePayment = (e) => {
    e.preventDefault();
    alert("Pembayaran berhasil!");
    onClose(); // Menutup modal setelah pembayaran berhasil
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Isi Detail Pembayaran</h2>
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama Lengkap:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Nama Lengkap"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Alamat Pengiriman:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Alamat Pengiriman"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nomor Kartu:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
            >
              Bayar
            </button>
            <button
              type="button"
              className="text-red-500 px-4 py-2 rounded-md hover:bg-red-100 transition"
              onClick={onClose}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
