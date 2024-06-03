import { Inter } from "next/font/google";
import BestProducts from "@/components/main/BestProducts";
import NewProducts from "@/components/main/NewProducts";
import Reviews from "@/components/main/Reviews";
import MainBanner from "@/components/main/MainBanner";
import { useDispatch, useSelector } from "react-redux";
import { updateBest, updateNew } from "@/redux/slices/selectSlice";
import { RootState } from "@/redux/store";
import {
  loadNew,
  loadBest,
  loadReview,
  loadBestExhibit,
  loadNewExhibit,
  loadNewPopup,
  loadBestPopup
} from "@/lib/loadData";
const inter = Inter({ subsets: ["latin"] });

export interface Best_TYPE {
  id: string;
  name: string;
  posterurl: string;
  startdate: string;
  enddate: string;
  area: string;
  genre: string;
  count: string;
}
export interface New_TYPE {
  id: number;
  posterurl: string;
  name: string;
  area: string;
  startdate: string;
  enddate: string;
  genre: string;
  rank: string;
}
export interface BestExhibit_TYPE {
  id: string;
  name: string;
  posterurl: string;
  startdate: string;
  enddate: string;
  area: string;
  genre: string;
  exstatus: string;
}
export interface AllBestExhibit_TYPE {
  data: {
    id: string;
    name: string;
    posterurl: string;
    startdate: string;
    enddate: string;
    area: string;
    genre: string;
    exstatus: string;
  }[];
}
export interface NewExhibit_TYPE {
  id: string;
  name: string;
  posterurl: string;
  startdate: string;
  enddate: string;
  area: string;
  genre: string;
  exstatus: string;
}
export interface AllNewExhibit_TYPE {
  data: {
    id: string;
    name: string;
    posterurl: string;
    startdate: string;
    enddate: string;
    area: string;
    genre: string;
    exstatus: string;
  }[];
}
export interface Review_TYPE {
  name: string;
  reviewid: string;
  objectid: string;
  content: string;
  rate: number;
  regdt: string;
  membierid: string;
  genre: string;
  posterurl: string;
}

export interface BestPopup_TYPE {
  id: string;
  name: string;
  posterurl: string;
  area: string;
  place: string;
  startdate: string;
  enddate: string;
  time: string[];
  images: string[];
}

export interface NewPopup_TYPE {
  id: string;
  name: string;
  posterurl: string;
  area: string;
  place: string;
  startdate: string;
  enddate: string;
  date: string;
  time: string[];
  images: string[];
}
interface Performance_TYPE {
  best: Best_TYPE[];
  new: New_TYPE[];
  review: Review_TYPE[];
  bestExhibit: AllBestExhibit_TYPE;
  newExhibit: AllNewExhibit_TYPE;
  newPopup: NewPopup_TYPE[];
  bestPopup: BestPopup_TYPE[];
}
export default function Home(props: Performance_TYPE) {
  const dispatch = useDispatch();
  const selectedBest = useSelector(
    (state: RootState) => state.selected.best || ""
  );
  const selectedNew = useSelector(
    (state: RootState) => state.selected.new || ""
  );
  const handleSelectBest = (text: string) => {
    dispatch(updateBest(text));
  };
  const handleSelectNew = (text: string) => {
    dispatch(updateNew(text));
  };
  const bestData = (() => {
    switch (selectedBest) {
      case "Best공연":
        return props.best;
      case "Best전시":
        return props.bestExhibit.data;
      case "Best팝업스토어":
        return props.bestPopup;
      default:
        return props.best; // 기본값 설정 (필요 시 조정)
    }
  })();

  const newData = (() => {
    switch (selectedNew) {
      case "New공연":
        return props.new;
      case "New전시":
        return props.newExhibit.data;
      case "New팝업스토어":
        return props.newPopup;
      default:
        return props.new; // 기본값 설정 (필요 시 조정)
    }
  })();

  return (
    <div className="flex justify-center items-center">
      <div className="w-full">
        <main
          className={`flex min-h-screen flex-col items-center z-10 ${inter.className}`}
        >
          <div className="flex justify-center items-center w-full bg-black">
            <div className="w-2/3 h-[32rem] ">
              <MainBanner />
            </div>
          </div>
          <div className="flex-col sm:flex sm:flex-row justify-center sm:justify-around items-center mt-16 lg:mt-20 py-3">
            <div className="text- text-5xl font-extrabold sm:px-16">
              <div className="flex justify-center items-center gap-x-2">
                <span className="text-black">Top Picks</span>
              </div>
            </div>
            <div className="flex text-3xl font-bold grid-rows-3 gap-4">
              <div
                className={
                  selectedBest === "Best공연"
                    ? "text-main-pink"
                    : "text-gray-400"
                }
                onClick={() => handleSelectBest("Best공연")}
              >
                공연
              </div>
              <div
                className={
                  selectedBest === "Best전시"
                    ? "text-main-pink"
                    : "text-gray-400"
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
          <div className="text-xl text-gray-500 font-medium pt-2 pb-12">
            많은 사람에게 사랑받는 인기 급상승 {selectedBest}
          </div>
          <div className="flex justify-center items-center">
            <BestProducts selectedBest={selectedBest} data={bestData} />
          </div>
        </main>
        <div className="flex-col">
          <div className=" flex-col sm:flex sm:flex-row justify-center items-center pt-20 pb-3">
            <div className="text-5xl font-extrabold sm:px-16">
              <div className="flex justify-center items-center text-black">
                New Arrivals
              </div>
            </div>

            <div className="flex text-black text-3xl font-bold grid-rows-3 gap-4">
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
                  selectedNew === "New전시"
                    ? "text-main-pink "
                    : "text-gray-400"
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
          <div className="flex justify-center items-center text-xl text-gray-500 font-medium pt-2 pb-12">
            갓 공개된 따끈따끈한 {selectedNew}
          </div>
          <div className="bg-white z-20r">
            <NewProducts selectedNew={selectedNew} data={newData} />
          </div>
        </div>
        <div className="flex-col justify-center z-20 py-16">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="text-black text-5xl font-extrabold sm:px-12">
              Authentic Reviews
            </div>
          </div>
          <div className="flex justify-center items-center text-xl text-gray-500 font-medium pt-4 pb-10">
            관객들이 전하는 진솔한 후기
          </div>
          <div>
            <Reviews data={props.review} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const newData = await loadNew();
  const bestData = await loadBest();
  const reviewData = await loadReview();
  const bestExhibit = await loadBestExhibit();
  const newExhibit = await loadNewExhibit();
  const newPopup = await loadNewPopup();
  const bestPopup = await loadBestPopup();
  return {
    props: {
      best: bestData,
      new: newData,
      bestExhibit: bestExhibit,
      newExhibit: newExhibit,
      newPopup: newPopup,
      bestPopup: bestPopup,
      review: reviewData
    }
  };
}
