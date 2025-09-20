import React from "react";
import mensBanner from "../assets/menscollection.jpeg"; 

export default function MensCollection() {
  return (
    <section className="flex flex-col items-center justify-center py-8 lg:py-12">
      {/* Title */}
      <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Men’s Collection</h2>

      {/* Banner */}
      <div
        className="
          relative w-full max-w-6xl 
          aspect-[1280/670]   
          rounded-xl lg:rounded-2xl 
          overflow-hidden shadow-lg 
          flex items-start justify-start text-left"
        style={{
          backgroundImage: `url(${mensBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Content */}
        <div className="px-4 pl-10 sm:px-6 md:px-10 lg:px-12 font-lato pt-6 sm:pt-8 md:pt-12 lg:pt-16 max-w-full">
          <h3 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold text-black mb-2 lg:mb-4 whitespace-nowrap">
            Built For Style & Strength
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black mb-3 lg:mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
            From Premium Leather Shoes To Everyday Casuals – Discover The Perfect Pair For Every Step.
          </p>
          <button className="bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg text-xs sm:text-sm md:text-base font-medium hover:bg-gray-800 transition">
            Shop Men’s Collection
          </button>
        </div>
      </div>
    </section>
  );
}
