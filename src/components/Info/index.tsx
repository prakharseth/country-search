/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/Md";
import LabelValue from "./LabelValue";

type Props = {};

export default function Info({}: Props) {
  return (
    <div className="flex flex-col w-full gap-9">
      <div className="flex flex-col w-full px-8">
        <Link
          href={"/"}
          className="flex gap-5 px-5 py-3 bg-[#2B3743] w-fit items-center rounded"
        >
          <MdKeyboardBackspace className="text-xl" />
          Back
        </Link>
      </div>
      <div className="flex flex-col items-center gap-5 px-8">
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          <Image
            src="/flags/bel.png"
            width={600}
            height={432}
            alt="Country Flag"
          />
          <div className="flex flex-col w-full gap-9 ">
            {/* Country Name */}
            <div className="text-2xl font-bold">Belgium</div>
            {/* About */}
            <div className="flex flex-col justify-between lg:flex-row">
              {/* Description */}
              <div className="flex flex-col gap-2">
                {/* <div>
                  <span>Native Name: </span>
                  <span>Belgie</span>
                </div> */}
                <LabelValue label="Native Name" value="Belgie" />
                <div>
                  <span>Population: </span>
                  <span>800,000,000</span>
                </div>
                <div>
                  <span>Region: </span>
                  <span>Europe</span>
                </div>
                <div>
                  <span>Sub Region: </span>
                  <span>Western Europe</span>
                </div>
                <div>
                  <span>Capital: </span>
                  <span>Brussels</span>
                </div>
              </div>
              {/* Description */}
              <div className="flex flex-col gap-2">
                <div>
                  <span>Top Level Domain: </span>
                  <span>.be</span>
                </div>
                <div>
                  <span>Currencies: </span>
                  <span>Euro</span>
                </div>
                <div>
                  <span>Language: </span>
                  <span>Dutch, French, German</span>
                </div>
              </div>
            </div>
            {/* Border Countries */}
            <div className="flex flex-col w-full gap-2 lg:flex-row lg:items-center">
              <div className="font-semibold">Border Countries:</div>
              <div className="flex gap-2 text-xs w-fill">
                <button className="flex px-5 py-2 bg-[#2B3743] w-full  justify-center ">
                  France
                </button>
                <button className="flex px-5 py-2 bg-[#2B3743] w-full  justify-center">
                  Germany
                </button>
                <button className="flex px-5 py-2 bg-[#2B3743] w-full  justify-center">
                  Netherlands
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
