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


      <section className='lg:py-14 sm:py-10' >
        <article className='w-full'>
          <div className='lg:w-[70%] w-[80%] mx-auto flex lg:flex-row flex-col  md:justify-between'>
            <header className='lg:w-[50%] py-20 space-y-8'>
              <p className='text-[#373f41] font-kanit text-[32px] leading-[40px] lg:text-left text-center tracking-[0.1px]'>On Call Cook</p>
              <p className='font-mulish text-[20px] text-[#737b7d] leading-[32px] tracking[0.3px] '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </header>
            <figure className='lg:w-[50%] '>
              <img src={cook} className=' w-[70%] mx-auto lg:ml-30'></img>
            </figure>

          </div>
        </article>

      </section>


      {/* 
      laundary services */}


<section className='lg:py-14 sm:py-10' >
        <article className='w-full'>
       
          <div className='lg:w-[70%] w-[80%] mx-auto flex lg:flex-row flex-col-reverse  md:justify-between'>
          <figure className='lg:w-[50%] '>
              <img src={laundary} className='w-[70%] mx-auto '></img>
            </figure>

            <header className='lg:w-[50%] py-20 space-y-8'>
              <p className='text-[#373f41] font-kanit text-[32px] leading-[40px] lg:text-left text-center tracking-[0.1px]'>Laundary Services</p>
              <p className='font-mulish text-[20px] text-[#737b7d] leading-[32px] tracking[0.3px] '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </header>
            

          </div>
        </article>

      </section>


      {/* facility cleaning services */}

      <section className='lg:py-14 sm:py-10' >
        <article className='w-full'>
          <div className='lg:w-[70%] w-[80%] mx-auto flex lg:flex-row flex-col  md:justify-between'>
            <header className='lg:w-[50%] py-20 space-y-8'>
              <p className='text-[#373f41] font-kanit text-[32px] leading-[40px] lg:text-left text-center tracking-[0.1px]'>Facility Cleaning Services</p>
              <p className='font-mulish text-[20px] text-[#737b7d] leading-[32px] tracking[0.3px] '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </header>
            <figure className='lg:w-[50%] '>
              <img src={Cleaning} className='lg:w-[70%] w-[70%] mx-auto lg:ml-30'></img>
            </figure>

          </div>
        </article>

      </section>


      {/* maintance and repairs */}

      <section className='lg:py-14 py-10 mb-20 ' >
        <article className='w-full'>
       
          <div className='lg:w-[70%] w-[80%] mx-auto flex lg:flex-row flex-col-reverse gap-x-5 lg:justify-between'>
          <figure className='lg:w-[48%] mx-auto sm:pt-0 pt-10 '>
              <img src={Maintenance} className='w-[90%]  my-auto '></img>
            </figure>

            <header className='lg:w-[52%]   space-y-8'>
              <p className='text-[#373f41] font-kanit text-[32px] leading-[40px] lg:text-left text-center tracking-[0.1px]'>Maintenance & Repairs</p>
              <p className='font-mulish text-[20px] text-[#737b7d] leading-[32px] tracking[0.3px] '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </header>
            

          </div>
        </article>

      </section>


     



    </div>
  );
}

export default Services;