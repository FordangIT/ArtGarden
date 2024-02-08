import { Inter } from "next/font/google";
import BestProducts from "@/components/main/BestProducts";
import NewProducts from "@/components/main/NewProducts";
import Reviews from "@/components/main/Reviews";
import MainCarousel from "@/components/main/MainCarousel";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainCarousel />
      <main
        className={`flex min-h-screen flex-col items-center bg-black pt-20 z-10 ${inter.className}`}
      >
        <div className="flex">
          <div className="text-main-pink text-5xl py-10 pl-20 font-extrabold w-80">
            RANKING
          </div>
          <div className="flex text-white text-3xl py-12 px-16 font-bold grid-rows-3 gap-4">
            <div className="hover:text-main-pink w-20">공연</div>
            <div className="hover:text-main-pink w-20">전시</div>
            <div className="hover:text-main-pink w-36">팝업스토어</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <BestProducts />
        </div>
        <div className="flex mt-20">
          <div className="text-white text-5xl pt-10 pl-20 font-extrabold w-80">
            NEW
          </div>
          <div className="flex text-white text-3xl pt-12 px-16 font-bold grid-rows-3 gap-4">
            <div className="hover:text-main-pink w-20">공연</div>
            <div className="hover:text-main-pink w-20">전시</div>
            <div className="hover:text-main-pink w-36">팝업스토어</div>
          </div>
        </div>
      </main>
      <div className="bg-black py-20 z-20">
        <NewProducts />
      </div>
      <div className="bg-main-pink py-20 z-20 flex-col justify-center">
        <div className="flex justify-center items-center my-20">
          <div className="text-white text-5xl pt-10 pl-20 font-extrabold w-80">
            REVIEW
          </div>
          <div className="flex text-white text-3xl pt-12 px-16 font-bold grid-rows-3 gap-4">
            <div className="hover:text-black w-20">공연</div>
            <div className="hover:text-black w-20">전시</div>
            <div className="hover:text-black w-36">팝업스토어</div>
          </div>
        </div>
        <div>
          <Reviews />
        </div>
      </div>
    </>
  );
}
