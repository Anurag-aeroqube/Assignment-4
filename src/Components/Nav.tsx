import React from "react";
import { Link } from "react-router-dom";
import villacrest from '../assets/logo.png'

function Navbar() {
  return (
    <nav className=" shadow-md sm:p-4 p-3 flex justify-between items-center bg-[#3c64b1]/5">
      <div className="sm:px-10 md:px-20 lg:px-30 w-1/3">
      <img src={villacrest} className=" "></img>
      </div>
      
      <ul className="hidden sm:flex sm:space-x-10 sm:text-sm">
        <li><Link to="/home" className="text-gray-700 hover:text-blue-500">Home</Link></li>
        <li><Link to="/about" className="text-gray-700 hover:text-blue-500">About Us</Link></li>
        <li><Link to="/villas" className="text-gray-700 hover:text-blue-500">Villas</Link></li>
        <li><Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link></li>
        <li><Link to="/partners" className="text-gray-700 hover:text-blue-500">Partner with us</Link></li>
        <li><Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
