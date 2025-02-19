import React from "react";
import gallery1 from "../assets/gallery-1.png"
import gallery2 from "../assets/gallery-2.png"
import gallery3 from "../assets/gallery-3.png"

import loc from '../assets/location-pin.svg'
import bathtub from '../assets/bathtub.svg'
import room from '../assets/double-bed.svg'
import house from '../assets/measured.svg'
import { useNavigate } from "react-router-dom";
// import VillaDetails from "./VillasDetails";
 
const villas = [
  { id: 2, image: gallery3, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 3, image: gallery2, title: "Symphony Dyer", price: "₹569,000", address: "2120 Marshville Road, Uttrakhand", bath: "8 Bath", beds: "12 Beds", size: "6250 sqft" },
  { id: 1, image: gallery1, title: "Horizon Stylish", price: "₹230,000", address: "00 W 22nd Globe Road, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 2, image: gallery3, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 3, image: gallery2, title: "Symphony Dyer", price: "₹569,000", address: "2120 Marshville Road, Uttrakhand", bath: "8 Bath", beds: "12 Beds", size: "6250 sqft" },
  { id: 1, image: gallery1, title: "Horizon Stylish", price: "₹230,000", address: "00 W 22nd Globe Road, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 2, image: gallery3, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 3, image: gallery2, title: "Symphony Dyer", price: "₹569,000", address: "2120 Marshville Road, Uttrakhand", bath: "8 Bath", beds: "12 Beds", size: "6250 sqft" },
  { id: 1, image: gallery1, title: "Horizon Stylish", price: "₹230,000", address: "00 W 22nd Globe Road, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
];

 
 
export default function Villas() {
 
  const navigate = useNavigate();
 
  const handleClick = () => {
    navigate(`/villasdetails/${id}`);
  };
  return (
    <section className='w-full my-[4rem] '>
      <article className='w-[83%] mx-auto md:pb-15'>
        <article className="mb-[3.4rem] text-center">
          <h1 className="font-kanit text-[2rem] text-[#373f41] lg:px-[250px] xl:px-[440px]">
            Let's explore the villas of your dreams
          </h1>
        </article>
 
        <div className='grid grid-cols-1 space-y-5 gap-8  sm:grid-cols-2 lg:grid-cols-3 sm:space-y-15 md:space-y-35'>
          {villas.map((villa) => (
            <section key={villa.id} className="relative h-[350px] sm:h-[275px] cursor-pointer" onClick={() => handleClick(villa.id)}>
              {/* Image */}
              <figure className="shadow-md">
                <img src={villa.image} alt={villa.title} className=" w-full object-cover rounded-md" />
              </figure>
 
              {/* Villa Details Box */}
              <div className="absolute bottom-[2%] sm:bottom-[-10%] md:bottom-[-32%] lg:bottom-[-2%] xl:bottom-[-32%] left-1/2 -translate-x-1/2 bg-white p-4 shadow-md rounded-sm w-[90%]">
                <div className="flex flex-col space-y-1">
                  <header className="flex justify-between font-bold">
                    <h1 className="font-Nunito-Sans font-bold text-4 text-[#3e3e3e] leading-[27.2px]">{villa.title}</h1>
                    <h1 className="font-Nunito-Sans font-bold text-4 text-[#ffa800] leading-[27.2px]">{villa.price}</h1>
                  </header>

                  <figure className="flex flex-row space-x-2 mb-3">            
                  <img src={loc} className=" lg:w-[5%] xl:w-[3%]" />
                  <p className="text-left font-Nunito-Sans text-[#aeaeae] text-[14px] lg:text-[12px] xl:text-[14px]">{villa.address}</p>
                  </figure>
 
                  
                  <div className="flex justify-between text-sm">
                  <figure className="flex flex-row space-x-2 mb-3">            
                  <img src={bathtub} className=" w-[20%]" />
                  <p className="text-left font-Nunito-Sans font-semibold  text-[#626262] text-[14px]">{villa.bath}</p>
                  </figure>
                  <figure className="flex flex-row space-x-2 mb-3">            
                  <img src={room} className=" w-[20%]" />
                  <p className="text-left font-Nunito-Sans font-semibold  text-[#626262] text-[14px]">{villa.beds}</p>
                  </figure>
                  <figure className="flex flex-row space-x-2 mb-3">            
                  <img src={house} className=" w-[20%]" />
                  <p className="text-left font-Nunito-Sans font-semibold  text-[#626262] text-[14px]">{villa.size}</p>
                  </figure>
 
                    
                   
                    
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}