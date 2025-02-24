import React from 'react';

type HoriImagesProps = {
  images: string[];
};

const Hcrousel: React.FC<HoriImagesProps> = ({ images }) => {
  return (
    <section className="w-full">
      <div className='flex flex-row  hx-auto   gap-5'>
      {images.map((image, index) => (
        <img key={index} src={image} className="rounded-md sm:w-[20%] w-[30%]" alt="side images"/> 
      ))}
        
      </div>
      
    </section>
  );
};

export default Hcrousel