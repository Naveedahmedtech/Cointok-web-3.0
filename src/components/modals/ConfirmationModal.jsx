import React from "react";
import { IoCheckmarkCircleOutline, IoClose } from "react-icons/io5";

const ConfirmationModal = ({ isOpen, onClose, securityPin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative bg-gray-800 rounded-lg shadow-2xl px-10 py-8 max-w-[600px] mx-5 md:mx-0">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-100"
        >
          <IoClose className="h-5 w-5" />
        </button>
        <div className="text-center">
          <IoCheckmarkCircleOutline className="mx-auto text-4xl text-green-400" />
          <h3 className="text-xl font-semibold text-white mt-5">Thank You!</h3>
          <p className="mt-2 text-gray-300">
            The coin listing process may take some time. We will contact you on
            Telegram once your coin is approved for listing.
          </p>
          <div className="mt-4">
            <p className="text-gray-300">
              Please Use this Security PIN to contact us.
            </p>
            <p className="text-3xl text-white font-semibold mt-4">
              {securityPin || "00000"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
