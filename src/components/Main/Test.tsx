import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import countries from "./countries.json";

export default function Test() {
  return (
    <div>
      <CountryCard />
    </div>
  );
}


function CountryCard() {
  return (
    <div>
      {countries.map((country) => (
        <div  key={country.id}
          //   href={`/country/1`}
          className="bg-[#2B3743] rounded overflow-hidden"
        >
          <Image
            src={country.flag}
            width={332}
            height={208}
            alt="Flag Image"
          />
          <div className="flex flex-col gap-5 px-8 py-7">
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
  );
}
