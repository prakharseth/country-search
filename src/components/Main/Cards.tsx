import { FC } from "react";
import Image from "next/image";
interface CardsProps {}

const Cards: FC<CardsProps> = ({}) => {
  return (
    <div className="bg-[#2B3743] rounded overflow-hidden">
      <img src="/flags/ind.png" width="auto" height="auto" alt="Flag" />
      <div className="flex flex-col gap-5 px-8 py-7">
        <div className="text-xl font-bold">India</div>
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
    </div>
  );
};

export default Cards;
