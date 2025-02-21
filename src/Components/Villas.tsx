

import villas from '../VillasData/Data';

import Villacard from '../Components/Villacard';

const Villas = () => {

    return (
      <section className='w-full my-[5rem] '>
        <article className='w-[85%] mx-auto'>
          <article className="mb-6 sm:mb-6 xl:w-[28%] lg:w-[40%] md:w-[50%] mx-auto text-center">
            <h1 className="font-kanit text-[2rem] text-[#373f41]">
              Let's explore the villas of your dreams
            </h1>
            
              
            
          </article>
  
          <div className='grid grid-cols-1 space-y-10 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:space-y-35'>
  {villas.map((villa) => (
    <Villacard key={villa.id} villa={villa} />
  ))}
</div>
        </article>
      </section>
    );
}

export default Villas
