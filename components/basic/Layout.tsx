import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainCarousel from "./MainCarousel";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      <MainCarousel />
      <div className="flex justify-center items-center">
        <main className=" w-2/3 min-h bg-black">{children}</main>
      </div>
      <Footer />
    </>
  );
}
