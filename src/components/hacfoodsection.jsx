import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import urbandrift from "../assets/desighee.png";
import urbandrift1 from "../assets/desighee.png";  

const products = [
  { id: 1, title: "Desi Ghee", price: "Rs 5,499", oldPrice: "Rs 6,999", discount: "-20%", image: urbandrift },
  { id: 2, title: "Honey", price: "Rs 3,499", oldPrice: "Rs 4,999", discount: "-20%", image: urbandrift1 },
  { id: 3, title: "Desi Ghee", price: "Rs 5,499", oldPrice: "Rs 6,999", discount: "-20%", image: urbandrift },

];

const HacSection = () => {
  return (
    <section className="py-8 bg-white flex flex-col items-center">
      <div className="container mx-auto px-3 sm:px-4 text-center">
        {/* Title */}
        <h2 className="text-lg sm:text-2xl font-bold text-center mb-4">
          Dairy&apos;s Items
        </h2>

        {/* Product Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
            {products.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white relative"
              >
                {/* Discount */}
                <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </span>

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-3"
                />

                {/* Title + Price */}
                <h3 className="font-semibold text-gray-800 text-sm truncate">
                  {item.title}
                </h3>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <p className="text-pink-600 font-bold text-sm">{item.price}</p>
                  <p className="line-through text-gray-400 text-xs">{item.oldPrice}</p>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between mt-4">
                  <button className="flex items-center justify-center gap-2 flex-1 border bg-[#444444] text-white py-2 rounded-md text-xs hover:bg-pink-600 transition">
                    <FaShoppingCart /> Add To Cart
                  </button>
                  <button className="ml-2 text-gray-500 hover:text-pink-600 text-sm">
                    <FaHeart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default HacSection;
