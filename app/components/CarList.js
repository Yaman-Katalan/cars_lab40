import { useContext, useState } from "react";
import useResource from "../hooks/useResource";
import { AuthContext } from "../context/auth";
import CarCard from "./CarCard";
import UpdateCar from "./UpdateCar";
import DeleteCar from "./DeleteCar";

export default function CarsList() {
    const { resource, isLoading, isError, updateResource, deleteResource } = useResource();
    const { tokens } = useContext(AuthContext);
    const [editingCar, setEditingCar] = useState(null);
    const [deletingCarId, setDeletingCarId] = useState(null);

    if (isLoading) return <div className="text-center py-8 text-xl text-gray-600 dark:text-gray-300">Loading cars...</div>;
    if (isError) return <div className="text-center py-8 text-xl text-red-600 dark:text-red-400">Error loading cars.</div>;

    const userId = tokens?.user_id;
    const userCars = resource?.filter(car => car.owner === userId);
    const otherCars = resource?.filter(car => car.owner !== userId);

    const handleUpdate = (carId) => {
        const carToUpdate = resource.find(car => car.id === carId);
        setEditingCar(carToUpdate);
    };

    const handleDelete = (carId) => {
        setDeletingCarId(carId);
    };

    const closeUpdateForm = () => {
        setEditingCar(null);
    };

    const closeDeleteConfirmation = () => {
        setDeletingCarId(null);
    };

    return (
        <div className="flex flex-col items-center p-8 bg-gray-200 dark:bg-gray-800 min-h-screen">
            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">Your Cars</h2>
            <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {userCars?.length > 0 ? (
                    userCars.map(car => (
                        <CarCard
                            key={car.id}
                            car={car}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-600 dark:text-gray-300">
                        <p>No cars owned by you.</p>
                    </div>
                )}
            </div>

            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mt-12 mb-6">Other Cars</h2>
            <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {otherCars?.length > 0 ? (
                    otherCars.map(car => (
                        <CarCard key={car.id} car={car} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-600 dark:text-gray-300">
                        <p>No cars owned by others.</p>
                    </div>
                )}
            </div>

            {editingCar && (
                <UpdateCar
                    car={editingCar}
                    onClose={closeUpdateForm}
                    updateResource={updateResource}
                />
            )}

            {deletingCarId && (
                <DeleteCar
                    carId={deletingCarId}
                    onClose={closeDeleteConfirmation}
                    deleteResource={deleteResource}
                />
            )}
        </div>
    );
}
