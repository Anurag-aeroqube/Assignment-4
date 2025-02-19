import {useState} from 'react'
import gallery1 from "../assets/gallery-1.png"
import gallery2 from "../assets/gallery-2.png"
import gallery3 from "../assets/gallery-3.png"
import VCrousel from './VCrousel'
import location from '../assets/location-pin.svg'
import bathtub from '../assets/bathtub.svg'
import room from '../assets/double-bed.svg'
import house from '../assets/measured.svg'
import Description from './Description'
import PropertyLayout from './PropertyLayout'
import Amenities from './Ammenties'



const villas = [
  { id: 1, image: gallery3, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 2, image: gallery2, title: "Symphony Dyer", price: "₹569,000", address: "2120 Marshville Road, Uttrakhand", bath: "8 Bath", beds: "12 Beds", size: "6250 sqft" },
  { id: 3, image: gallery1, title: "Horizon Stylish", price: "₹230,000", address: "00 W 22nd Globe Road, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 4, image: gallery3, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 5, image: gallery2, title: "Symphony Dyer", price: "₹569,000", address: "2120 Marshville Road, Uttrakhand", bath: "8 Bath", beds: "12 Beds", size: "6250 sqft" },
  { id: 6, image: gallery1, title: "Horizon Stylish", price: "₹230,000", address: "00 W 22nd Globe Road, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 7, image: gallery3, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 8, image: gallery2, title: "Symphony Dyer", price: "₹569,000", address: "2120 Marshville Road, Uttrakhand", bath: "8 Bath", beds: "12 Beds", size: "6250 sqft" },
  { id: 9, image: gallery1, title: "Horizon Stylish", price: "₹230,000", address: "00 W 22nd Globe Road, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
];

const villa=villas[0];

const VillasDetails = () => {
    const [activeSection, setActiveSection] = useState('description');
  return (
    <>
    <section className='w-full  mb-[8rem] mt-[5rem]'>
      <article className='w-[80%] mx-auto flex gap-4 '>
        <aside className='w-[70%]'>
            <section className='w-full'>
                <VCrousel/>
                {/* <img src={image2} className='object-contain w-f' alt="" /> */}
            </section>
            <section className='w-full h-[217px] shadow-lg'>
            <article className="flex flex-col space-y-2 p-20 mt-20">
                  <header className="flex justify-between font-bold">
                    <h1 className="font-nunitosans font-bold text-[28px] text-[#3e3e3e] leading-[27.2px]"></h1>
                    <h1 className="font-nunitosans font-bold text-[28px] text-[#ffa800] leading-[27.2px]">{villa.price}</h1>
                  </header>
 
                  <p className="text-left font-nunitosans text-[#aeaeae] text-[22px]"><img src={location} className="inline" />{villa.address}</p>
                  <footer className="flex justify-between text-sm">
                    <p className="text-left font-semibold font-nunitosans text-[#626262] text-[22px]"><img src={bathtub} className="inline" /> {villa.bath}</p>
                    <p className="text-left font-semibold font-nunitosans text-[#626262] text-[22px]"><img src={room} className="inline" /> {villa.beds}</p>
                    <p className="text-left font-semibold font-nunitosans text-[#626262] text-[22px]"><img src={house} className="inline" /> {villa.size}</p>
                  </footer>
                </article>
            </section>
 
            <section className='h-15 flex justify-around items-center bg-[#f4f4f4] w-full mt-15'>
            <h1
                    className={`cursor-pointer ${activeSection === 'description' ? 'text-gray-500' : ''}`}
                    onClick={() => setActiveSection('description')}
                >
                    DESCRIPTION
                </h1>
                <h1
                    className={`cursor-pointer ${activeSection === 'layout' ? 'text-gray-500' : ''}`}
                    onClick={() => setActiveSection('layout')}
                >
                    PROPERTY LAYOUT
                </h1>
 
                <h1
                    className={`cursor-pointer ${activeSection === 'amenities' ? 'text-gray-500' : ''}`}
                    onClick={() => setActiveSection('amenities')}
                >
                    AMENITIES
                </h1>
            </section>
            <section className='w-full'>
                {activeSection === 'layout' && <PropertyLayout />}
                {activeSection === 'description' && <Description />}
                {activeSection === 'amenities' && <Amenities />}
            </section>
        </aside>
        <aside className='w-[30%]'>
            <section className='grid grid-cols-2 gap-6 h-[500px]'>
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
            </section>
        </aside>
      </article>
    </section>
    </>
  )
}
 
export default VillasDetails