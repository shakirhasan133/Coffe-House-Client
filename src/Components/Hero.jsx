import React from "react";
import bg from "../assets/more/3.png";

const Hero = () => {
  return (
    <div
      className="flex bg-cover bg-center w-full h-[400px] md:h-[550px] justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="md:w-1/2 hidden md:block"></div>
      <div className="md:w-1/2 space-y-3 p-3 md:p-0 text-center md:text-left">
        <h1 className="font-bold text-3xl text-white">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="md:w-2/3 text-xl text-white">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="bg-[#E3B577] p-2 rounded-sm">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
