

import villas from '../VillasData/Data';

import Villacard from '../Components/Villacard';

const Villas = () => {

    return (
      <section className='w-full my-[5rem] '>
        <article className='w-[85%] mx-auto'>
          <article className="mb-[4.35rem] text-center">
            <h1 className="font-kanit text-[2rem] text-headColor">
              Let's explore the villas
            </h1>
            <h1 className="font-kanit text-[2rem] text-headColor">
              of your dreams
            </h1>
          </article>
  
          <div className='grid grid-cols-1 space-y-20  sm:grid-cols-2 lg:grid-cols-3 sm:space-y-35'>
  {villas.map((villa) => (
    <Villacard key={villa.id} villa={villa} />
  ))}
</div>
        </article>
      </section>
    );
}

export default Villas
