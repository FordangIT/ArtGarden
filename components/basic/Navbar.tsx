import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
      <div className="bg-main-pink h-40 flex justify-center items-center">
        <div className="mx-80 flex w-2/3 h-16 items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo of artgarden"
              width={180}
              height={20}
            ></Image>
          </Link>
          <div className="flex ml-10 mr-6 items-center justify-between font-semibold text-xl text-white w-72">
            <Link href="/performances">
              <div className="hover:text-main-yellow">공연</div>
            </Link>
            <Link href="exhibitions">
              <div className="hover:text-main-yellow">전시</div>
            </Link>
            <Link href="popupstores">
              <div className="hover:text-main-yellow">팝업스토어</div>
            </Link>
          </div>
          <div className="flex justify-around items-center ml-auto bg-black w-36 h-12 border-2 border-main-yellow rounded-2xl">
            <div className="font-semibold text-xl text-main-yellow">Login</div>
            <div className="bg-main-yellow rounded-full text-lg">
              <FaArrowDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
