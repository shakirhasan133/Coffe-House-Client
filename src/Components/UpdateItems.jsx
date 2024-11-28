import React, { useEffect, useRef } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";

const UpdateItems = () => {
  const { id } = useParams();
  const nameInput = useRef(null);
  const coffeeData = useLoaderData();

  const { name, chef, supplier, taste, category, details, photo } = coffeeData;

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateData = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`https://coffeehousebackend-kzmnpso7.b4a.run/edit-item/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
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
              Update Coffee Details
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Enter coffee name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="name"
                    ref={nameInput}
                    defaultValue={name}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Chef</label>
                  <input
                    type="text"
                    placeholder="Enter coffee chef"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="chef"
                    defaultValue={chef}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Supplier</label>
                  <input
                    type="text"
                    placeholder="Enter coffee supplier"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="supplier"
                    defaultValue={supplier}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Taste</label>
                  <input
                    type="text"
                    placeholder="Enter coffee taste"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="taste"
                    defaultValue={taste}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Category</label>
                  <input
                    type="text"
                    placeholder="Enter coffee category"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="category"
                    defaultValue={category}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Details</label>
                  <input
                    type="text"
                    placeholder="Enter coffee details"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="details"
                    defaultValue={details}
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-gray-700">Photo</label>
                  <input
                    type="text"
                    placeholder="Enter photo URL"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="photo"
                    defaultValue={photo}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-[#D2B48C] py-2 rounded-lg hover:bg-brown-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Update Coffee Details
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default UpdateItems;
