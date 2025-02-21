import React from 'react'
import aboutimg from '../assets/about-img.png'
import vision from '../assets/vision.png'
import misiion from '../assets/mission.png'
import bulb from '../assets/bulb.png'

const About = () => {
    return (
        <div className='pt-20'>

            <section className='w-full'>
                <div className='w-[80%] mx-auto'>
                    <div className=' w-[58%] mx-auto space-y-6 '>
                        <p className='font-kanit text-center text-[#373f41] text-[32px]'>Welcome To VillaCrest</p>

                        <p className='font-mulish text-[#737b7d]  text-[18px]   text-center'>Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back.</p>
                        <p className='font-mulish text-[#737b7d]  text-[18px] w-[90%] mx-auto text-center '>One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>

                    </div>
                    <figure className=' mt-10'>
                        <img src={aboutimg}></img>
                    </figure>

                </div>
            </section>



            <section className=' my-50 '>
                <article className='w-full mx-auto '>
                    <div className='flex lg:flex-row  flex-col w-[80%] gap-x-10 mx-auto'>
                        <div className='md:w-[50%] mx-auto mt-8  space-y-7'>
                            <p className='font-kanit text-[32px] text-[#373f41] text-left '>Our Mission</p>
                            <p className=' font-mulish text-[18px]   text-[#737b7d]'>Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back.</p>
                            <p className=' font-mulish text-[18px]    text-[#5f7980] '>   One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>

                        </div>
                        <div className='md:w-[50%] mx-auto'>
                            <img src={misiion} className=' w-fit mx-auto'></img>

                        </div>

                    </div>


                </article>
            </section>


            <section className=' '>
                <article className='w-full mx-auto '>
                    <div className='flex lg:flex-row flex-col w-[80%] mx-auto gap-x-20'>
                        <div className='md:w-[50%] mx-auto'>
                            <img src={vision} className=' w-[70%] mx-auto'></img>
                        </div>
                        <div className='md:w-[50%] mx-auto mt-8  space-y-6'>
                            <p className='font-kanit text-[32px] text-[#373f41] text-left '>Our Vision</p>
                            <p className=' font-mulish text-[18px]   text-[#737b7d]'>Homeowners spend a huge amount of time dealing with the hassles of general property management - fragmented suppliers and vendors, lack of planning and tracking, lack of time to negotiate and monitor capital projects, and having to jump-start their property each time they want to visit. All this costs money and energy and often leads to a disconnect between the experience a homeowner wants from their home and what their experience actually is.</p>

                        </div>
                    </div>
                </article>
            </section>



            <section className='pt-40 pb-30'>
                <div className='bg-[#eaf0ff] w-[80%] mx-auto rounded-xl'>
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