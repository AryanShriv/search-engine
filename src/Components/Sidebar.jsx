import React from "react";
import { FiLogOut } from "react-icons/fi"; // Importing the FiLogOut icon

const Sidebar = () => {
  const handleSignOut = () => {
    // Implement your sign out logic here
    console.log("Signing out...");
  };

  return (
    <div className="fixed left-0 top-0 h-full bg-transparent w-55 py-4 px-6 transition-all duration-300 z-50 shadow-lg flex flex-col justify-between hidden md:flex">
      {" "}
      {/* Added hidden class for mobile view */}
      <div>
        <div className="text-white text-2xl font-semibold mb-8">
          Previous Searches
        </div>
        <ul>
          <li className="mb-4">
            <a href="#" className="text-white hover:text-gray-200">
              Search Query 1
            </a>
          </li>
          <hr className="border-gray-700 my-2" />
          <li className="mb-4">
            <a href="#" className="text-white hover:text-gray-200">
              Search Query 2
            </a>
          </li>
          <hr className="border-gray-700 my-2" />
          <li className="mb-4">
            <a href="#" className="text-white hover:text-gray-200">
              Search Query 3
            </a>
          </li>
          <hr className="border-gray-700 my-2" />
        </ul>
      </div>
      <button
        onClick={handleSignOut}
        className="text-white hover:text-gray-200 block w-full py-2 mt-4 bg-red-500 rounded-md flex items-center justify-center"
      >
        <FiLogOut className="mr-2" /> Sign Out
      </button>
    </div>
  );
};

export default Sidebar;
