import React from "react";
import cook from '../assets/cook.png'
import laundary from '../assets/laundry.png'
import Cleaning from '../assets/cleaning.png'
import Maintenance from '../assets/maintenance.png'

function Services() {
  return (
    <div className=" p-4 sm:p-5">

      <h2 className=" w-full  sm:w-200 sm:h-60 mx-auto mt-5 sm:mt-20 lg:mb-10 font-kanit text-lg lg:text-[44px] md:text-3xl font-medium lg:leading-[60px] md:leading-[40px] sm:text-xl sm:leading-[24px] tracking-[0.1px] text-center text-[#373f41]">
        “Our Team have Awesome handpicked <br /> Services
        for your next big group <br /> celebration, a romantic getaway <br />
        or peaceful sneak away”
      </h2>{/*  call cook hai */}


      <section className='py-10' >
        <div className="flex flex-col md:flex md:flex-row justify-between md:px-20 py-10 items-center md:h-[404px]   ">
          <div className="md:w-1/2  lg:pl-32 md:text-left px-3 ">
            <h3 className="  lg:text-[32px] text-[#373f41] mb-6 text-2xl md:text-left text-center font-kanit ">On Call Cook</h3>
            <p className="text-[#737b7d] font-mulish lg:text-[20px]  ">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className=" md:w-1/2 md:px-12 px-2 mt-3 ">
            <img src={cook} alt="On Call Cook" className=" md:w-fit  w-full mx-auto" />
          </div>
        </div>

      </section>


      {/* 
      laundary services hai */}


      <section className='py-10 ' >
        <div className="flex flex-col md:flex md:flex-row justify-between lg:px-20 lg:py-10 items-center lg:h-[399px] px-3   ">
          <div className=" md:w-1/2 lg:pl-36 md:px-12 ">
            <img src={laundary} alt="On Call Cook" className=" md:w-fit w-full mx-auto" />
          </div>
          <div className="md:w-1/2  lg:pr-20  md:pr-18 lg:pl-3 md:text-left mt-10 ">
            <h3 className="  lg:text-[32px] text-[#373f41] mb-8 font-kanit md:text-left text-center text-2xl">Laundary Services</h3>
            <p className="text-[#737b7d] font-mulish lg:text-[20px] tracking-[0.3px]  ">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

        </div>

      </section>


      {/* facility cleaning services hai */}

      <section className='py-10' >
        <div className="flex flex-col md:flex-row justify-between lg:px-20 py-10 items-center lg:h-[404px] px-3  ">
          <div className="md:w-1/2    md:text-left text-center lg:pl-30 md:pl-20">
            <h3 className="  lg:text-[32px] text-[#373f41] mb-8 font-kanit text-2xl ">Facility Cleaning Services</h3>
            <p className="text-[#737b7d] font-mulish lg:text-[20px]  ">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className=" md:w-1/2 mt-5 sm:px-20 md:px-14">
            <img src={Cleaning} alt="On Call Cook" className=" md:w-fit w-full mx-auto" />
          </div>
        </div>

      </section>


      {/* maintance and repairs  hai*/}

      <section className='py-10 ' >
        <div className="flex flex-col md:flex-row justify-between md:px-20 lg:py-10 items-center lg:h-[316px]   ">
          <div className=" md:w-1/2 md:pl-14 md:pr-12 lg:pl-25 lg:pr-20 ">
            <img src={Maintenance} alt="On Call Cook" className="md:w-fit w-full mx-auto " />
          </div>
          <div className="md:w-1/2  lg:pr-20  md:pl-5 md:text-left lg:pl-5 text-center pt-8 px-2">
            <h3 className="  lg:text-[32px] text-[#373f41] mb-8  text-2xl font-kanit ">Maintenance & Repairs</h3>
            <p className="text-[#737b7d] font-mulish lg:text-[20px]  tracking-[0.1px]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

        </div>

      </section>


     



    </div>
  );
}

export default Services;