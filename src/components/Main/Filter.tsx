"use client";

import { FC } from "react";
import { RiArrowDropDownLine } from "react-icons/Ri";

interface FilterProps {}

const Filter: FC<FilterProps> = ({}) => {
  return (
    <div className="flex flex-col gap-1 lg:items-end">
      <div className=" px-5 py-3 flex items-center gap-5 bg-[#2B3743] text-sm rounded justify-between w-fit">
        Filter by Region
        <RiArrowDropDownLine className="text-xl" />
      </div>
      
      <div className="absolute justify-start mt-12 flex flex-col gap-3 bg-[#2B3743] text-sm p-5 rounded w-60 ">
        <div>Africa</div>
        <div>America</div>
        <div>Asia</div>
        <div>Europe</div>
        <div>Oceania</div>
      </div>
    </div>
  );
};

export default Filter;
