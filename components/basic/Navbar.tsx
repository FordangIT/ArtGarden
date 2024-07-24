import Image from "next/image";
import Link from "next/link";
import Smallbar from "./Smallbar";
import Sidebar from "./Sidebar";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { checkLogin } from "@/lib/api/userSign";
export default function Navbar() {
  const { data: session, status } = useSession();
  const [selected, setSelected] = useState("");
  const [usualSession, setUsualSession] = useState(false);
  const handleSelect = (menu: string) => {
    setSelected(menu);
  };
  useEffect(() => {
    console.log("hi");
    let res = checkLogin();
    console.log(res, "navbar res");
  }, []);
  const handleLogout = () => {
    signOut();
  };
  return (
    <>
      <Sidebar />
      <div className="fixed top-0 bg-main-pink flex justify-between lg:justify-center items-center h-16 lg:h-20 w-full z-40">
        <div className="flex justify-between items-center w-full mx-5 lg:w-2/3">
          <Link href="/" className="w-36 h-full">
            <Image
              src="/logo.png"
              alt="logo of artgarden"
              width={200}
              height={40}
              className="w-full lg:w-48"
              onClick={() => handleSelect("logo")}
            />
          </Link>
          <div className="lg:hidden">
            <Smallbar />
          </div>
          <div className="hidden lg:block">
            <div className="flex">
              <div className="flex items-center justify-end gap-x-4 font-semibold text-lg text-white w-72 ml-8">
                <Link href="/performances">
                  <div
                    onClick={() => handleSelect("performances")}
                    className={`hover:text-main-yellow ${
                      selected === "performances" ? "text-main-yellow" : ""
                    }`}
                  >
                    공연
                  </div>
                </Link>
                <Link href="/exhibitions">
                  <div
                    onClick={() => handleSelect("exhibitions")}
                    className={`hover:text-main-yellow ${
                      selected === "exhibitions" ? "text-main-yellow" : ""
                    }`}
                  >
                    전시
                  </div>
                </Link>
                <Link href="/popupstores">
                  <div
                    onClick={() => handleSelect("popupstores")}
                    className={`hover:text-main-yellow ${
                      selected === "popupstores" ? "text-main-yellow" : ""
                    }`}
                  >
                    팝업스토어
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-around items-center bg-black w-32 h-10 border-2 border-main-yellow rounded-2xl ml-12 mr-4">
                  <div className="font-semibold text-xl text-main-yellow">
                    {session ? (
                      <button onClick={handleLogout}>Log Out</button>
                    ) : (
                      <Link href="/auth/signin">
                        <button>Login</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Link href="/user/saveitems">
                  <div className="relative group flex justify-center items-center text-white text-2xl ml-2 h-8">
                    <FaRegHeart />
                    <div className="absolute top-full opacity-0 group-hover:opacity-100 bg-black text-white text-xs transition-opacity duration-300 px-3 py-1">
                      <div className="flex justify-center items-center">찜</div>
                    </div>
                  </div>
                </Link>
                <Link href="/user/mypage">
                  <div className="relative group flex justify-center items-center text-white text-2xl w-16 h-8">
                    <FaRegUser />
                    <div className="absolute top-full opacity-0 group-hover:opacity-100 bg-black text-white text-xs mb-1 transition-opacity duration-300 px-1 py-1">
                      마이페이지
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
