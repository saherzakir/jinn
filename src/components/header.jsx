import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import logo from "../assets/jinn-logo.png";

const Header = () => {
  return (
    <nav className="container mx-auto px-6 md:px-8 flex justify-between items-center  py-4 ">
      {/* Logo & image*/}
    <div className="flex items-center gap-2">
       <img 
        src={logo} 
        alt="Jinn Store Logo" 
        className="w-10 h-10 object-contain" 
        />
       <span className="font-bold text-xl font-lato text-gray-900">JINN STORE</span>

    </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-bold font-lato">
        <li className="cursor-pointer hover:text-pink-600">New Arrival</li>
        <li className="cursor-pointer hover:text-pink-600">Men's Collection</li>
        <li className="cursor-pointer hover:text-pink-600">Women's Collection</li>
        <li className="cursor-pointer hover:text-pink-600">HAC Food's</li>
      </ul>

      {/* Icons */}
       <div className="flex items-center gap-4 text-gray-700">
        <IoIosHeartEmpty  className="w-5 h-5 cursor-pointer hover:text-pink-600" />
        <BsHandbag className="w-5 h-5 cursor-pointer hover:text-pink-600" />
        
      </div>
    </nav>
  );
};

export default Header;

