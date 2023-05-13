import { FC } from "react";
import Cards from "@/components/Main/Cards";

interface CountryCardsProps {}

const CountryCards: FC<CountryCardsProps> = ({}) => {
  return (
    <div className="flex lg:grid lg:grid-flow-row grid-cols-4 flex-col gap-10">
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
