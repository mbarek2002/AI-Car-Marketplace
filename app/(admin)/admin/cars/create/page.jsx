import React from "react";
import AddCarForm from "../_components/add-car-form";

export const metadata = {
  title: "Add New Car | Vehiql Admin",
  description: "Manage cars in your marketplace",
};

const AddCarPage = () => {
  return <div className="p-6">
    <h1 className="text-2xl font-bold mb-6 ">Add new Car</h1>
    <AddCarForm />
  </div>
};

export default AddCarPage;
