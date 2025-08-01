import React from 'react'
import MainContent from '../../component/mainContent'
import image2 from '../../images/image2.jpeg'


import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Performance',
  description: 'Performance page of the application',
}

export default function Performance() {
  return (
    <div>
      <MainContent imageSrc={image2} desTxt='Performance 坚持✊' altText='Performance alt' />
    </div>
  )
}
