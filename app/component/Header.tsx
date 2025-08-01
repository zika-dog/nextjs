"use client"

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkList = [
    { href: '/Performance', label: 'Performance' },
    { href: '/Reliability', label: 'Reliability' },
    { href: '/Scale', label: 'Scale' },
]

export default function Header() {
    const pathNmae = usePathname();
  return (
      <div className="w-full absolute text-white z-10">
          <div className="flex justify-between container mx-auto p-4">
          <div className='text-2xl font-bold'>
            <Link className='' href='/'>Home</Link>
          </div>
           <div className="flex gap-4 text-[18px] font-bold">

            {
                LinkList.map((link) => {
                    return(
                        <Link className={pathNmae === link.href ? "text-purple-500" : ""}  key={link.href} href={link.href}>{ link.label }</Link>
                    )
                })
            }
          </div>
        </div>
        </div>
  )
}
