import React from 'react'
import MainContent from './component/mainContent'
import image1 from '../app/images/image1.jpg'

export default function page() {
  return (
      <MainContent imageSrc={image1} altText='home alt' desTxt='home ~~ 加油⛽️'/>
  )
}
