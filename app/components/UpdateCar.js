import { useState } from "react";
import useResource from "../hooks/useResource";

export default function UpdateCar({ car, onClose }) {
  const { updateResource } = useResource();
  const [make, setMake] = useState(car.make);
  const [model, setModel] = useState(car.model);
  const [year, setYear] = useState(car.year);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsUpdating(true);
    try {
      await updateResource(car.id, { make, model, year });
      alert('Car updated successfully');
      onClose(); // Close the update form
    } catch (error) {
      alert('Error updating car');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-xl p-8 max-w-md w-full transform transition-transform duration-300 scale-100 hover:scale-105">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Update Car Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2 text-lg font-medium">Make</label>
            <input
              type="text"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className="w-full p-4 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Enter car make"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2 text-lg font-medium">Model</label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full p-4 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Enter car model"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2 text-lg font-medium">Year</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full p-4 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Enter car year"
              required
            />
          </div>
          <div className="flex gap-4 justify-center">
            <button
              type="submit"
              disabled={isUpdating}
              className={`w-1/2 py-3 rounded-lg font-bold text-white transition-colors ${isUpdating ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {isUpdating ? 'Updating...' : 'Update Car'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-3 rounded-lg bg-gray-500 text-white font-bold hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
