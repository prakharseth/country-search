"use client";

import { FC } from "react";
import Cards from "@/components/Main/Cards";

interface CountryCardsProps {}

const CountryCards: FC<CountryCardsProps> = ({}) => {
  return (
    <div className="flex {lg:flex-row lg:flex-wrap} lg:grid lg:grid-cols-4 justify-between flex-col gap-6">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default CountryCards;
