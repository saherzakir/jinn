import React from "react";
import sneakers from "../assets/sneakers.png";

const Hero= () => {
 return (
         <section className="container mx-auto px-8 md:px-10 flex flex-col md:flex-row items-center md:items-center  pb-2 bg-white">
      
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          New Arrivals <br /> Just Dropped
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Fresh Styles, Premium Comfort – Grab Them <br /> Before They’re Gone.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700">
            Shop Now
          </button>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">
            View All
          </button>
        </div>
      </div>

     <div className=" flex h-full">
        <img
          src={sneakers}
          alt="Hero Sneakers"
          className="w-full max-w-[900px] h-full md:w-[420px] lg:w-[400px] rounded-xl object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;