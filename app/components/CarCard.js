import React from "react";

export default function CarCard({ car, onUpdate, onDelete }) {
    return (
        <div className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-6 flex flex-col">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img
                    src={`https://via.placeholder.com/400x200?text=${car.make}+${car.model}`}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-40 object-cover"
                />
            </div>
            <div className="relative pt-32">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2" style={{ marginTop: '20px' }}>
                    {car.make} {car.model}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    Year: {car.year}
                </p>
                <div className="flex flex-col space-y-2">
                    {onUpdate && (
                        <button
                            onClick={() => onUpdate(car.id)}
                            className="py-3 px-5 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-300 transition-colors"
                        >
                            Edit
                        </button>
                    )}
                    {onDelete && (
                        <button
                            onClick={() => onDelete(car.id)}
                            className="py-3 px-5 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 dark:bg-red-400 dark:hover:bg-red-300 transition-colors"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
