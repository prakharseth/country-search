import React from "react";

type Props = {
    CountryName:string
};

export default function BtnLink(props: Props) {
  return (
    <button className="flex px-4 py-1 bg-[#2B3743]  justify-center rounded">
      {props.CountryName}
    </button>
  );
}
