import React from "react";
import cook from '../assets/cook.png'
import laundary from '../assets/laundry.png'
import Cleaning from '../assets/cleaning.png'
import Maintenance from '../assets/maintenance.png'

function Services() {
  return (
    <div className=" p-4 sm:p-6">

      <h2 className=" w-full  sm:w-200 sm:h-60 mx-auto mt-5 sm:mt-20 mb-10 font-kanit text-lg sm:text-4xl font-medium leading-[1.5] tracking-[0.1px] text-center text-[#373f41]">
        “Our Team have Awesome handpicked <br /> Services
        for your next big group <br /> celebration, a romantic getaway <br />
        or peaceful sneak away”
      </h2>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 sm:p-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl sm:opacity-60 font-semibold mb-8">On Call Cook</h3>
          <p className="text-gray-600 text-lg sm:text-xl opacity-70">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="md:w-1/2 px-15 md::p-15 md:px-30 py-4">
          <img src={cook} alt="On Call Cook" className="w-full" />
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 px-5 sm:p-15 sm:px-30">
          <img src={Cleaning} alt="On Call Cook" className="w-full" />
        </div>
        <div className="md:w-1/2 sm:p-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl sm:opacity-60 font-semibold mb-8">Laundry Services</h3>
          <p className="text-gray-600 text-lg sm:text-xl opacity-70">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>

      </div>


      <div className="flex flex-col md:flex-row items-center mb-8 py-5">
        <div className="md:w-1/2 sm:p-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl sm:opacity-60 font-semibold mb-8">Facility Cleaning Services</h3>
          <p className="text-gray-600 text-lg sm:text-xl  opacity-70">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="md:w-1/2 py-5 px-15 sm:p-15 sm:px-30">
          <img src={laundary} alt="On Call Cook" className="w-full" />
        </div>
      </div>



      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 px-5 sm:p-15 sm:px-30">
          <img src={Maintenance} alt="On Call Cook" className="w-full" />
        </div>
        <div className="md:w-1/2 sm:p-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl sm:opacity-60 font-semibold mb-8">Maintenance & Repairs</h3>
          <p className="text-gray-600 text-lg sm:text-xl opacity-70">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>

      </div>



    </div>
  );
}

export default Services;