import React from 'react';

type SideImagesProps = {
  images: string[];
};

const SideImages: React.FC<SideImagesProps> = ({ images }) => {
  return (
    <section className="">
      <div className='grid lg:grid-cols-2  hy-auto  gap-5'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="rounded-md "
          alt=""
        /> 
      ))}
        
      </div>
      
    </section>
  );
};

export default SideImages;


