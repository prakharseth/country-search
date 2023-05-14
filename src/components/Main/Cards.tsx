"use client";

import Image from "next/image";
import Link from "next/link";
interface CardsProps {}

export default function Cards() {
  return (
    <Link href={`/country/1`} className="bg-[#2B3743] rounded overflow-hidden">
      <Image src="/flags/ind.png" width={332} height={208} alt="Flag Image" />
      <div className="flex flex-col gap-5 px-8 py-7">
        <div className="text-xl font-semibold">India</div>
        <div className="flex flex-col gap-1 text-lg">
          <div>
            <span>Population: </span>
            <span>800,000,000</span>
          </div>
          <div>
            <span>Region: </span>
            <span>India</span>
          </div>
          <div>
            <span>Capital: </span>
            <span>New Delhi</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
