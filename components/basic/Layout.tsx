import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex-col justify-center items-center ">
      <Navbar />
      <div className="flex justify-center items-center mt-16 lg:mt-20 ">
        <main className="w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
