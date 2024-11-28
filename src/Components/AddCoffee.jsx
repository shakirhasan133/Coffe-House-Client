import React, { useEffect, useRef } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const nameInput = useRef(null);

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffees = { name, chef, supplier, taste, category, details, photo };
    console.log(coffees);

    fetch("https://coffeehousebackend-kzmnpso7.b4a.run/addCoffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffees),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Thank you",
            text: "Coffee Added Successfully",
            icon: "success",
          });
          form.reset();
        } else {
          Swal.fire({
            title: "Opps",
            text: "Something Went Wrong",
            icon: "error",
          });
        }
        console.log(data);
      });
  };

  return (
    <section>
      <Navbar></Navbar>
      <section>
        <div className="bg-gray-100 px-24 py-5">
          <Link to={"/"} className=" ">
            <button className="text-center font-bold">Back to Home</button>
          </Link>
        </div>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Add New Coffee
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleAddCoffee}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Enter coffee name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="name"
                    ref={nameInput}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Chef</label>
                  <input
                    type="text"
                    placeholder="Enter coffee chef"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="chef"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Supplier</label>
                  <input
                    type="text"
                    placeholder="Enter coffee supplier"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="supplier"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Taste</label>
                  <input
                    type="text"
                    placeholder="Enter coffee taste"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="taste"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Category</label>
                  <input
                    type="text"
                    placeholder="Enter coffee category"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="category"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Details</label>
                  <input
                    type="text"
                    placeholder="Enter coffee details"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="details"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-gray-700">Photo</label>
                  <input
                    type="text"
                    placeholder="Enter photo URL"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="photo"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-[#D2B48C] py-2 rounded-lg hover:bg-brown-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Add Coffee
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default AddCoffee;
