import React from "react";
import { useLoaderData } from "react-router-dom";

const OurProducs = () => {
  const coffees = useLoaderData() || [];

  const { _id, name, chef, supplier, taste, category, details, photo } =
    coffees;

  return (
    <div className="container mx-auto p-20">
      <h1 className="text-center text-2xl font-extrabold">Our Products</h1>

      {coffees.map((coffee) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 flex items-center"
          key={coffee._id}
        >
          {" "}
          <img
            src="https://via.placeholder.com/150"
            alt="Coffee Cup"
            className="w-1/3 h-auto rounded-lg"
          />{" "}
          <div className="ml-4">
            {" "}
            <h2 className="text-xl font-bold">Name: {coffee.name}</h2>{" "}
            <p className="text-gray-700">Chef: Mr. Nibra Sweden</p>{" "}
            <p className="text-gray-700">{details}</p>{" "}
          </div>{" "}
          <div className="ml-auto flex flex-col space-y-2">
            {" "}
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              {" "}
              {/* <FaEye className="text-gray-700" />{" "} */}
            </button>{" "}
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              {" "}
              {/* <FaPencilAlt className="text-gray-700" />{" "} */}
            </button>{" "}
            <button className="p-2 bg-red-200 rounded-full hover:bg-red-300">
              {" "}
              {/* <FaTrash className="text-red-700" />{" "} */}
            </button>{" "}
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default OurProducs;
