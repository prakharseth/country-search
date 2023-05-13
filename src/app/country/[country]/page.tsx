/** @format */

import React from "react";
import Info  from "@ui/Info";

type CountryDetailType = {
  params?: { country: string };
  searchParams?: {};
};

export default function CountryDetail(props: CountryDetailType) {
  console.log("props", props);
  console.log("params", props.params?.country);

  return (
    <div>
      <Info />
    </div>
  );
}
