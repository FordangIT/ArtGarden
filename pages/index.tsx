import { Inter } from "next/font/google";
import BestProducts from "@/components/main/BestProducts";
import NewProducts from "@/components/main/NewProducts";
import Reviews from "@/components/main/Reviews";
import MainCarousel from "@/components/main/MainCarousel";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBest,
  updateNew,
  updateReview,
} from "@/redux/slices/selectSlice";
import { RootState } from "@/redux/store";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const selectedBest = useSelector(
    (state: RootState) => state.selected.best || ""
  );
  const selectedNew = useSelector(
    (state: RootState) => state.selected.new || ""
  );
  const selectedReview = useSelector(
    (state: RootState) => state.selected.review || ""
  );
  const handleSelectBest = (text: string) => {
    dispatch(updateBest(text));
    console.log(text, "선택한 text");
  };
  const handleSelectNew = (text: string) => {
    dispatch(updateNew(text));
    console.log(text, "선택한 text");
  };
  const handleSelectReview = (text: string) => {
    dispatch(updateReview(text));
    console.log(text, "선택한 text");
  };
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
            <div
              className={
                selectedBest === "Best공연" ? "text-main-pink" : "text-white"
              }
              onClick={() => handleSelectBest("Best공연")}
            >
              공연
            </div>
            <div
              className={
                selectedBest === "Best전시" ? "text-main-pink" : "text-white "
              }
              onClick={() => handleSelectBest("Best전시")}
            >
              전시
            </div>
            <div
              className={
                selectedBest === "Best팝업스토어"
                  ? "text-main-pink "
                  : "text-white "
              }
              onClick={() => handleSelectBest("Best팝업스토어")}
            >
              팝업스토어
            </div>
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
            <div
              className={
                selectedNew === "New공연" ? "text-main-pink" : "text-white"
              }
              onClick={() => handleSelectNew("New공연")}
            >
              공연
            </div>
            <div
              className={
                selectedNew === "New전시" ? "text-main-pink " : "text-white"
              }
              onClick={() => handleSelectNew("New전시")}
            >
              전시
            </div>
            <div
              className={
                selectedNew === "New팝업스토어"
                  ? "text-main-pink"
                  : "text-white"
              }
              onClick={() => handleSelectNew("New팝업스토어")}
            >
              팝업스토어
            </div>
          </div>
        </div>
      </main>
      <div className="bg-black py-20 z-20">
        <NewProducts />
      </div>
      <div className="bg-main-pink pt-20 pb-52 z-20 flex-col justify-center">
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
