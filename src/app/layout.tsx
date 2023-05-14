/** @format */

import clsx from "clsx";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Header from "@/components/Header";

const nunito = Nunito_Sans({
  weight: "400",
  subsets: ["latin"]
});

export const metadata = {
  title: "Country Search",
  description: "Search Any Country"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx('flex flex-col gap-9 dark:bg-[#202D36]', nunito.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
