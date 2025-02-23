

import villas from '../VillasData/Data';

import Villacard from '../Components/Villacard';

const Villas = () => {
  return (
    <section className='w-full my-[5rem] '>
        <article className='w-[85%] mx-auto'>
            <article className="mb-[1rem] xl:mb-[1rem] sm:w-[60%] md:w-[50%] w-[90%] lg:w-[40%] xl:w-[30%] mx-auto text-center">
                <h1 className="font-kanit text-[2rem] text-[#373f41] pb-6">
                    Let's explore the villas of your dreams
                </h1>
            </article>

            <div className='grid grid-cols-1 gap-3 sm:gap-6 md:gap-3 lg:gap-8  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5'>
                {villas.map((villa) => (
                    <Villacard key={villa.id} villa={villa} />
                ))}
            </div>
        </article>
    </section>
);
}


export default Villas
