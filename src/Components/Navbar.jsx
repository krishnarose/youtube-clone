import React from 'react';
import { FiMenu, FiSearch, FiMic, FiVideo, FiBell } from 'react-icons/fi';
import img from "../assets/youtube.webp";
import Avtar from "../assets/avtar.jpg";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <FiMenu className="w-6 h-6 text-gray-700 cursor-pointer md:hidden" onClick={toggleSidebar} />
          <a href="/" className="text-xl font-semibold">
            <img src={img} alt="YouTube Logo" className="h-8" />
          </a>
        </div>

        <div className="flex-1 mx-4 hidden md:flex">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 pr-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <button className="absolute right-0 top-0 bottom-0 bg-gray-100 hover:bg-gray-200 rounded-r-full px-4">
              <FiSearch className="text-gray-700 w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FiMic className="w-6 h-6 text-gray-700 hidden md:block" />
          <FiVideo className="w-6 h-6 text-gray-700" />
          <FiBell className="w-6 h-6 text-gray-700 relative">
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">9+</span>
          </FiBell>
          <img
            src={Avtar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
      <div className="flex md:hidden px-4 py-2">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 pr-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <button className="absolute right-0 top-0 bottom-0 bg-gray-100 hover:bg-gray-200 rounded-r-full px-4">
            <FiSearch className="text-gray-700 w-5 h-5" />
          </button>
        </div>
        <FiMic className="w-6 h-6 text-gray-700 ml-2" />
      </div>
    </nav>
  );
};

export default Navbar;
