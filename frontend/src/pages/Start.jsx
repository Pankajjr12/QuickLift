import React from "react";
import { Link } from "react-router-dom";
import mlogo from "../assets/mainlogin.png";
import Quicklift from "../components/Quicklift";

const Start = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-1 flex flex-col justify-center items-center max-h-[70%]">
        <Quicklift />
      </div>
      <div className="bg-white py-5 px-4 sm:px-6 md:px-10 text-center">
        <h2 className="text-lg font-bold">
          Get started with <span className="text-xl text-gray-600">Quicklift</span>
        </h2>
        <Link
          to="/login"
          className="flex items-center justify-center w-full bg-black text-white font-medium py-3 rounded mt-5"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
