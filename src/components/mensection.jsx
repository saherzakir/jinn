import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
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
     { id: 7, title: "Urban Drift Sneaker", price: "Rs 5,499", oldPrice: "Rs 6,999", discount: "-20%", sizes: [38, 40, 42, 45], image: urbandrift },
      { id: 8, title: "Urban Drift Sneaker", price: "Rs 3,499", oldPrice: "Rs 4,999", discount: "-20%", sizes: [38, 40, 42, 45], image: urbandrift1 },
      { id: 9, title: "Urban Drift Sneaker", price: "Rs 5,499", oldPrice: "Rs 6,999", discount: "-20%", sizes: [38, 40, 42, 45], image: urbandrift2},
      { id: 10, title: "Urban Drift Sneaker", price: "Rs 4,499", oldPrice: "Rs 5,999", discount: "-20%", sizes: [38, 40, 42, 45], image: urbandrift3 },
      { id: 11, title: "Regal Leather Starlet", price: "Rs 5,499", oldPrice: "Rs 6,999", discount: "-20%", sizes: [38, 40, 42, 45], image: regalleather },
      { id: 12, title: "White Starlet", price: "Rs 8,499", oldPrice: "Rs 10,999", discount: "-20%", sizes: [38, 40, 42, 45], image: whiteshoes },
     { id: 13, title: "Urban Drift Sneaker", price: "Rs 4,499", oldPrice: "Rs 5,999", discount: "-20%", sizes: [38, 40, 42, 45], image: urbandrift3 },
      { id: 14, title: "Regal Leather Starlet", price: "Rs 5,499", oldPrice: "Rs 6,999", discount: "-20%", sizes: [38, 40, 42, 45], image: regalleather },
      { id: 15, title: "White Starlet", price: "Rs 8,499", oldPrice: "Rs 10,999", discount: "-20%", sizes: [38, 40, 42, 45], image: whiteshoes },
     
];

const WomensSection = () => {
    const [selectedSizes, setSelectedSizes] = useState({});
    const [filterSize, setFilterSize] = useState(""); // state for dropdown filter

    const handleSizeClick = (productId, size) => {
        setSelectedSizes({ ...selectedSizes, [productId]: size });
    };

    const filteredProducts = filterSize
        ? products.filter((item) => item.sizes.includes(Number(filterSize)))
        : products;

    return (
        <section className="pt-1 sm:pt-8 pb-4 bg-white">
            <div className="container mx-auto px-3 sm:px-4">
                {/* Women’s Collection Title */}
                <h2 className="text-lg sm:text-2xl font-bold text-center mb-0.5 sm:mb-2">
                    Men&apos;s Collection
                </h2>

                {/* Filter dropdown (aligned left, under the heading) */}
                <div className="flex justify-start mb-6">
                    <select
                        value={filterSize}
                        onChange={(e) => setFilterSize(e.target.value)}
                        className=" px-3 py-2 text-sm sm:text-base  w-40"
                    >
                        <option value="">Filter</option>
                        <option value="38">Size 38</option>
                        <option value="40">Size 40</option>
                        <option value="42">Size 42</option>
                        <option value="45">Size 45</option>
                    </select>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
                    {filteredProducts.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-lg p-2 sm:p-4 shadow hover:shadow-lg transition bg-white relative"
                        >
                            {/* Discount */}
                            <span className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-pink-600 text-white text-[9px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                                {item.discount}
                            </span>

                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-28 xs:h-32 sm:h-40 object-contain mb-1 sm:mb-3"
                            />

                            {/* Title + Price */}
                            <h3 className="font-semibold text-gray-800 text-[11px] sm:text-sm truncate">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-1 sm:gap-2 mt-1">
                                <p className="text-pink-600 font-bold text-[11px] sm:text-sm">
                                    {item.price}
                                </p>
                                <p className="line-through text-gray-400 text-[9px] sm:text-xs">
                                    {item.oldPrice}
                                </p>
                            </div>

                            {/* Sizes */}
                            <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 text-gray-600 text-[9px] sm:text-xs">
                                {item.sizes.map((size) => {
                                    const isSelected = selectedSizes[item.id] === size;
                                    return (
                                        <span
                                            key={size}
                                            onClick={() => handleSizeClick(item.id, size)}
                                            className={`border px-1 sm:px-2 py-0.5 rounded-md cursor-pointer transition
                        ${isSelected
                                                    ? "bg-pink-600 text-white border-pink-600"
                                                    : "hover:bg-pink-100 hover:border-pink-400"
                                                }`}
                                        >
                                            {size}
                                        </span>
                                    );
                                })}
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-between mt-2 sm:mt-4">
                                <button className="flex items-center justify-center gap-1 sm:gap-2 flex-1 border bg-[#444444] text-white py-1 sm:py-2 rounded-md text-[10px] sm:text-xs hover:bg-pink-600 transition">
                                    <FaShoppingCart /> Add To Cart
                                </button>
                                <button className="ml-1 sm:ml-2 text-gray-500 hover:text-pink-600 text-xs sm:text-sm">
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recently Viewed */}
                <h2 className="text-lg sm:text-2xl font-bold mt-10 mb-4 sm:mb-6">
                    Recently Viewed Products
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
                    {products.slice(0, 3).map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-lg p-2 sm:p-4 shadow hover:shadow-lg transition bg-white relative"
                        >
                            <span className="absolute top-1 left-1 bg-pink-600 text-white text-[9px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                                {item.discount}
                            </span>

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-28 sm:h-36 object-contain mb-2 sm:mb-3"
                            />

                            <h3 className="font-semibold text-gray-800 text-[11px] sm:text-sm truncate">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-1 sm:gap-2 mt-1">
                                <p className="text-pink-600 font-bold text-[11px] sm:text-sm">
                                    {item.price}
                                </p>
                                <p className="line-through text-gray-400 text-[9px] sm:text-xs">
                                    {item.oldPrice}
                                </p>
                            </div>

                            {/* Sizes */}
                            <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 text-gray-600 text-[9px] sm:text-xs">
                                {item.sizes.map((size) => {
                                    const isSelected = selectedSizes[item.id] === size;
                                    return (
                                        <span
                                            key={size}
                                            onClick={() => handleSizeClick(item.id, size)}
                                            className={`border px-1 sm:px-2 py-0.5 rounded-md cursor-pointer transition
                        ${isSelected
                                                    ? "bg-pink-600 text-white border-pink-600"
                                                    : "hover:bg-pink-100 hover:border-pink-400"
                                                }`}
                                        >
                                            {size}
                                        </span>
                                    );
                                })}
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-between mt-2 sm:mt-4">
                                <button className="flex items-center justify-center gap-1 sm:gap-2 flex-1 border bg-[#444444] text-white py-1 sm:py-2 rounded-md text-[10px] sm:text-xs hover:bg-pink-600 transition">
                                    <FaShoppingCart /> Add To Cart
                                </button>
                                <button className="ml-1 sm:ml-2 text-gray-500 hover:text-pink-600 text-xs sm:text-sm">
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WomensSection;
