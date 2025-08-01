"use client"
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


const linkList = [
  { name: "about", path: "/dashboard/about" },
  { name: "setting", path: "/dashboard/setting" },
]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [ count, setCount ] = useState(0);
  const pathname = usePathname();
  
  return (
      <div className="p-4 border-2 border-purple-black rounded-lg w-1/2 mx-auto">
        <h2>dashboard layout</h2>
        <div className="flex gap-4 text-lg font-bold">
           {
            linkList.map((item) => {
              return(
                <Link key={item.path} href={item.path} className={ pathname === item.path ? 'text-purple-500' : '' }>{item.name}</Link>
              )
            }) 
           }
        </div>

        <button className="bg-black text-[#fff] p-2 round-md" onClick={() => {
          setCount(count +1);
        }}>count+</button>
         <span>
            数字
          </span> {count}
        {children}
      </div>
   
  );
}
