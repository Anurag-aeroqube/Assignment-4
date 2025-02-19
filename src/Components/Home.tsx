
import about from '../assets/about.png';
import cleaning from '../assets/cleaning.png';
import cook from '../assets/cook.png';
import laundary from '../assets/laundry.png'
import section3 from '../assets/section-3-img.webp'
import section5 from '../assets/section-5-img.png'
import galary1 from '../assets/gallery-1.png'
import galary2 from '../assets/gallery-2.png'
import galary3 from '../assets/gallery-3.png'
import maintenance from '../assets/maintenance.png'
import Carousel from './Carousel';







const Home = () => {
  return (
    <div className='py-1'>
      <div className="w-full  bg-[#3c64b1]/6">
        <div className="sm:px-5 py-5  px-1 lg:px-30 lg:pt-20 pb-10">
          <div className='px-3 sm:px-10'>
            <h1 className="font-kanit text-center lg:px-36 text-xl sm:text-2xl sm:space-x-2 text-[#373f41] md:px-16 md:text-3xl lg:text-[44px]   lg:leading-[65px] md:leading-[52px] lg:tracking-[1px] ">
              Take your <span className="font-medium">real estate</span> experience to new heights in the <span className="font-medium">Himalayas</span>
            </h1>
            <p className="text-center text-base sm:text-lg lg:px-36 font-mulish lg:text-[20px] md:px-28 px-6  text-[#737b7d] mt-4">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
            </p>

          </div>


          <div className="mt-8 ">
            <Carousel />
          </div>
        </div>
      </div>


      {/* about us section */}

      <section id="about" className="lg:p-10  text-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:pl-20 sm:flex-row items-start w-full mt-20 md:pl-8">
          <img src={about} className="w-full sm:w-1/2  lg:pl-16 lg:pr-12 object-fill md:pl-3 rounded-lg " alt="About Villa" />
          <div className="md:w-2/3  md:pb-10   lg:pr-24 sm:text-left  md:px-4  ">
            <h3 className=" text-2xl lg:text-[32px] text-[#373f41] font-kanit mb-3 md:text-left text-center mt-1">About Us</h3>
            <p className="text-[#737b7d] font-mulish text-base md:text-[16px] px-2 lg:text-[18px] md:leading-[1.5]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

        </div>
      </section>


      {/* about us ke bd */}
      <section className='lg:py-12'>
        <div className='bg-[#3c64b1]/5 items-center w-full lg:px-35 h-full'>
          <div className='sm:flex flex-col justify-center py-6 lg:p-8' >
            <h1 className='text-xl md:text-[32px] font-kanit text-[#373f41] lg:px-30 px-2 leading-[1.5] text-center'>Feature regarding purchase of villa & also rent out feature with villacrest</h1>
            <p className='md:text-[20px] sm:text-base text-[#737b7d]  lg:px-44 md:px-20 mt-5  px-3  text-center'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className='lg:p-8 mt-4 pb-6'>
            <img src={section3} className='sm:px-25 lg:pl-28 w-full mx-auto '></img>
          </div>

        </div>
      </section>


      {/* on call cook */}
      <section className='py-10' >
        <div className="flex flex-col md:flex md:flex-row justify-between md:px-20 py-10 items-center md:h-[404px]   ">
          <div className="md:w-1/2  lg:pl-32 md:text-left px-3 ">
            <h3 className="  lg:text-[32px] text-[#373f41] mb-6 text-2xl md:text-left text-center font-kanit ">On Call Cook</h3>
            <p className="text-[#737b7d] font-mulish lg:text-[20px]  ">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className=" md:w-1/2 md:px-12 px-2 mt-3 ">
            <img src={cook} alt="On Call Cook" className=" md:w-fit  w-full mx-auto" />
          </div>
        </div>

      </section>


      {/* 
      laundary services */}


      <section className='py-10 ' >
        <div className="flex flex-col md:flex md:flex-row justify-between lg:px-20 lg:py-10 items-center lg:h-[399px] px-3   ">
          <div className=" md:w-1/2 lg:pl-36 md:px-12 ">
            <img src={laundary} alt="On Call Cook" className=" md:w-fit w-full mx-auto" />
          </div>
          <div className="md:w-1/2  lg:pr-20  md:pr-18 lg:pl-3 md:text-left mt-10 ">
            <h3 className="  lg:text-[32px] text-[#373f41] mb-8 font-kanit md:text-left text-center text-2xl">Laundary Services</h3>
            <p className="text-[#737b7d] font-mulish lg:text-[20px] tracking-[0.3px]  ">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

        </div>

      </section>


      {/* facility cleaning services */}

      <section className='py-10' >
        <div className="flex flex-col md:flex-row justify-between lg:px-20 py-10 items-center lg:h-[404px] px-3  ">
          <div className="md:w-1/2    md:text-left text-center lg:pl-30 md:pl-20">
            <h3 className="  lg:text-[32px] text-[#373f41] mb-8 font-kanit text-2xl ">Facility Cleaning Services</h3>
            <p className="text-[#737b7d] font-mulish lg:text-[20px]  ">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className=" md:w-1/2 mt-5 sm:px-20 md:px-14">
            <img src={cleaning} alt="On Call Cook" className=" md:w-fit w-full mx-auto" />
          </div>
        </div>

      </section>


      {/* maintance and repairs */}

      <section className='py-10 ' >
        <div className="flex flex-col md:flex-row justify-between md:px-20 lg:py-10 items-center lg:h-[316px]   ">
          <div className=" md:w-1/2 md:pl-14 md:pr-12 lg:pl-25 lg:pr-20 ">
            <img src={maintenance} alt="On Call Cook" className="md:w-fit w-full mx-auto " />
          </div>
          <div className="md:w-1/2  lg:pr-20  md:pl-5 md:text-left lg:pl-5 text-center pt-8 px-2">
            <h3 className="  lg:text-[32px] text-[#373f41] mb-8  text-2xl font-kanit ">Maintenance & Repairs</h3>
            <p className="text-[#737b7d] font-mulish lg:text-[20px]  tracking-[0.1px]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

        </div>

      </section>

      {/* view details */}

      <section className='py-16'>
      <div className='bg-[#3c64b1]/10  w-full   '>
        <div className='md:flex md:flex-row md:justify-between  flex flex-col justify-center  md:p-10  lg:p-20'>
          <div className='sm:flex-row md:w-1/2   lg:mt-10 lg:px-15 px-2  '>
            <div>
              <p className='md:text-[32px] text-xl md:text-left text-center font-kanit '>Title for the key features of the villa goes here</p>
              <p className='lg:text-[20px] px-2 text-[#737b7d] mt-5 tracking-[0.3px] font-mulish '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div >
            <div className="sm:flex flex-row justify-between lg:px-5 mt-10">
              <ul className="sm:space-y-4 list-disc list-inside  marker:text-[#3c64b1]">
                <li className=" font-manrope lg:text-[18px] md:text-[14px] font-semibold">Tailored services</li>
                <li className="font-manrope lg:text-[18px] md:text-[14px]  font-semibold">Effortless arrivals</li>
                <li className="font-manrope lg:text-[18px] md:text-[14px]  font-semibold">Inspection and vetting</li>
              </ul>
              <ul className="sm:space-y-4 list-disc list-inside marker:text-[#3c64b1]">
                <li className="font-manrope lg:text-[18px] md:text-[14px] font-semibold">Expertly designed</li>
                <li className="font-manrope lg:text-[18px] md:text-[14px]  font-semibold">Luxury amenities</li>
                <li className="font-manrope lg:text-[18px] md:text-[14px]  font-semibold">Custom itineraries</li>
              </ul>
            </div>

            <div className='md:px-5 mb-8 px-18'>
              <button className='bg-[#6d87cb] font-mulish md:items-left w-fit mx-auto mt-15 text-white md:px-6 md:py-3 md:text-[18px] text-xl px-4 py-2   '>View Details</button>
            </div>

          </div>
          <div className='lg:pr-20'>
            <img src={section5} className='w-full items-start'></img>
          </div>

        </div>
      </div>

      </section>
      


      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl font-kanit text-[32px] text-[#373f41] leading-[50px] mb-10">
          Villa Image Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-fit mx-auto lg:px-4 sm:space-y-4">
          <img src={galary1} alt="Villa 1" className=" shadow-lg" />
          <img src={galary2} alt="Villa 2" className=" shadow-lg" />
          <img src={galary3} alt="Villa 3" className=" shadow-lg" />
          <img src={galary1} alt="Villa 1" className=" shadow-lg" />
          <img src={galary2} alt="Villa 2" className="   shadow-lg" />
          <img src={galary3} alt="Villa 3" className=" shadow-lg" />
        </div>
      </section>


      <section className='bg-[#3c64b1]/10 items-center '>
        <div className='py-5 flex flex-col justify-center'>
          <p className='md:text-[32px] font-kanit text-center leading-[50px] text-[24px] '>Why Choose VillaCrest?</p>
          <p className='lg:px-96 px-3 py-5 text-[20px] font-mulish leading-[32px] md:px-48  text-[#737b7d]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <button className='bg-[#6d87cb] font-mulish font-bold text-[14px] w-fit mx-auto py-3 px-6 text-white md:mb-10'>Contact</button>

        </div>
      </section>



    </div>

  );
};

export default Home;
