import Image from "next/image";
import { FC } from "react";
import { MdKeyboardBackspace } from "react-icons/Md";
interface InfoProps {}

const Info: FC<InfoProps> = ({}) => {
  return (
    <div className="w-full gap-9 flex flex-col bg-blue-400">
      <div className="flex flex-col px-8 w-full">
        <button className="flex gap-5 px-5 py-3 bg-[#2B3743] w-fit items-center rounded">
          <MdKeyboardBackspace className="text-xl" />
          Back
        </button>
      </div>
      <div className="flex flex-col items-center gap-5 px-8">
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          <Image
            src="/flags/bel.png"
            width={600}
            height={432}
            alt="Country Flag"
          />
          <div className="w-full flex flex-col gap-9 ">
            {/* Country Name */}
            <div className="text-2xl font-bold">Belgium</div>
            {/* About */}
            <div className="flex flex-col lg:flex-row justify-between">
                
            {/* Description */}
            <div className="flex flex-col gap-2">
              <div>
                <span>Native Name: </span>
                <span>Belgie</span>
              </div>
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
            <div className="w-full flex flex-col lg:flex-row gap-2  lg:items-center">
              <div className="font-semibold">Border Countries:</div>
              <div className="w-fill flex gap-2 text-xs">
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
};

export default Info;
