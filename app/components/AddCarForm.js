import { useState, useContext } from "react";
import useResource from "../hooks/useResource";
import { AuthContext } from "../context/auth";

export default function AddCarForm() {
    const { createResource } = useResource();
    const { tokens } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const newCar = {
            ...formData,
            owner: tokens.user_id, // Use owner ID from tokens
        };
        try {
            await createResource(newCar);
            setFormData({ make: '', model: '', year: '' });  // Reset form
        } catch (err) {
            setError('Failed to add car');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="max-w-md w-full p-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Add Car</h2>
                <div className="grid gap-4 mb-6">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Make</label>
                        <input
                            type="text"
                            name="make"
                            value={formData.make}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Model</label>
                        <input
                            type="text"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Year</label>
                        <input
                            type="number"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition-colors font-medium"
                >
                    {loading ? 'Adding...' : 'Add Car'}
                </button>
                {error && <p className="mt-4 text-red-600 dark:text-red-400 text-center">{error}</p>}
            </form>
        </div>
    );
}
