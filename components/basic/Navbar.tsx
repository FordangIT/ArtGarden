import Image from "next/image";
import Link from "next/link";
import Smallbar from "./Smallbar";
import Sidebar from "./Sidebar";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaUserAlt } from "react-icons/fa";
export default function Navbar() {
  const { data: session, status } = useSession();
  return (
    <>
      <Sidebar />
      <div className="fixed top-0 bg-main-pink flex justify-center items-center h-16 lg:h-20 w-full z-40">
        <div className="flex justify-between items-center w-2/3">
          <Link href="/" className="w-full h-full">
            <Image
              src="/logo.png"
              alt="logo of artgarden"
              width={200}
              height={40}
              className="w-36 lg:w-48"
            ></Image>
          </Link>
          <div className="lg:hidden">
            <Smallbar />
          </div>
          <div className="hidden lg:block">
            <div className="flex">
              <div className="flex items-center justify-end gap-x-4 font-semibold text-lg text-white w-72 ml-8">
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
              <div className="flex justify-center items-center">
                <div className="flex justify-around items-center bg-black w-32 h-10 border-2 border-main-yellow rounded-2xl ml-12 mr-4">
                  <div className="font-semibold text-xl text-main-yellow">
                    {session ? (
                      <button onClick={() => signOut()}>Log Out</button>
                    ) : (
                      <Link href="/auth/signin">
                        <button>Login</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              {session ? (
                <Link href="/user/saveitems">
                  <div className="flex justify-center items-center text-white text-2xl m-4">
                    <FaUserAlt />
                  </div>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
