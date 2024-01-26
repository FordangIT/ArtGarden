import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="bg-main-pink h-40 flex justify-center items-center">
        <div className="mx-80 flex w-2/3 h-16">
          <Image
            src="/logo.png"
            alt="logo of artgarden"
            width={180}
            height={20}
          ></Image>
          <div className="flex ml-10 items-center justify-between font-semibold text-xl text-white w-72">
            <div>공연</div>
            <div>전시</div>
            <div>팝업스토어</div>
          </div>
        </div>
      </div>
    </>
  );
}
