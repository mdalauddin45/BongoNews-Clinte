import {
  ArrowPathRoundedSquareIcon,
  BuildingStorefrontIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";
const WriterMenu = () => {
  return (
    <div>
      <NavLink
        to="/account/writer/profile"
        className={({ isActive }) =>
          `flex items-center px-6 py-4 border rounded-lg   transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <BuildingStorefrontIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">Profile</span>
      </NavLink>
      <NavLink
        to="/account/addnews"
        className={({ isActive }) =>
          `flex items-center px-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <PlusCircleIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">Add News</span>
      </NavLink>
      <NavLink
        to="/account/updateNews"
        className={({ isActive }) =>
          `flex items-center px-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <ArrowPathRoundedSquareIcon className="w-6 h-6 " />

        <span className="mx-4 font-medium">Update News</span>
      </NavLink>
    </div>
  );
};

export default WriterMenu;
