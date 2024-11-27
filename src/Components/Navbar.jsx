import React from "react";
import bg from "../assets/nav.png";
import logo from "../assets/more/logo1.png";

const Navbar = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-16 flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center justify-center gap-2">
        <img src={logo} alt="" className="w-10" />
        <h1 className="text-white font-bold text-3xl">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Navbar;
