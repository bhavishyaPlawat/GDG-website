import React, { useState } from "react";

export default function EventForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date) {
      alert("Please fill out at least the event title and date!");
      return;
    }
    onSubmit(formData);
    setFormData({ title: "", date: "", location: "", description: "" });
  };

  return (
    <div className="bg-white dark:bg-[#202124] rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-[#1a73e8] dark:text-[#8ab4f8]">
        Create New Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Event Title */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-[#303134] dark:text-white focus:ring-2 focus:ring-[#1a73e8] outline-none transition"
            placeholder="e.g. Tech Innovation Summit"
          />
        </div>

        {/* Event Date */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-[#303134] dark:text-white focus:ring-2 focus:ring-[#1a73e8] outline-none transition"
          />
        </div>

        {/* Event Location */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-[#303134] dark:text-white focus:ring-2 focus:ring-[#1a73e8] outline-none transition"
            placeholder="e.g. Main Auditorium, GL Bajaj"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 h-28 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-[#303134] dark:text-white focus:ring-2 focus:ring-[#1a73e8] outline-none transition resize-none"
            placeholder="Describe your event details..."
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#1a73e8] text-white rounded-md hover:bg-[#155ab6] transition"
          >
            Save Event
          </button>
        </div>
      </form>
    </div>
  );
}
