import React from "react";
import coffee1 from "../assets/cups/Rectangle 9.png";
import coffee2 from "../assets/cups/Rectangle 10.png";
import coffee3 from "../assets/cups/Rectangle 11.png";
import coffee4 from "../assets/cups/Rectangle 12.png";
import coffee5 from "../assets/cups/Rectangle 13.png";
import coffee6 from "../assets/cups/Rectangle 14.png";
import coffee7 from "../assets/cups/Rectangle 15.png";
import coffee8 from "../assets/cups/Rectangle 16.png";

const FollowUs = () => {
  return (
    <div>
      <section className="space-y-2">
        <p className="text-center font-bold">Follow Us Now</p>
        <h1 className="font-bold text-2xl text-shadow-lg text-center">
          Our Popular Products
        </h1>
      </section>
      <section className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 my-10">
        <img src={coffee1} alt="" className="rounded-md  object-cover " />
        <img src={coffee2} alt="" className="rounded-md  object-cover " />
        <img src={coffee3} alt="" className="rounded-md  object-cover " />
        <img src={coffee4} alt="" className="rounded-md  object-cover " />
        <img src={coffee5} alt="" className="rounded-md  object-cover " />
        <img src={coffee6} alt="" className="rounded-md  object-cover " />
        <img src={coffee7} alt="" className="rounded-md  object-cover " />
        <img src={coffee8} alt="" className="rounded-md  object-cover " />
      </section>
    </div>
  );
};

export default FollowUs;
