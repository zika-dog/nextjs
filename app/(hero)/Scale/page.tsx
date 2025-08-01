import React from 'react'
import MainContent from '../../component/mainContent'
import image4 from '../../images/image4.jpg'
import { Metadata } from 'next'
export const metadata : Metadata = {
  title: 'Scale',
  description: 'Scale page of the application',
}
export default function Scale() {
  return (
    <div>
      <MainContent imageSrc={image4} desTxt='Scale 坚持 坚持 坚持✊' altText='Scale alt'/>
    </div>
  )
}
