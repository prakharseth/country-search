import Search from "./Search";
import CountryCards from "./CountryCards";
import Filter from "./Filter";


export default function index() {
  return (
    <main className="flex flex-col items-center gap-9 px-5 w-full dark:bg-[#202D36] ">
      <div className="flex flex-col lg:flex-row gap-9 lg:justify-between w-full">
        <Search />
        <Filter />
      </div>
      <CountryCards />
    </main>
  );
};


