import { useState } from 'react';
import villas from '../VillasData/Data';
import { useParams } from 'react-router-dom';

import VCrousel from '../Components/VCrousel'

import loc from '../assets/location-pin.svg'
import bathtub from '../assets/bathtub.svg'
import room from '../assets/double-bed.svg'
import house from '../assets/measured.svg'
import DescriptionSection from '../Components/Description'
import AboutSection from '../Components/PropertyLayout'
import Amenities from '../Components/Ammenties'
import SideImages from '../Components/Villasimages';


const DetailedVila = () => {
  const { id } = useParams();
  const villa = villas.find((v) => v.id === Number(id));
  const [activeSection, setActiveSection] = useState('description');

  if (!villa) {
    return <h1>Villa Not Found</h1>;
  }

  return (
    <>
      <section className='w-full  mb-[8rem] mt-[5rem]'>
        <article className='lg:w-[80%]  flex lg:flex-row flex-col mx-auto gap-x-5 w-[96%] '>
          <aside className='w-[70%]  mx-auto'>
            <section className='mx-auto'>
              <VCrousel />
            </section>


            <section className='w-full mx-auto '>
              <article className="flex flex-col gap-5 shadow-[rgba(0,0,0,0.07)] shadow-lg sm:p-7 p-4 mt-10">
                <header className="flex justify-between  font-bold">
                  <h1 className="font-Nunito-Sans font-bold md:text-[28px] sm:text-[24px] text-[20px] text-[#3e3e3e] md:leading-[47.6px]">
                    {villa.title}
                  </h1>
                  <h1 className="font-Nunito-Sans font-bold d:text-[28px] sm:text-[24px] text-[20px] text-[#ffa800] md:leading-[47.6px]">
                    {villa.price}
                  </h1>
                </header>
                <figure className='flex flex-row  gap-x-2'>
                  <img src={loc} className="sm:w-[2.5%] w-[4%]" />
                  <p className="text-left font-Nunito-Sans text-[#aeaeae] sm:text-[22px] text-[16px]">{villa.address}</p>
                </figure>
                <footer className="flex  xl:w-[60%] justify-between lg:w-[90%] sm:w-[60%] w-[100%]  text-sm">

                  <figure className='flex flex-row xl:gap-x-2'>
                    <img src={bathtub} className="" /> 
                    <p className="text-left font-semibold font-Nunito-Sans text-[#626262]  text-[16px] sm:text-[22px]">{villa.bath}
                    </p>
                  </figure>

                  <figure className='flex flex-row gap-x-2'>
                    <img src={room} className="" />
                    <p className="text-left font-semibold font-Nunito-Sans text-[#626262]  text-[16px] sm:text-[22px]"> {villa.beds}
                    </p>
                  </figure>


                  <figure className='flex flex-row gap-x-2'>
                    <img src={house} className="" /> 
                    <p className="text-left font-semibold font-Nunito-Sans text-[#626262]  text-[16px] sm:text-[22px]">{villa.size}
                    </p>
                  </figure>
                </footer>

              </article>
            </section>


            <section className='h-15 flex justify-around items-center gap-x-1 bg-[#f4f4f4] w-full mt-16'>

              <h1
                className={` py-3 cursor-pointer font-mulish xl:text-[18px] sm:text-[16px] text-[12px]  font-semibold text-[#8a8a8a] ${activeSection === 'layout' ? 'text-[#181725] border-b-3 border-[#6d87cb]' : ''}`}
                onClick={() => setActiveSection('layout')}
              >
                PROPERTY LAYOUT
              </h1>

              <h1
                className={`py-3 cursor-pointer font-mulish xl:text-[18px] sm:text-[16px] text-[12px]   font-semibold text-[#8a8a8a] ${activeSection === 'description' ? 'text-[#181725] border-b-3 border-[#6d87cb]' : ''}`}
                onClick={() => setActiveSection('description')}
              >
                DESCRIPTION
              </h1>

              <h1
                className={`py-3 cursor-pointer font-mulish xl:text-[18px] sm:text-[16px] text-[12px]  font-semibold text-[#8a8a8a] ${activeSection === 'amenities' ? 'text-[#181725] border-b-3 border-[#6d87cb]' : ''}`}
                onClick={() => setActiveSection('amenities')}
              >
                AMENITIES
              </h1>
            </section>
            <section className="w-full">
              {activeSection === "description" && <AboutSection layout={villa.desc.layout} />}
              {activeSection === "layout" && <DescriptionSection desc={villa.desc.desc} />}
              {activeSection === "amenities" && <Amenities amenities={villa.desc.aminities} />}
            </section>


          </aside>
          <aside className="hidden w-[30%] h-[520px]  lg:block overflow-x-hidden overflow-y-scroll">
  <SideImages images={villa.images} />
</aside>


        </article>
      </section>
    </>
  )
}

export default DetailedVila
