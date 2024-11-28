import React from "react";
import errorImg from "../assets/404/404.gif";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={errorImg} alt="" srcset="" />
      <Link to={"/"}>
        <button className="btn btn-primary">Go to Homepage</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
