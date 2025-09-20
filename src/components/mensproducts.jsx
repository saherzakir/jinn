import React, { useState, useRef } from "react";
import { FaHeart, FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import urbandrift from "../assets/urbandrift.jpg";
import urbandrift1 from "../assets/urbandrift-1.png";  
import urbandrift2 from "../assets/urbandrift-2.jpg";
import urbandrift3 from "../assets/urbandrift-3.jpg";
import regalleather from "../assets/regalleather.jpg";   
import whiteshoes from "../assets/whiteshoes.jpg";       


const products = [
  { id: 1, title: "Urban Drift Sneaker", price: "Rs 5,499", oldPrice: "Rs 6,999", discount: "-20%", sizes: [38, 40, 42, 45], image: urbandrift },
  { id: 2, title: "Urban Drift Sneaker", price: "Rs 3,499", oldPrice: "Rs 4,999", discount: "-20%", sizes: [38, 40, 42, 45], image: urbandrift1 },
  { id: 3, title: "Urban Drift Sneaker", price: "Rs 5,499", oldPrice: "Rs 6,999", discount: "-20%", sizes: [38, 40, 42, 45], image: urbandrift2},
  { id: 4, title: "Urban Drift Sneaker", price: "Rs 4,499", oldPrice: "Rs 5,999", discount: "-20%", sizes: [38, 40, 42, 45], image: urbandrift3 },
  { id: 5, title: "Regal Leather Starlet", price: "Rs 5,499", oldPrice: "Rs 6,999", discount: "-20%", sizes: [38, 40, 42, 45], image: regalleather },
  { id: 6, title: "White Starlet", price: "Rs 8,499", oldPrice: "Rs 10,999", discount: "-20%", sizes: [38, 40, 42, 45], image: whiteshoes },
 
];

const MensProducts = () => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const scrollRef = useRef(null);

  const handleSizeClick = (productId, size) => {
    setSelectedSizes({ ...selectedSizes, [productId]: size });
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-6 sm:py-6 lg:py-10 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-pink-100 z-10"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-pink-100 z-10"
        >
          <FaChevronRight />
        </button>

        {/* Products Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 scroll-smooth pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 sm:w-56 md:w-60 border rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition bg-white relative"
            >
              <span className="absolute top-2 left-2 bg-black text-white text-xs sm:text-sm px-2 py-1 rounded">
                {item.discount}
              </span>

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 sm:h-40 object-contain mb-3 sm:mb-4"
              />

              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{item.title}</h3>
              <div className="flex items-center gap-1 sm:gap-2 mt-1">
                <p className="text-black font-bold text-sm sm:text-base">{item.price}</p>
                <p className="line-through text-gray-400 text-xs sm:text-sm">{item.oldPrice}</p>
              </div>

              <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 text-gray-600 text-xs sm:text-sm">
                {item.sizes.map((size) => {
                  const isSelected = selectedSizes[item.id] === size;
                  return (
                    <span
                      key={size}
                      onClick={() => handleSizeClick(item.id, size)}
                      className={`border px-2 py-1 rounded-md text-center min-w-[24px] cursor-pointer transition
                        ${isSelected
                          ? "bg-black text-white border-black"
                          : "hover:bg-black hover:text-white hover:border-black"}`}
                    >
                      {size}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-center justify-between mt-3 sm:mt-4">
                <button
                  className="flex items-center justify-center gap-2 flex-1 border bg-[#444444] border-gray-300 text-white py-2 rounded-md text-xs sm:text-sm cursor-pointer transition hover:bg-black hover:border-black active:bg-black"
                >
                  <FaShoppingCart />
                  Add To Cart
                </button>
                <button className="ml-2 text-gray-500 hover:text-black">
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>

      {/* View All Button */}
<div className="flex justify-center mt-6">
  <button className="bg-black text-white px-8 py-3 rounded-lg font-lato font-bold hover:bg-black transition flex items-center gap-2">
    View All 
    <span className="bg-black text-white p-1 rounded">
      <FiArrowUpRight   className="text-lg" />
    </span>
  </button>
</div>
      </div>
    </section>
  );
};

export default MensProducts;
