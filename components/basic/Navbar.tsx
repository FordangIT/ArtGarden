import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import Smallbar from "./Smallbar";
export default function Navbar() {
  return (
    <>
      <div className="bg-main-pink flex justify-center items-center h-40">
        <div className="flex justify-between items-center w-2/3">
          <Link href="/" className="w-full h-full">
            <Image
              src="/logo.png"
              alt="logo of artgarden"
              width={200}
              height={40}
              className="w-48"
            ></Image>
          </Link>

          <div className="lg:hidden">
            <Smallbar />
          </div>
          <div className="hidden lg:block">
            <div className="flex">
              <div className="flex items-center justify-between font-semibold text-2xl text-white w-72 ml-8">
                <Link href="/performances">
                  <div className="hover:text-main-yellow ">공연</div>
                </Link>
                <Link href="exhibitions">
                  <div className="hover:text-main-yellow ">전시</div>
                </Link>
                <Link href="popupstores">
                  <div className="hover:text-main-yellow">팝업스토어</div>
                </Link>
              </div>
              <div className="flex justify-around items-center bg-black w-36 h-12 border-2 border-main-yellow rounded-2xl ml-12">
                <div className="font-semibold text-xl text-main-yellow">
                  Login
                </div>
                <div className="bg-main-yellow rounded-full text-lg">
                  <FaArrowDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
