import React from 'react'
import aboutimg from '../assets/about-img.png'
import vision from '../assets/vision.png'
import misiion from '../assets/mission.png'
import bulb from '../assets/bulb.png'

const About = () => {
    return (
        <div>

            <section className='lg:py-16 md:py-15  py-5'>
                <div className='lg:p-10 md:p-3 p-1'>
                    <div className='items-center lg:px-40 md:px-20 sm:px-8 px-3 '>
                        <p className='font-kanit text-center text-[#373f41] text-xl sm:text-[20px] md:text-[24px] lg:text-[32px]'>Welcome To VillaCrest</p>
                        <div className='lg:mt-[22px] md:mt-4 lg:px-[175px]  mt-2'>
                            <p className='font-mulish text-[#737b7d] md:text-[18px] text-base text-center'>Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back.</p>
                        </div>
                        <div className='lg:px-[190px] md:mt-5 mt-2 '>
                            <p className='font-mulish text-[#737b7d] md:text-[18px] text-base text-center'>One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>
                        </div>
                    </div>
                    <figure className='lg:px-30 md:px-10 px-3 mt-10'>
                        <img src={aboutimg}></img>
                    </figure>

                </div>
            </section>



            <section className='lg:p-20 py-15'>
                <div className='sm:flex sm:flex-row flex flex-col '>
                    <div className='sm:w-1/2 lg:pl-25 md:pl-15 md:pr-5 lg:pr-10 lg:mt-10 md:mt-7 px-4'>
                        <p className='font-kanit md:text-2xl lg:text-[32px] text-[#373f41] text-center text-xl'>Our Mission</p>
                        <p className=' font-mulish lg:text-[18px] sm::text-[16px] sm:mt-3 mt-2 px-2 text-[#737b7d] lg:mt-5'>Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back.</p>
                        <p className=' font-mulish lg:text-[18px]  px-2 sm::text-[16px] text-[#5f7980] lg:mt-10 sm:mt-4'>   One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>

                    </div>
                    <div className='lg:pl-20 sm:pr-10  md:pl-5 px-3 mt-8'>
                        <img src={misiion} className='  lg:w-[473px] lg:h-[298px] md:w-[400px] md:h-[250px] w-full'></img>

                    </div>

                </div>
            </section>


            <section className='lg:p-20 md:p-12 md:py-10 py-8'>
                <div className='sm:flex sm:flex-row flex flex-col'>
                    <div className=' lg:pl-30 md:pl-4 pl-10 mt-20 pr-10'>
                        <img src={vision} className='lg:w-[415px] lg:h-[415px]  w-full '></img>

                    </div> 

                    <div className='sm:w-1/2 lg:pl-30 text-left mt-20 md:px-4  px-4'>
                        <p className='font-kanit md:text-2xl lg:text-[32px] text-[#373f41] text-center text-xl'>Our Vission</p>
                        <p className=' font-mulish lg:text-[18px] sm:text-[16px] text-[#737b7d] lg:mt-5  mt-3'>Homeowners spend a huge amount of time dealing with the hassles of general property management - fragmented suppliers and vendors, lack of planning and tracking, lack of time to negotiate and monitor capital projects, and having to jump-start their property each time they want to visit. All this costs money and energy and often leads to a disconnect between the experience a homeowner wants from their home and what their experience actually is.</p>


                    </div>

                </div>


            </section>


            <section className='lg:px-[165px] lg:py-[100px] md:p-8 p-3'>
                <div className='bg-[#eaf0ff] lg:w-[1110px] lg:h-[675px]'>
                    <div className='md:py-10 py-5 '>
                        <figure className='lg:px-[520px] sm:pl-80  md:pl-88 lg:pt-10 w-full pl-60 '>
                            <img src={bulb} className='lg:w-[75px] lg:h-[73.5px] md:w-[50px] md:h-[50px] w-[40px] h-[40px]'></img>
                        </figure>
                        <p className='text-center font-kanit lg:text-[32px] md:text-3xl text-[#373f41] sm:text-xl md:py-5 lg:px[285px] mt-3 '>Facts About <span className='font-medium'>Shitlakhet </span></p>
                        <div className='lg:px-[190px] md:px-20  mt-3 px-2'>
                            <p className='font-mulish text-center lg:text-[22px] md:text-xl  sm:text-lg text-base text-[#737b7d]  md:mt-5 lg;mt-7 sm:mt-4'>The mesmerizing view of the sun-kissed hills, rich flora-fauna and the cool breeze carrying away the scent of the rosy rhododendrons makes Sitlakhet an ideal retreat.</p>
                            <p className='font-mulish text-center lg:text-[22px] md:text-xl  sm:text-lg text-base text-[#737b7d]  md:mt-5 lg;mt-7  sm:mt-4 mt-2'>A very wide range of Himalayas is visible from here. Surrounded by about 1800 hectares of forest area from all sides.</p>
                            <p className='font-mulish text-center lg:text-[22px] md:text-xl  sm:text-lg text-base text-[#737b7d]  md:mt-5 lg;mt-7 sm:mt-4 mt-2'>Shitlakhet is known for its natural beauty. Nestled in the lap of nature, this hill station attracts tourists. Shitlakhet is a small hill station. But it is very calm and pleasant. Here you can see the beautiful peaks of the Himalayas.</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About