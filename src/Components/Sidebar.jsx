import React, { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiPlay,
  FiYoutube,
  FiVideo,
  FiClock,
  FiThumbsUp,
  FiScissors,
  FiUser,
  FiList,
  FiChevronDown,
} from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";

import { MdOutlineSportsEsports } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { MdSportsBaseball } from "react-icons/md";
import { LiaMusicSolid } from "react-icons/lia";
import { IoNewspaperOutline } from "react-icons/io5";

const Sidebar = ({ isVisible, toggleSidebar, }) => {
  const [category, setCategory] = useState()
  return (
    <div
      className={`bg-white h-screen w-64 overflow-y-auto shadow-md fixed ${
        isVisible ? "block" : "hidden"
      } md:block`}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <FiMenu
          className="w-6 h-6 text-gray-700 cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="py-4">
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>setCategory(0)}>
          <FiHome className="w-6 h-6 text-gray-700"  />
          <span className="ml-4 text-gray-700">Home</span>
        </div>{" "}
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>setCategory(20)}>
          <MdOutlineSportsEsports className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Game</span>
        </div>{" "}
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>setCategory(2)}>
          <IoCarSportSharp className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Automobiles</span>
        </div>{" "}
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>setCategory(17)}>
          <MdSportsBaseball className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Sports</span>
        </div>{" "}
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>setCategory(10)}>
          <LiaMusicSolid className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Musics</span>
        </div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>setCategory(25)}>
          <IoNewspaperOutline className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">News</span>
        </div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <FiYoutube className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Subscriptions</span>
        </div>
        <div className="my-4 border-t"></div>
        <div className="px-4 text-gray-700">You</div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <FiUser className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Your channel</span>
        </div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <AiOutlineHistory className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">History</span>
        </div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <FiList className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Playlists</span>
        </div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <RiVideoLine className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Your videos</span>
        </div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <FiClock className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Watch Later</span>
        </div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <FiThumbsUp className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Liked videos</span>
        </div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <FiScissors className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Your clips</span>
        </div>
        <div className="my-4 border-t"></div>
        <div className="px-4 text-gray-700">Subscriptions</div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <img
            src="channel-logo.png"
            alt="Channel Logo"
            className="w-6 h-6 rounded-full"
          />
          <span className="ml-4 text-gray-700">Channel Name</span>
        </div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <FiChevronDown className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Show more</span>
        </div>
        <div className="my-4 border-t"></div>
        <div className="px-4 text-gray-700">Explore</div>
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <MdOutlineExplore className="w-6 h-6 text-gray-700" />
          <span className="ml-4 text-gray-700">Trending</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
