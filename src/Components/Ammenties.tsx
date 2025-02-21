import React from 'react';
import { Amenity } from '../Villastypes/Type1';
import logo from '../assets/Group (1).svg';
interface AmenityProps {
  amenities: Amenity[];
}

const Amenities: React.FC<AmenityProps> = ({ amenities }) => {
  return (
    <>
<section className='w-full grid md:grid-cols-3 grid-cols-2  mx-auto gap-x-10 gap-y-10  mt-15'>
  {
    amenities.map((item,index)=>(
      <header className='bg-[#6d87cb] rounded-sm xl:py-16  py-12'>
        <div className='  flex flex-col sm:justify-center justify-between items-center sm:w-full w-[50%]  gap-4 mx-auto '>
          <figure className='sm:w-[80px] sm:h-[80px]'>
          <img src={item.logo} alt="" className='w-fit mx-auto my-auto ' />

          </figure>
  
  
  <p className='text-[#ffffff] font-mulish text-[14px] text-center font-extrabold'>{item.title}</p>
</div>

      </header>
      
    ))
  }
    </section>
    </>
  );
};

export default Amenities;

