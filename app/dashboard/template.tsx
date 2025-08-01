"use client"
import React from 'react'
import { useState } from 'react';

export default function template({children} : {children: React.ReactNode}) {
    const [ count, setCount ] = useState(0);

  return (
    <div className="p-4 border-2 border-purple-black rounded-lg  mx-auto mt-[20px]">
        <button className="bg-black text-[#fff] p-2 round-md" onClick={() => {
          setCount(count +1);
        }}>count+</button>
         <span>
            数字
          </span> {count}
      { children }
    </div>
  )
}
