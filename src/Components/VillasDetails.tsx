import { useState } from 'react';
import gallery1 from "../assets/gallery-1.png";
import gallery2 from "../assets/gallery-2.png";
import gallery3 from "../assets/gallery-3.png";
import VCrousel from './VCrousel';
import location from '../assets/location-pin.svg';
import bathtub from '../assets/bathtub.svg';
import room from '../assets/double-bed.svg';
import house from '../assets/measured.svg';
import Description from './Description';
import PropertyLayout from './PropertyLayout';
import Amenities from './Ammenties';

const villas = [
  { id: 1, image: gallery3, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" }
];

const villa = villas[0];

const VillasDetails = () => {
  const [activeSection, setActiveSection] = useState('description');
  return (
    <>
      <section className='w-full mb-[8rem] mt-[5rem]'>
        <div className='w-[80%] mt-15 mx-auto'>
          <section className='grid grid-cols-3 w-full mx-auto gap-6'>
            <div className='col-span-2'>
              <VCrousel />
            </div>
            <div className='col-span-1 grid grid-cols-2 gap-7'>
              {[...Array(8)].map((_, index) => (
                <img key={index} src={gallery1} alt={`Villa ${index + 1}`} className='rounded-md shadow-lg' />
              ))}
            </div>
          </section>

          <section className='grid grid-cols-3'>
            <div className='col-span-2'>
              <div className='bg-white shadow-xl border border-gray-200 p-4 mt-4 rounded-md text-center'>
                <div className='flex flex-row justify-between'>
                  <p className='font-Nunito-Sans font-bold lg:text-[1.6rem] text-[0.7rem]'>{villa.title}</p>
                  <p className='text-[#ffa800] font-bold text-[1.6rem]'>{villa.price}</p>
                </div>
                <p className='text-[#aeaeae] font-Nunito-Sans text-[1.3rem] text-left py-3'><img src={location} className="inline" />{villa.address}</p>
                <div className='flex flex-row space-x-14  mx-auto'>
                  <p className='text-[#626262] font-Nunito-Sans font-semibold text-[1.3rem]'><img src={bathtub} className="inline" /> {villa.bath}</p>
                  <p className='text-[#626262] font-Nunito-Sans font-semibold text-[1.3rem]'><img src={room} className="inline" /> {villa.beds}</p>
                  <p className='text-[#626262] font-Nunito-Sans font-semibold text-[1.3rem]'><img src={house} className="inline" /> {villa.size}</p>
                </div>
              </div>
            </div>
          </section>

          <section className='h-15 flex justify-around items-center bg-[#f4f4f4] w-2/3 mt-10'>
            <h1
              className={`cursor-pointer px-4 py-2 font-mulish font-bold text-[#181725] ${activeSection === 'description' ? 'border-b-2 border-blue-500' : 'text-[#8a8a8a] font-mulish font-semibold'}`}
              onClick={() => setActiveSection('description')}
            >
              DESCRIPTION
            </h1>
            <h1
              className={`cursor-pointer px-4 py-2 font-mulish font-bold text-[#181725] ${activeSection === 'layout' ? 'border-b-2 border-blue-500' : 'text-[#8a8a8a] font-mulish font-semibold'}`}
              onClick={() => setActiveSection('layout')}
            >
              PROPERTY LAYOUT
            </h1>
            <h1
              className={`cursor-pointer px-4 py-2 font-mulish font-bold text-[#181725] ${activeSection === 'amenities' ? 'border-b-2 border-blue-500' : 'text-[#8a8a8a] font-mulish font-semibold'}`}
              onClick={() => setActiveSection('amenities')}
            >
              AMENITIES
            </h1>
          </section>
          <section className='w-2/3'>
            {activeSection === 'layout' && <PropertyLayout />}
            {activeSection === 'description' && <Description />}
            {activeSection === 'amenities' && <Amenities />}
          </section>
        </div>
      </section>
    </>
  );
};

export default VillasDetails;
