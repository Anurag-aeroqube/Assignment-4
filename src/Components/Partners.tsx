import React, { useState } from 'react';
import gallery1 from '../assets/gallery-1.png';

const Partners = () => {
  const [activeTab, setActiveTab] = useState('PROPERTY LAYOUT');

  return (
    <div className='w-full'>
      <div className='w-[80%] mt-15 mx-auto'>
        <section className='grid grid-cols-3 w-full mx-auto gap-6'>
          <div className='col-span-2 '>
            <img src={gallery1} className='w-full' alt='Gallery' />
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
              <div>
                <div className='flex flex-row justify-between'>
                  <p className='font-Nunito-Sans font-bold lg:text-[1.6rem] text-[0.7rem]'>Hilltruck Valley</p>
                  <p className='text-[#ffa800] font-bold text-[1.6rem]'>₹375,000</p>
                </div>
                <p className='text-[#aeaeae] font-Nunito-Sans text-[1.3rem] text-left py-3'>1187 Lake Forest City, Uttrakhand</p>
              </div>
              <div className='flex flex-row justify-between w-[60%]'>
                <p className='text-[#626262] font-Nunito-Sans font-semibold  text-[1.3rem]'>2 Baths</p>
                <p className='text-[#626262] font-Nunito-Sans font-semibold text-[1.3rem]'>4 Beds</p>
                <p className='text-[#626262] font-Nunito-Sans font-semibold text-[1.3rem]'>2980 sqft</p>
              </div>
            </div>

            <section className='mt-7'>
              <nav className='bg-[#f4f4f4] flex flex-row justify-between w-full md:p-3'>
                {['PROPERTY LAYOUT', 'DESCRIPTION', 'AMENITIES'].map((tab) => (
                  <a
                    key={tab}
                    className={`cursor-pointer px-4 py-2 font-mulish font-bold text-[#181725] ${activeTab === tab ? '   border-b-2  border-blue-500' : '  font-mulish font-semibold text-[#8a8a8a] '}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </a>
                ))}
              </nav>

              {activeTab && (
                <div className='p-4  mt-2 pl-3 rounded-md'>
                  <p className='font-mulish text-[1.1rem] text-[#737b7d] mb-4'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className='font-mulish text-[1.1rem] text-[#737b7d] mb-4'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className='font-mulish text-[1.1rem] text-[#737b7d] mb-4'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className='font-mulish text-[1.1rem] text-[#737b7d] mb-4'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className='font-mulish text-[1.1rem] text-[#737b7d] mb-4'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className='font-mulish text-[1.1rem] text-[#737b7d] mb-4'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className='font-mulish text-[1.1rem] text-[#737b7d] mb-4'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className='font-mulish text-[1.1rem] text-[#737b7d] mb-4'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  
                </div>
              )}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partners;
