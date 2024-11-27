// src/components/ProductDetails.js
import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const coffeeData = useLoaderData();
  const pImage = useRef(null);

  useEffect(() => {
    pImage.current.focus();
  }, []);

  const { name, chef, supplier, taste, category, details, photo } = coffeeData;
  return (
    <section>
      <Navbar></Navbar>
      <div className="bg-gray-100 px-24 py-5" ref={pImage} tabIndex="0">
        <Link to={"/"} className=" ">
          <button className="text-center font-bold">Back to Home</button>
        </Link>
      </div>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg md:my-14 my-5">
        <div className="flex justify-between p-10 items-center flex-col md:flex-row gap-5">
          <img src={photo} alt="Americano Coffee" className="mt-4" />
          <div className="text-left ">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <p>
              <strong>Chef:</strong> {chef}
            </p>
            <p>
              <strong>Supplier:</strong> {supplier}
            </p>
            <p>
              <strong>Taste:</strong> {taste}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Details:</strong> {details}
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default ProductDetails;
