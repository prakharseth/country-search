import { FC } from "react";
import { MdDarkMode } from "react-icons/Md";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="flex justify-between w-full p-5 bg-[#2B3743]">
      <div className="font-extrabold text-[18px]">Where in the World?</div>
      <div className="flex items-center gap-2">
        <MdDarkMode />
        <div>Dark Mode</div>
      </div>
    </div>
  );
};

export default Header;
