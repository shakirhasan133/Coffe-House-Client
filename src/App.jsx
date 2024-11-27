import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CategoryCard from "./Components/CategoryCard";
import Coffees from "./Components/Coffees";
import FollowUs from "./Components/FollowUs";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <CategoryCard></CategoryCard>
      <Coffees></Coffees>
      <FollowUs></FollowUs>
      <Footer></Footer>
    </div>
  );
};

export default App;
