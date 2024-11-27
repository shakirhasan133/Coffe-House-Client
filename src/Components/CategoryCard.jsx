import React from "react";
import awesome from "../assets/icons/1.png";
import highQuality from "../assets/icons/2.png";
import pureGrade from "../assets/icons/3.png";
import properRosting from "../assets/icons/4.png";

const CategoryCard = () => {
  return (
    <div className="px-[10%] bg-[#ECEAE3]">
      <section className="grid md:grid-cols-4 grid-cols-2 gap-3 ">
        {/* Card 1 */}
        <div className=" p-5 space-y-2">
          <img src={awesome} alt="" />
          <h3 className="font-bold text-xl">Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        {/* Card 2 */}
        <div className=" p-5 space-y-2">
          <img src={highQuality} alt="" />
          <h3 className="font-bold text-xl">High Quality</h3>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>

        {/* Card 3 */}

        <div className=" p-5 space-y-2">
          <img src={pureGrade} alt="" />
          <h3 className="font-bold text-xl">Pure Grades</h3>
          <p>
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>

        {/* Card 4 */}

        <div className=" p-5 space-y-2">
          <img src={properRosting} alt="" />
          <h3 className="font-bold text-xl">Proper Roasting</h3>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </section>
    </div>
  );
};

export default CategoryCard;
