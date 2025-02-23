
import aboutimg from '../assets/about-img.png'
import vision from '../assets/vision.png'
import misiion from '../assets/mission.png'
import bulb from '../assets/bulb.png'

const About = () => {
    return (
        <div className='pt-20 w-[100%]'>

            <section className='w-full'>
                <div className='md:w-[80%] w-[90%] mx-auto'>
                    <div className=' lg:w-[58%] w-full mx-auto space-y-6 '>
                        <p className='font-kanit text-center text-[#373f41] text-[32px]'>Welcome To VillaCrest</p>

                        <p className='font-mulish text-[#737b7d]  text-[18px]   text-center'>Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back.</p>
                        <p className='font-mulish text-[#737b7d]  text-[18px] w-[90%] mx-auto text-center '>One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>

                    </div>
                    <figure className=' mt-10'>
                        <img src={aboutimg}></img>
                    </figure>

                </div>
            </section>



            <section className=' lg:my-50 my-30 '>
                <article className='w-full mx-auto '>
                    <div className='flex lg:flex-row  flex-col sm:w-[80%] w-[90%] gap-x-10 mx-auto'>
                        <div className='lg:w-[50%] mx-auto xl:mt-8  space-y-7'>
                            <p className='font-kanit text-[32px] text-[#373f41] text-center  lg:text-left'>Our Mission</p>
                            <p className=' font-mulish text-[18px]   text-[#737b7d]'>Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back.</p>
                            <p className=' font-mulish text-[18px]    text-[#5f7980] '>   One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>

                        </div>
                        <div className='lg:w-[50%] mx-auto mt-15 xl:mt-0'>
                            <img src={misiion} className=' lg:w-fit md:w-[80%] w-[95%] mx-auto'></img>

                        </div>

                    </div>


                </article>
            </section>


            <section className=' '>
                <article className='w-full mx-auto '>
                    <div className='flex lg:flex-row flex-col-reverse sm:w-[80%] w-[90%] mx-auto lg:gap-x-20'>
                        <div className='lg:w-[50%] w-full mx-auto xl:mt-0 lg:mt-5 mt-20'>
                            <img src={vision} className=' lg:w-[90%] xl:w-[70%] md:w-[50%] w-[70%] mx-auto'></img>
                        </div>
                        <div className='lg:w-[50%] mx-auto xl:mt-8  space-y-6'>
                            <p className='font-kanit text-[32px] text-[#373f41]  text-center lg:text-left '>Our Vision</p>
                            <p className=' font-mulish text-[18px]   text-[#737b7d]'>Homeowners spend a huge amount of time dealing with the hassles of general property management - fragmented suppliers and vendors, lack of planning and tracking, lack of time to negotiate and monitor capital projects, and having to jump-start their property each time they want to visit. All this costs money and energy and often leads to a disconnect between the experience a homeowner wants from their home and what their experience actually is.</p>

                        </div>
                    </div>
                </article>
            </section>



            <section className='pt-40 sm:pb-30 pb-20'>
                <div className='bg-[#eaf0ff] md:w-[80%] w-full mx-auto rounded-xl'>
                    <div className='flex flex-col xl:w-[64%] lg:w-[75%] pt-10 lg:pb-50 w-[90%] pb-20 mx-auto justify-center '>
                        <figure className='w-[20%] mx-auto '>
                            <img src={bulb} className=''></img>
                        </figure>
                        <p className='text-center font-kanit xl:text-[32px] lg:text-[28px] text-[24px]  md:text-3xl text-[#373f41]   lg:py-5 lg:px[285px] mt-3 '>Facts About <span className='font-medium'>Shitlakhet </span></p>
                        <div className=' pt-5 '>
                            <p className='font-mulish text-center lg:text-[20px] xl:text-[22px] text-[18px] text-[#737b7d]  '>The mesmerizing view of the sun-kissed hills, rich flora-fauna and the cool breeze carrying away the scent of the rosy rhododendrons makes Sitlakhet an ideal retreat.</p>
                            <p className='font-mulish text-center lg:text-[20px] xl:text-[22px] text-[18px]  text-[#737b7d] lg:my-6 md:my-4 my-3 '>A very wide range of Himalayas is visible from here. Surrounded by about 1800 hectares of forest area from all sides.</p>
                            <p className='font-mulish text-center lg:text-[20px] xl:text-[22px] text-[18px]  text-[#737b7d] '>Shitlakhet is known for its natural beauty. Nestled in the lap of nature, this hill station attracts tourists. Shitlakhet is a small hill station. But it is very calm and pleasant. Here you can see the beautiful peaks of the Himalayas.</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About