import { Inter } from "next/font/google";
import BestProducts from "@/components/main/BestProducts";
import NewProducts from "@/components/main/NewProducts";
import Reviews from "@/components/main/Reviews";
import MainCarousel from "@/components/main/MainCarousel";
import { useDispatch, useSelector } from "react-redux";
import { updateBest, updateNew } from "@/redux/slices/selectSlice";
import { RootState } from "@/redux/store";
import {
  loadNew,
  loadBest,
  loadReview,
  loadNewPopup,
  loadBestPopup
} from "@/lib/loadData";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

interface Best_TYPE {
  id: string;
  name: string;
  img: string;
  date: string;
  place: string;
  genre: string;
  count: string;
}
interface New_TYPE {
  id: number;
  img: string;
  name: string;
  place: string;
  start: string;
  end: string;
  genre: string;
  rank: string;
}
interface Review_TYPE {
  name: string;
  reviewid: string;
  performid: string;
  content: string;
  rate: number;
  regdt: string;
  membierid: string;
  genre: string;
  posterurl: string;
}

interface BestPopup_TYPE {
  _id: string;
  name: string;
  img: string;
  place: string;
  date: string;
  time: string[];
  images: string[];
}
interface Performance_TYPE {
  best: Best_TYPE[];
  new: New_TYPE[];
  review: Review_TYPE[];
  newPopup: BestPopup_TYPE[];
  bestPopup: BestPopup_TYPE[];
}
export default function Home(props: Performance_TYPE) {
  useEffect(() => {
    console.log(props, "props");
  });
  const dispatch = useDispatch();
  const selectedBest = useSelector(
    (state: RootState) => state.selected.best || ""
  );
  const selectedNew = useSelector(
    (state: RootState) => state.selected.new || ""
  );
  // const selectedReview = useSelector(
  //   (state: RootState) => state.selected.review || ""
  // );
  const handleSelectBest = (text: string) => {
    dispatch(updateBest(text));
  };
  const handleSelectNew = (text: string) => {
    dispatch(updateNew(text));
  };
  // const handleSelectReview = (text: string) => {
  //   dispatch(updateReview(text));
  // };

  const bestData =
    selectedBest === "Best팝업스토어" ? props.bestPopup : props.best;

  const newData = selectedNew === "New팝업스토어" ? props.newPopup : props.new;
  return (
    <div>
      <div className="hidden lg:block">{/* <MainCarousel /> */}</div>
      <main
        className={`flex min-h-screen flex-col items-center pt-20 z-10 ${inter.className}`}
      >
        <div className="flex-col sm:flex sm:flex-row justify-center sm:justify-around items-center my-16 ">
          <div className="text- text-5xl font-extrabold py-12 sm:px-16">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-black">RANKING </span>
              <span className="text-main-pink">9</span>
            </div>
          </div>
          <div className="flex text-3xl font-bold grid-rows-3 gap-4">
            <div
              className={
                selectedBest === "Best공연" ? "text-main-pink" : "text-gray-400"
              }
              onClick={() => handleSelectBest("Best공연")}
            >
              공연
            </div>
            <div
              className={
                selectedBest === "Best전시" ? "text-main-pink" : "text-gray-400"
              }
              onClick={() => handleSelectBest("Best전시")}
            >
              전시
            </div>
            <div
              className={
                selectedBest === "Best팝업스토어"
                  ? "text-main-pink "
                  : "text-gray-400"
              }
              onClick={() => handleSelectBest("Best팝업스토어")}
            >
              팝업스토어
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <BestProducts selectedBest={selectedBest} data={bestData} />
        </div>
      </main>
      <div>
        <div className="bg-black flex-col sm:flex sm:flex-row justify-center items-center pt-12">
          <div className="text-5xl font-extrabold py-12 sm:px-16">
            <div className="flex justify-center items-center text-white">
              NEW
            </div>
          </div>
          <div className="flex text-white text-3xl font-bold grid-rows-3 gap-4">
            <div
              className={
                selectedNew === "New공연" ? "text-main-pink" : "text-gray-400"
              }
              onClick={() => handleSelectNew("New공연")}
            >
              공연
            </div>
            <div
              className={
                selectedNew === "New전시" ? "text-main-pink " : "text-gray-400"
              }
              onClick={() => handleSelectNew("New전시")}
            >
              전시
            </div>
            <div
              className={
                selectedNew === "New팝업스토어"
                  ? "text-main-pink"
                  : "text-gray-400"
              }
              onClick={() => handleSelectNew("New팝업스토어")}
            >
              팝업스토어
            </div>
          </div>
        </div>
        <div className="bg-black py-20 z-20">
          <NewProducts selectedNew={selectedNew} data={newData} />
        </div>
      </div>
      <div className="flex-col justify-center my-16 z-20">
        <div className="flex flex-col sm:flex-row justify-center items-center my-12">
          <div className="text-main-pink text-5xl font-extrabold py-12 sm:px-12">
            REVIEW
          </div>
          <div className="flex text-gray-400 text-3xl font-bold grid-rows-3 gap-4">
            <div className="hover:text-black">공연</div>
            <div className="hover:text-black">전시</div>
            <div className="hover:text-black">팝업스토어</div>
          </div>
        </div>
        <div>
          <Reviews data={props.review} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const newData = await loadNew();
  const bestData = await loadBest();
  const reviewData = await loadReview();
  const newPopup = await loadNewPopup();
  const bestPopup = await loadBestPopup();
  return {
    props: {
      best: bestData,
      new: newData,
      review: reviewData,
      newPopup: newPopup,
      bestPopup: bestPopup
    }
  };
}
