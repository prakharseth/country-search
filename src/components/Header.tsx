/** @format */
"use client";

import Link from "next/link";
import React from "react";

import { BsMoonFill } from "react-icons/bs";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex justify-between w-full p-5 dark:bg-[#2B3743] dark:text-white ">
      <Link href="/" className="font-semibold text-[18px]">Where in the World?</Link>
      <div className="flex items-center gap-2">
        <BsMoonFill />
        <div>Dark Mode</div>
      </div>
    </div>
  );
}
// BsSunFill
// BsMoonFill

export function Sum() {
  return <div className="text-black">hello</div>;
}
