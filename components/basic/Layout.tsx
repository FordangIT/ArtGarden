import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainBanner from "../main/MainBanner";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex-col justify-center items-center">
      <Navbar />
      <div className="flex justify-center items-center bg-black mt-16 lg:mt-20">
        <div className="flex justify-center items-center w-2/3 h-[32rem]">
          <div className="w-full h-full ">
            <MainBanner />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <main className="w-full sm:w-4/5 min-h">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
