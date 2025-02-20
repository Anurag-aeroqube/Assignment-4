
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
    <div className=''>

      {/* <section className='bg-[#3c64b1]/6 w-full'>
        <header className='w-[70%] mx-auto'>
          <div className='w-[81%] mx-auto auto pt-16'>
            <h1 className='font-kanit text-[44px] text-center leading-[65px] text-[#373f41] tracking-[1px]'>Take your <span className='font-medium'> real estate</span> experience to new heights in the <span className='font-medium'>Himalayas</span> </h1>
            <p className='font-mulish text-[#737b7d] text-center text-[22px]leading-[30px] tracking-[0.3px] py-3 w-[80%] mx-auto'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.</p>

          </div>
          <div>
            <Carousel/>

          </div>
        </header>
      </section> */}


      <div className="w-full  bg-[#3c64b1]/6">
        <div className=" py-4   xl:w-[70%]  md:w-[80%] w-[90%] mx-auto lg:pt-20 pb-10">
          <div className='w-[90%] mx-auto'>
            <h1 className="font-kanit text-center text-xl sm:text-2xl  text-[#373f41]  md:text-3xl lg:text-[44px]   lg:leading-[65px] md:leading-[52px] lg:tracking-[1px] ">
              Take your <span className="font-medium">real estate</span> experience to new heights in the <span className="font-medium">Himalayas</span>
            </h1>
            <p className="text-center text-base sm:text-lg  font-mulish lg:text-[20px] md:text-[18px] w-[80%] mx-auto text-[#737b7d] mt-4">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
            </p>
          </div>
          <div className="mt-8 ">
            <Carousel />
          </div>
        </div>
      </div>


      {/* about us section */}

      <section id="about" className="mt-10">
        <article className='w-full sm:py-8 lg:py-25'>
          <div className="xl:w-[70%]  md:w-[80%] w-[90%]   mx-auto flex lg:flex-row flex-col-reverse  justify-between md:gap-x-9">
            <img src={about} className="  rounded-lg lg:w-[46%] mt-10 mb-9 lg:mt-0" alt="About Villa" />
            <div className="lg:w-[54%]">
              <h3 className=" text-[32px] text-[#373f41] font-kanit  lg:text-left text-center">About Us</h3>
              <p className="text-[#737b7d] font-mulish   text-[18px] leading-[1.5] mt-3  ">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </article>
      </section>


      {/* about us ke bd */}
      <section className='lg:py-12'>
        <article className='bg-[#3c64b1]/5 w-full '>
          <div className='xl:w-[70%]  md:w-[80%] w-[90%]  mx-auto md:py-20 py-10'>
            <div className='sm:flex flex-col justify-center ' >
              <h1 className=' text-[32px] font-kanit text-[#373f41] md:leading-[1.5] leading-[1.3] text-center'>Feature regarding purchase of villa & also rent out feature with villacrest</h1>
              <p className='text-[20px]  text-[#737b7d]  mt-5 lg:w-[88%] mx-auto  w-[94%]  text-center'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className=' mt-7 pb-4'>
              <img src={section3} className=' w-full mx-auto '></img>
            </div>
          </div>
        </article>
      </section>


      {/* on call cook */}
      <section className='lg:py-14 sm:py-10' >
        <article className='w-full'>
          <div className='lg:w-[70%] w-[80%] mx-auto flex lg:flex-row flex-col  md:justify-between'>
            <header className='lg:w-[50%] py-20 space-y-8'>
              <p className='text-[#373f41] font-kanit text-[32px] leading-[40px] lg:text-left text-center tracking-[0.1px]'>On Call Cook</p>
              <p className='font-mulish text-[20px] text-[#737b7d] leading-[32px] tracking[0.3px] '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </header>
            <figure className='lg:w-[50%] '>
              <img src={cook} className=' w-[70%] mx-auto lg:ml-30'></img>
            </figure>

          </div>
        </article>

      </section>


      {/* 
      laundary services */}


<section className='lg:py-14 sm:py-10' >
        <article className='w-full'>
       
          <div className='lg:w-[70%] w-[80%] mx-auto flex lg:flex-row flex-col-reverse  md:justify-between'>
          <figure className='lg:w-[50%] '>
              <img src={laundary} className='w-[70%] mx-auto '></img>
            </figure>

            <header className='lg:w-[50%] py-20 space-y-8'>
              <p className='text-[#373f41] font-kanit text-[32px] leading-[40px] lg:text-left text-center tracking-[0.1px]'>Laundary Services</p>
              <p className='font-mulish text-[20px] text-[#737b7d] leading-[32px] tracking[0.3px] '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </header>
            

          </div>
        </article>

      </section>


      {/* facility cleaning services */}

      <section className='lg:py-14 sm:py-10' >
        <article className='w-full'>
          <div className='lg:w-[70%] w-[80%] mx-auto flex lg:flex-row flex-col  md:justify-between'>
            <header className='lg:w-[50%] py-20 space-y-8'>
              <p className='text-[#373f41] font-kanit text-[32px] leading-[40px] lg:text-left text-center tracking-[0.1px]'>Facility Cleaning Services</p>
              <p className='font-mulish text-[20px] text-[#737b7d] leading-[32px] tracking[0.3px] '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </header>
            <figure className='lg:w-[50%] '>
              <img src={cleaning} className='lg:w-[70%] w-[70%] mx-auto lg:ml-30'></img>
            </figure>

          </div>
        </article>

      </section>


      {/* maintance and repairs */}

      <section className='lg:py-14 py-10 mb-20 ' >
        <article className='w-full'>
       
          <div className='lg:w-[70%] w-[80%] mx-auto flex lg:flex-row flex-col-reverse gap-x-5 lg:justify-between'>
          <figure className='lg:w-[48%] mx-auto sm:pt-0 pt-10 '>
              <img src={maintenance} className='w-[90%]  my-auto '></img>
            </figure>

            <header className='lg:w-[52%]   space-y-8'>
              <p className='text-[#373f41] font-kanit text-[32px] leading-[40px] lg:text-left text-center tracking-[0.1px]'>Maintenance & Repairs</p>
              <p className='font-mulish text-[20px] text-[#737b7d] leading-[32px] tracking[0.3px] '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </header>
            

          </div>
        </article>

      </section>

      {/* view details */}


      <section>
        <article className='w-full bg-[#3c64b1]/10'>
          <div className='xl:w-[70%] md:w-[80%] w-[90%]  mx-auto flex lg:flex-row flex-col gap-3 py-8 '>
            <header className='lg:w-[54%] py-10  '>
              <header>
                <p className=' text-[24px] sm:text-left text-center leadinng-[40px] tracking-[0.1px] font-kanit '>Title for the key features of the villa goes here</p>
                <p className=' text-[15px] lg:w-[94%] w-[96%] mx-auto  text-[#737b7d] md:leading-[32px] leading-[24px]  py-6 tracking-[0.3px] font-mulish '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </header>

              <div className='flex md:flex-row flex-col lg:justify-between justify-around w-[96%]'>
                <ul className="sm:space-y-4 space-y-1 list-disc list-inside   marker:text-[#3c64b1]">
                  <li className=" font-manrope lg:text-[18px] text-[16px] font-semibold">Tailored services</li>
                  <li className="font-manrope lg:text-[18px] text-[16px]  font-semibold">Effortless arrivals</li>
                  <li className="font-manrope lg:text-[18px] text-[16px]  font-semibold">Inspection and vetting</li>
                </ul>
                <ul className="sm:space-y-4 space-y-1 list-disc list-inside marker:text-[#3c64b1] md:pt-0 pt-1 ">
                  <li className="font-manrope lg:text-[18px] md:text-[16px] font-semibold">Expertly designed</li>
                  <li className="font-manrope lg:text-[18px] md:text-[16px]  font-semibold">Luxury amenities</li>
                  <li className="font-manrope lg:text-[18px] md:text-[16px]  font-semibold">Custom itineraries</li>
                </ul>
              </div>

              <footer className='w-[34%] lg:mx-0 mx-auto'>
                <button className='bg-[#6d87cb] font-mulish w-fit mx-auto py-2 px-4 mt-10 text-white  xl:text-[18px] lg:text-[16px] text-[14px]  '>View Details</button>
              </footer>

            </header>
            <figure className='lg:w-[46%]  '>
              <img src={section5} className='xl:w-[95%] mx-auto mt-10'></img>
            </figure>
          </div>
        </article>

      </section>




      <section className="py-28 bg-white text-center">
        <article className='xl:w-[70%] md:w-[80%] w-[90%] mx-auto '>
          <h2 className="text-2xl font-kanit text-[32px] text-[#373f41] leading-[50px] mb-12">
            Villa Image Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 gap-x-14 g max-w-6xl w-fit mx-auto gap-">
            <img src={galary1} alt="Villa 1" className=" shadow-lg" />
            <img src={galary2} alt="Villa 2" className=" shadow-lg" />
            <img src={galary3} alt="Villa 3" className=" shadow-lg" />
            <img src={galary1} alt="Villa 1" className=" shadow-lg" />
            <img src={galary2} alt="Villa 2" className="   shadow-lg" />
            <img src={galary3} alt="Villa 3" className=" shadow-lg" />
          </div>

        </article>

      </section>


      <section className='bg-[#3c64b1]/10 w-full '>
      <article className='xl:w-[70%] md:w-[80%] w-[90%] mx-auto pt-5'>
      <div className=' flex  flex-col  gap-y-7 pb-20 '>
          <p className='text-[32px] font-kanit text-center text-[#373f41] leading-[50px]  '>Why Choose VillaCrest?</p>
          <p className=' text-[16px] text-center font-mulish  leading-[30px] xl:w-[60%] tracking-[0.3px]  mx-auto  text-[#737b7d]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <button className='bg-[#6d87cb] font-mulish font-bold text-[14px] w-fit mx-auto py-3 px-7 text-white '>Contact</button>

        </div>

      </article>
        
      </section>



    </div>

  );
};

export default Home;
