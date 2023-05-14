"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Select } from "antd";


import React, { useState } from 'react'

export default function Filter() {
  const [isOpen, setIsOpen]=useState(false);
  const toggleClick=()=>setIsOpen(!isOpen);
  return (
    <div className="flex flex-col gap-1 lg:items-end">
      <button onClick={toggleClick} className="px-5 py-3 flex items-center gap-5 bg-[#2B3743] text-sm rounded justify-between w-fit">
        Filter by Region
        <RiArrowDropDownLine className="text-xl" />
      </button>
      {isOpen && <Options/>}
    </div>
  )
}



export function Options(){
  return(
  <div className="
   absolute justify-start mt-12 flex flex-col gap-3 bg-[#2B3743] text-sm p-5 rounded w-60 ">
        <div>Africa</div>
        <div>America</div>
        <div>Asia</div>
        <div>Europe</div>
        <div>Oceania</div>
      </div>
      )
}
