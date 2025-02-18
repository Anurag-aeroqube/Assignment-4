
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
      <div className="w-full bg-[#3c64b1]/5">
        <div className="px-2 py-5  lg:px-30 lg:pt-20 pb-10">
          <h1 className="font-kanit text-center text-lg sm:text-2xl sm:space-x-2 font-medium opacity-70 md:text-3xl lg:text-4xl md:px-25 lg:px-30 leading-snug tracking-wide ">
            Take your <span className="font-bold">real estate</span> experience to new heights in the <span className="font-bold">Himalayas</span>
          </h1>
          <p className="text-center text-sm sm:text-lg  px-2 sm:px-15 lg:px-30 text-gray-500 mt-4">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
          </p>

          <div className="mt-8 ">
            <Carousel />
          </div>
        </div>
      </div>


      {/* about us section */}

      <section id="about" className="lg:py-18  text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start w-full mt-20 ">
          <img src={about} className="w-full sm:w-1/2 sm:px-10 rounded-lg " alt="About Villa" />
          <div className="md:w-2/3 px-4 text-left">
            <h3 className=" mt-8 text-2xl sm:text-3xl opacity-70 font-semibold mb-5">About Us</h3>
            <p className="text-gray-600 text-lg sm:text-lg opacity-70 md:leading-[2]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

        </div>
      </section>


      {/* about us ke bd */}

      <div className='bg-[#3c64b1]/5 items-center w-full lg:px-40 h-full'>
        <div className='sm:flex flex-col justify-center mt-10 lg:p-20' >
          <h1 className='text-bold text-xl mt-10 sm:text-3xl font-medium opacity-70 leading-[1.5] text-center'>Feature regarding purchase of villa & also rent out feature with villacrest</h1>
          <p className='md:text-xlsm:text-base lg:px-25 px-5 mt-5 opacity-40 text-center sm:max-w-5xl'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <img src={section3} className='sm:px-25 items-center mb-'></img>
      </div>

      {/* on call cook */}

      <div className="flex flex-col md:flex-row justify-between py-10 items-center md:mb-8 md:mt-30 lg:px-20  lg:space-x-10">
        <div className="md:w-1/2  lg:px-20">
          <h3 className="text-2xl sm:text-3xl text-center font-semibold mb-8 opacity-70 lg:px-20">On Call Cook</h3>
          <p className="text-gray-600 px-4 text-lg sm:text-xl text-center lg:px-5 opacity-70">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="sm:1/2:w-1/2 px-10 sm:px-20">
          <img src={cook} alt="On Call Cook" className="w-full" />
        </div>
      </div>

      {/* 
      laundary services */}


      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 p-15 md:px-30">
          <img src={laundary} alt="On Call Cook" className="w-full" />
        </div>
        <div className="md:w-1/2   sm:p-4">
          <h3 className="text-2xl sm:text-3xl text-center font-semibold opacity-70 mb-8">Laundary Services</h3>
          <p className="text-gray-600 text-lg sm:text-xl px-3 opacity-70">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>


      {/* facility cleaning services */}

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 mt-30 lg:px-20  lg:space-x-10">
        <div className="sm:w-1/2  lg:px-20">
          <h3 className="text-2xl sm:text-3xl text-center font-semibold mb-8 opacity-70 lg:px-20">On Call Cook</h3>
          <p className="text-gray-600 px-3 text-lg sm:text-xl lg:px-5 opacity-70">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="sm:1/2:w-1/2 px-10 sm:px-20">
          <img src={cook} alt="On Call Cook" className="w-full" />
        </div>
      </div>


      {/* maintance and repairs */}

      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 md:p-15 md:px-30">
          <img src={maintenance} alt="On Call Cook" className="w-full" />
        </div>
        <div className="md:w-1/2 py-10 md:p-4">
          <h3 className="text-2xl sm:text-3xl  font-semibold opacity-70 mb-8 text-center">Maintamce & Repairs</h3>
          <p className="text-gray-600 text-lg px-3 sm:text-xl opacity-70">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>

      {/* view details */}


      <div className='bg-[#3c64b1]/10  w-full md:py-10  '>
        <div className='sm:flex flex-row justify-between md:mt-10 md:p-10  lg:p-20'>
          <div className='sm:flex-row md:w-1/2   md:mt-16 lg:px-15 items-center'>
            <div>
              <p className='sm:text-3xl text-2xl text-center font-bold opacity-70'>Title for the key features of the villa goes here</p>
              <p className='sm:text-xl px-2 opacity-60 mt-5 leading-[2] tracking-wide'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div >
            <div className="sm:flex flex-row justify-between lg:px-5 mt-10">
              <ul className="sm:space-y-4 list-disc list-inside marker:text-[#3c64b1]">
                <li className="text-lg font-bold">Tailored services</li>
                <li className="text-lg font-bold">Effortless arrivals</li>
                <li className="text-lg font-bold">Inspection and vetting</li>
              </ul>
              <ul className="sm:space-y-4 list-disc list-inside marker:text-[#3c64b1]">
                <li className="text-lg font-bold">Expertly designed</li>
                <li className="text-lg font-bold">Luxury amenities</li>
                <li className="text-lg font-bold">Custom itineraries</li>
              </ul>
            </div>

            <div className='md:px-18 mb-8'>
              <button className='bg-[#3c64b1] items-center w-fit wx-auto mt-15 text-white lg:px-6 py-3 text-sm'>View Details</button>
            </div>

          </div>
          <div>
            <img src={section5} className='w-full items-start'></img>
          </div>

        </div>
      </div>


      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-10">
          Villa Image Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:space-y-4">
          <img src={galary1} alt="Villa 1" className=" shadow-lg" />
          <img src={galary2} alt="Villa 2" className=" shadow-lg" />
          <img src={galary3} alt="Villa 3" className=" shadow-lg" />
          <img src={galary1} alt="Villa 1" className=" shadow-lg" />
          <img src={galary2} alt="Villa 2" className="   shadow-lg" />
          <img src={galary3} alt="Villa 3" className=" shadow-lg" />
        </div>
      </section>


      <section className='bg-[#3c64b1]/20 items-center'>
        <div className='py-5 flex flex-col justify-center'>
          <p className='sm:text-2xl font-semibold opacity-70 text-center '>Why Choose VillaCrest?</p>
          <p className='lg:px-96 px-3 py-5 opacity-50'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <button className='bg-[#3c64b1] w-fit mx-auto px-6 py-3 text-white '>Contact</button>

        </div>
      </section>



    </div>

  );
};

export default Home;
