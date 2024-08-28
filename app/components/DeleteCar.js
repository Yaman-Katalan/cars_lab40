import { useState } from "react";
import useResource from "../hooks/useResource";

export default function DeleteCar({ carId, onClose }) {
    const { deleteResource } = useResource();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await deleteResource(carId);
            alert('Car deleted successfully');
            onClose(); // Close the delete confirmation
        } catch (error) {
            alert('Error deleting car');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-2xl max-w-sm w-full transition-transform transform scale-100 hover:scale-105">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Delete Confirmation</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">Are you absolutely sure you want to delete this car? This action cannot be undone.</p>
                <div className="flex justify-center gap-6">
                    <button
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className={`py-3 px-6 rounded-lg font-semibold text-white transition-colors ${isDeleting ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'} dark:bg-red-500 dark:hover:bg-red-400`}
                    >
                        {isDeleting ? 'Deleting...' : 'Confirm'}
                    </button>
                    <button
                        onClick={onClose}
                        className="py-3 px-6 rounded-lg bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
