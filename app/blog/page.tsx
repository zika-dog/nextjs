
import React from 'react'
import ListCom from '@/component/listCom'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Blog List',
}
export default function page() {
  return (
   <ListCom />
  )
}
