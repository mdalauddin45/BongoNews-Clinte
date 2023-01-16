import {
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="text-xl">
      <NavLink
        to="/account/reader/profile"
        className={({ isActive }) =>
          `flex items-center px-6 py-4 border rounded-lg   transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <HomeIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">Profile</span>
      </NavLink>
      <NavLink
        to="/account/wishlist"
        className={({ isActive }) =>
          `flex items-center mt-5   transition-colors duration-300  pl-6 py-4 border rounded-lg transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <HeartIcon className="w-6 h-6 font-bold" />

        <span className="mx-4 font-medium">Wishlist</span>
      </NavLink>

      <NavLink
        to="/account/comments"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform   hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <ChatBubbleOvalLeftIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">Comments</span>
      </NavLink>
    </div>
  );
};

export default UserMenu;
