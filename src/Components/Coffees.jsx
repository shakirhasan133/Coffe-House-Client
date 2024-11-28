import React, { useEffect, useState } from "react";
import { FaCoffee, FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Coffees = () => {
  const [CoffeeItem, setCoffeeItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://coffeehousebackend-kzmnpso7.b4a.run/products")
      .then((res) => res.json())
      .then((data) => setCoffeeItem(data));
  }, []);

  // Update or edit an item
  const handleUpdate = (id) => {
    navigate(`/edit-item/${id}`);
  };

  // Delete an item
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffeehousebackend-kzmnpso7.b4a.run/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingCoffees = CoffeeItem.filter(
                (coffees) => coffees._id !== id
              );
              setCoffeeItem(remainingCoffees);
            } else {
              Swal.fire({
                title: "Error!",
                text: "Something went wrong",
                icon: "error",
              });
            }
          });
      }
    });
  };

  return (
    <div className="my-10 container mx-auto">
      <section className="space-y-2">
        <p className="font-bold text-center">--- Sip & Savor ---</p>
        <h1 className="font-bold text-2xl text-shadow-lg text-center">
          Our Popular Products ( {CoffeeItem.length} )
        </h1>
        <div className="text-center flex justify-center items-center">
          <Link to={"/add-coffee"}>
            <button className="font-bold text-shadow-lg  text-white bg-[#E3B577] p-2 text-center flex justify-center items-center gap-1">
              Add Coffee
              <FaCoffee />
            </button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full my-5">
        {CoffeeItem.map((coffee) => (
          <div
            className="w-full rounded overflow-hidden shadow-lg bg-white p-4 flex items-center"
            key={coffee._id}
          >
            <img
              src={coffee.photo}
              alt={coffee.name}
              className="max-w-[150px] h-auto rounded-lg"
            />
            <div className="ml-4 flex-grow">
              <h2 className="text-xl font-bold">Name: {coffee.name}</h2>
              <p className="text-gray-700">Chef: {coffee.chef}</p>
              <p className="text-gray-700">Price: 890 Taka</p>
            </div>
            <div className="ml-auto flex flex-col space-y-2">
              <Link to={`/product-details/${coffee._id}`}>
                <button
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  title="View Details"
                >
                  <FaEye className="text-gray-700" />
                </button>
              </Link>
              <button
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                title="Edit"
                onClick={() => handleUpdate(coffee._id)}
              >
                <FaPencilAlt className="text-gray-700" />
              </button>
              <button
                className="p-2 bg-red-200 rounded-full hover:bg-red-300"
                onClick={() => handleDelete(coffee._id)}
                title="Delete"
              >
                <FaTrash className="text-red-700" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Coffees;
