import React from 'react'

import image1 from '../assets/Group 3206.svg'
import image2 from '../assets/Group 3204.svg'
import image3 from '../assets/Group 3205.svg'

const Amenities = () => {
  return (
    <section className='w-full grid grid-cols-3 space-y-10 gap-x-16 mt-[56px]'>
        <figure className=''><img src={image1} alt="" className='object-contain w-full'/></figure>
        <figure><img src={image2} alt="" className='object-contain w-full'/></figure>
        <figure><img src={image3} alt="" className='object-contain w-full'/></figure>
        <figure><img src={image2} alt="" className='object-contain w-full'/></figure>
        <figure><img src={image3} alt="" className='object-contain w-full'/></figure>
        <figure><img src={image2} alt="" className='object-contain w-full'/></figure>
        <figure><img src={image3} alt="" className='object-contain w-full'/></figure>
        <figure><img src={image3} alt="" className='object-contain w-full'/></figure>
    </section>
  )
}
 
export default Amenities