import React from "react";
import { Link, useLocation } from "react-router-dom";
import villacrest from "../assets/logo.png";

function Navbar() {
  const location = useLocation(); // Current route track karne ke liye

  return (
    <nav className="shadow-sm sm:p-4 p-3 items-center bg-[#3c64b1]/6">
      <div className="flex flex:row sm:justify-center  sm:gap-x-20 lg:gap-x-20">
        <div className=" md:w-1/4 ">
          {/* Logo ko clickable banaya aur Link wrap kiya */}
          <figure className="sm:w-[70%] md:w-[80%] xl:mx-20 sm:px-0 w-[100%] mx-auto  sm:my-2 ">
            <div className="">
            <Link to="/home">
            <img src={villacrest} alt="Villa Crest Logo" className="sm:w-full md:w-[70%] xl:w-[55%] sm:mx-auto  w-[60%] cursor-pointer " />
          </Link>

            </div>
          

          </figure>
         
        </div>

        <ul className="hidden sm:flex xl:px-40  sm:space-x-3  items-center md:space-x-6 lg:space-x-8 sm:text-sm">
          <li>
            <Link
              to="/home"
              className={`font-mulish text-semibold lg:text-[14px] md:text-[13px] sm:text-[11px] tracking-[0.2px] ${
                location.pathname === "/home" ? "text-blue-500 font-bold" : "text-[#373f41] hover:text-blue-500"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`font-mulish text-semibold lg:text-[14px] md:text-[13px] sm:text-[11px] tracking-[0.2px] ${
                location.pathname === "/about" ? "text-blue-500 font-bold" : "text-[#373f41] hover:text-blue-500"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/villas"
              className={`font-mulish text-semibold lg:text-[14px] md:text-[13px] sm:text-[11px] tracking-[0.2px] ${
                location.pathname === "/villas" ? "text-blue-500 font-bold" : "text-[#373f41] hover:text-blue-500"
              }`}
            >
              Villas
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`font-mulish text-semibold lg:text-[14px] md:text-[13px] sm:text-[11px] tracking-[0.2px] ${
                location.pathname === "/services" ? "text-blue-500 font-bold" : "text-[#373f41] hover:text-blue-500"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/partners"
              className={`font-mulish text-semibold lg:text-[14px] md:text-[13px] sm:text-[11px] tracking-[0.2px] ${
                location.pathname === "/partners" ? "text-blue-500 font-bold" : "text-[#373f41] hover:text-blue-500"
              }`}
            >
              Partner with us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`bg-[#6d87cb] font-mulish text-bold lg:text-[14px] md:text-[13px] sm:text-[11px] tracking-[0.2px] text-white md:px-5 md:py-2 sm:px-3 sm:py-1 hover:bg-blue-700`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
