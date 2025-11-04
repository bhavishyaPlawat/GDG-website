import React from "react";

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white dark:bg-[#303134] rounded-xl p-8 shadow-lg w-full max-w-lg relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-3 text-[#1a73e8] dark:text-[#8ab4f8]">
          {event.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Date:</strong> {event.date}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Location:</strong> {event.location}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
          {event.description}
        </p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1a73e8] text-white rounded-md hover:bg-[#155ab6] transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
