import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger Icons
import villacrest from "../assets/logo.png";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Hamburger Menu Toggle State

  return (
    <nav className="shadow-sm sm:p-4 p-3 items-center bg-[#3c64b1]/6">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="md:w-1/4">
          <figure className="sm:w-[70%] md:w-[80%] xl:mx-20 sm:px-0 w-[100%] mx-auto sm:my-2">
            <Link to="/home">
              <img
                src={villacrest}
                alt="Villa Crest Logo"
                className="sm:w-full md:w-[70%] xl:w-[55%] sm:mx-auto w-[60%] cursor-pointer"
              />
            </Link>
          </figure>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex xl:px-40 sm:space-x-3 items-center md:space-x-6 lg:space-x-8 sm:text-sm">
          {[
            { name: "Home", path: "/home" },
            { name: "About Us", path: "/about" },
            { name: "Villas", path: "/villas" },
            { name: "Services", path: "/services" },
            { name: "Partner with us", path: "/partners" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-mulish text-semibold lg:text-[14px] md:text-[13px] sm:text-[11px] tracking-[0.2px] ${
                  location.pathname === item.path
                    ? "text-blue-500 font-bold"
                    : "text-[#373f41] hover:text-blue-500"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="bg-[#6d87cb] font-mulish text-bold lg:text-[14px] md:text-[13px] sm:text-[11px] tracking-[0.2px] text-white md:px-5 md:py-2 sm:px-3 sm:py-1 hover:bg-blue-700"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Only visible when isOpen is true) */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-5">
          <ul className="flex flex-col items-center space-y-4">
            {[
              { name: "Home", path: "/home" },
              { name: "About Us", path: "/about" },
              { name: "Villas", path: "/villas" },
              { name: "Services", path: "/services" },
              { name: "Partner with us", path: "/partners" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={`font-mulish text-lg ${
                    location.pathname === item.path
                      ? "text-blue-500 font-bold"
                      : "text-[#373f41] hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#6d87cb] text-white px-5 py-2 rounded-md hover:bg-blue-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
