import React from 'react';

type SideImagesProps = {
  images: string[];
};

const SideImages: React.FC<SideImagesProps> = ({ images }) => {
  return (
    <section className="">
      <div className='grid xl:grid-cols-2 grid-cols-1 hy-auto '>
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


