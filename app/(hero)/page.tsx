import React from 'react'
import MainContent from '../component/mainContent'
import image1 from '../images/image1.jpg'
import { Metadata } from 'next'
export const metadata :Metadata = {
  title: 'Home',
  description: 'Home page of the application',
}

export default function page() {
  return (
      <MainContent imageSrc={image1} altText='home alt' desTxt='home ~~ 加油⛽️'/>
  )
}
