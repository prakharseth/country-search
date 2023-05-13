import { FC } from "react";
import Search from "./Search";
import CountryCards from "./CountryCards";
import Filter from "./Filter";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  return (
    <main className="flex flex-col items-center gap-36 px-5 w-full ">
      <div className="flex flex-col lg:flex-row gap-9 lg:justify-between w-full">
        <Search />
        <Filter />
      </div>
      <CountryCards />
    </main>
  );
};

export default Main;
