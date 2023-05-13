/** @format */
"use client";

import React from "react";

import { MdDarkMode } from "react-icons/md";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex justify-between w-full p-5 dark:bg-[#2B3743] dark:text-white ">
      <div className="font-extrabold text-[18px]">Where in the World?</div>
      <div className="flex items-center gap-2">
        <MdDarkMode />
        <div>Dark Mode</div>
      </div>
    </div>
  );
}

export function Sum() {
  return <div className="text-black">hello</div>;
}
