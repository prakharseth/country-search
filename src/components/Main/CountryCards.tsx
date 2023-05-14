"use client";

import { FC } from "react";
import Cards from "@/components/Main/Cards";
import Test from './Test';
import countries from './countries.json'
import Image from "next/image";

interface CountryCardsProps {}

const CountryCards: FC<CountryCardsProps> = ({}) => {
  return (
    <div>
    <div  className="flex {lg:flex-row lg:flex-wrap} lg:grid lg:grid-cols-4 justify-between flex-col gap-6">
      {countries.map((country) => (
        <div  key={country.id}
          //   href={`/country/1`}
          className="bg-[#2B3743] rounded overflow-hidden"
        >
          <Image
            src={country.flag}
            width={320}
            height={200}
            alt="Flag Image"
          />
          <div className="flex flex-col gap-5 px-8 py-7  h-full">
            <div className="text-xl font-semibold">{country.countryname}</div>
            <div className="flex flex-col gap-1 text-lg">
              <div>
                <span>Population: </span>
                <span>{country.population}</span>
              </div>
              <div>
                <span>Region: </span>
                <span>{country.region}</span>
              </div>
              <div>
                <span>Capital: </span>
                <span>{country.capital}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CountryCards;
