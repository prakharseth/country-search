import Image from "next/image";

import Header from "@/components/Header";
import Main from "../components/Main/Main";
import Info from "@/components/Info/Info";

export default function Home() {
  return (
    <div className="bg-white flex flex-col gap-9 pb-10 items-center h-">
      <Header />
      {/* <Main /> */}
      <Info/>
    </div>
  );
}
