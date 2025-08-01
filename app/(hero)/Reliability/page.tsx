import React from 'react'
import MainContent from '../../component/mainContent'
import image3 from '../../images/image3.jpeg'

import { Metadata } from 'next'
export const metadata : Metadata = {
  title: 'Reliability',
  description: 'Reliability page of the application',
}

export default function Reliability() {
  return (
    <div>
      <MainContent imageSrc={image3} desTxt='Reliability 坚持✊' altText='Reliability alt'/>
    </div>
  )
}
