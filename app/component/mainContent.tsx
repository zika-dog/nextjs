import React from 'react'
import Image ,{ StaticImageData } from 'next/image'
import image1 from './images/image1.jpg'

interface MainContentProps {
    imageSrc: StaticImageData;
    altText: string;
    desTxt: string;
}

export default function page(props : MainContentProps) {
  return (
    <div className='w-full h-screen relative'>
      <div className='absolute inset-0 -z-1'>
        <Image src={props.imageSrc} alt={props.altText} className='w-full h-full object-cover' />
      </div>
      <div className='w-full h-full flex justify-center items-center text-6xl font-bold text-white'>
        {props.desTxt}
      </div>
    </div>
  )
}
