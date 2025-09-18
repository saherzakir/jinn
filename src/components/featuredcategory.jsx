import React from "react";
import blueShoe from "../assets/blue-shoes.png";
import pinkShoe from "../assets/pink-shoes.png";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const categories = [
  {
    title: "Men's Collection",
    image: blueShoe,
  },
  {
    title: "Women's Collection",
    image: pinkShoe,
  },
];

export default function FeaturedCategories() {
  return (
    <div className="pt-2 py-10">
      {/* Section Title */}
      <h2 className="text-3xl  md:text-4xl font-roboto font-bold text-center mb-15">
        Featured Categories
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative rounded-2xl shadow-md overflow-hidden bg-white"
            style={{ height: "340px" }}
          >
            {/* Shoe Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="absolute inset-0 w-full h-full  font-roboto font-semibold object-contain scale-125 drop-shadow-2xl"
            />

            {/* Title Top Center */}
            <div className="absolute top-6 inset-x-0 text-center z-10">
              <h3 className="text-2xl font-bold text-gray-900 drop-shadow-md">
                {cat.title}
              </h3>
            </div>

            {/* Button Bottom Left */}
           <div className="absolute bottom-6 left-6 z-10">
            <a
                href="#"
              className="flex items-center gap-2 text-base font-lato font-medium text-gray-800 hover:text-black"
           >      
           <BsArrowUpRightSquareFill  className="text-black" /> {/* ↗ Arrow */}
           <span>See Collection</span>
          </a>
        </div>

          </div>
        ))}
      </div>
    </div>
  );
}
