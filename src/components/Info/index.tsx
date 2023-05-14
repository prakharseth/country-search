/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";
import LabelValue from "./LabelValue";
import BtnLink from "./BtnLink";

type Props = {};

export default function Info({}: Props) {
  return (
    <div className="flex flex-col gap-9 dark:text-white  px-4 pb-8 lg:px-8 h-full lg:justify-between lg:h-auto">
          <Link
            href={"/"}
            className="flex gap-2 px-5 py-2 bg-[#2B3743] w-fit items-center rounded "
          >
            <MdKeyboardBackspace className="text-xl" />
            Back
          </Link>
          {/* Below */}
          <div className="flex flex-col lg:justify-between gap-8 lg:flex-row ">

          {/* <img className="h-full" src="/flags/bel.png"/> */}

            <Image
            // className="min-w-fit min-h-fit"
              src="/flags/bel.png"
              width={520}
              height={376}
              alt="Country Flag"
            />

          <div className="flex flex-col gap-8 lg:gap-6 h-fit ">
            {/* Country Heading */}
            <div className="text-2xl font-bold">Belgium</div>
            {/* ---- */}
            <div className="flex flex-col gap-9 lg:gap-16">
              <div className="flex flex-col lg:justify-between lg:flex-row gap-9 ">
                {/* Description 1*/}
                <div className="flex flex-col gap-2">
                  <LabelValue label="Native Name" value="Belgie" />
                  <LabelValue label="Population" value="800,000,000" />
                  <LabelValue label="Region" value="Europe" />
                  <LabelValue label="Sub Region" value="Western Europe" />
                  <LabelValue label="Capital" value="Brussels" />
                </div>
                {/* Description 2*/}
                <div className="flex flex-col gap-2">
                  <LabelValue label="Top Level Domain" value=".be" />
                  <LabelValue label="Currencies" value="Euro" />
                  <LabelValue label="Language" value="Dutch, French, German" />
                </div>
              </div>
              {/* Border Countries */}
              <div className=" flex flex-col gap-2 lg:flex-row lg:items-center">
                <div className="font-medium text-xl">Border Countries:</div>
                <div className="flex  w-full justify-between">
                  <BtnLink CountryName="France" />
                  <BtnLink CountryName="Germany" />
                  <BtnLink CountryName="Netherlands" />
                </div>
              
            </div></div>
          </div>
        </div>
    </div>
  );
}
