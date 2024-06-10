import { Inter } from "next/font/google";
import BestProducts from "@/components/main/BestProducts";
import NewProducts from "@/components/main/NewProducts";
import Reviews from "@/components/main/Reviews";
import MainBanner from "@/components/main/MainBanner";
import { useDispatch, useSelector } from "react-redux";
import { updateBest, updateNew } from "@/redux/slices/selectSlice";
import { RootState } from "@/redux/store";
import { StaticImageData } from "next/image";
import {
  loadNew,
  loadBest,
  loadReview,
  loadBestExhibit,
  loadNewExhibit,
  loadNewPopup,
  loadBestPopup,
  loadMainBannerPopup
} from "@/lib/loadData";
const inter = Inter({ subsets: ["latin"] });
export interface Performance_TYPE {
  id: string;
  _id?: string;
  name: string;
  startdate: string;
  enddate: string;
  place: string;
  price: string;
  posterurl: string;
  genre: string;
  status: string;
  visitcnt: number;
  scrapcnt: number;
  area: string;
}

export interface Exhibition_TYPE {
  id: string;
  _id?: string;
  name: string;
  startdate: string;
  enddate: string;
  genre: string;
  area: string;
  place: string;
  status: string;
  posterurl: string;
  visitcnt: number;
  scrapcnt: number;
}

export interface PopupStore_TYPE {
  id?: string;
  _id: string;
  name: string;
  startdate: string;
  enddate: string;
  genre: string;
  area: string;
  place: string;
  status: string;
  link: string;
  time: string[];
  posterurl: string | StaticImageData;
  posterarray: string[];
  script: string;
}
export interface AllPerformance_TYPE {
  pageNo: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
  hasNext: boolean;
  data: Performance_TYPE[];
}
export interface AllExhibition_TYPE {
  pageNo: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
  hasNext: boolean;
  data: Exhibition_TYPE[];
}

export interface AllPopupStore_TYPE {
  pageNo?: number;
  pageSize?: number;
  totalPages?: number;
  totalElements?: number;
  hasNext?: boolean;
  data: PopupStore_TYPE[];
}
export interface Review_TYPE {
  name: string;
  content: string;
  rate: number;
  membierid: string;
  reviewid: string;
  objectid: string;
  genre: string;
  regdt: string;
  regid: null;
  posterurl: string;
  updid: string;
  upddt: string;
}
export interface AllReview_TYPE {
  pageNo?: number;
  pageSize?: number;
  totalPages?: number;
  totalElements?: number;
  hasNext?: boolean;
  data: Review_TYPE[];
}
export interface MainBannerPopupStore_TYPE {
  _id: string;
  name: string;
  startdate: string;
  enddate: string;
  area: string;
  posterurl: string | StaticImageData;
}

interface AllData_TYPE {
  best: Performance_TYPE[];
  new: Performance_TYPE[];
  bestExhibit: Exhibition_TYPE[];
  newExhibit: Exhibition_TYPE[];
  bestPopup: PopupStore_TYPE[];
  newPopup: PopupStore_TYPE[];
  review: Review_TYPE[];
  mainBanner: MainBannerPopupStore_TYPE[];
}
export default function Home(props: AllData_TYPE) {
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
  const bestData: (Performance_TYPE | Exhibition_TYPE | PopupStore_TYPE)[] =
    (() => {
      switch (selectedBest) {
        case "Best공연":
          return props.best;
        case "Best전시":
          return props.bestExhibit;
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
        return props.newExhibit;
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
          <div className="flex justify-center items-center w-full bg-white my-8">
            <div className="w-2/3 h-[30rem] ">
              <MainBanner data={props.mainBanner} />
            </div>
          </div>
          <div className="flex-col sm:flex sm:flex-row justify-center sm:justify-around items-center mt-8 lg:mt-8 py-3">
            <div className="text- text-5xl font-extrabold sm:px-16">
              <div className="flex justify-center items-center gap-x-2">
                <span className="text-black">Top Picks</span>
              </div>
            </div>
            <div className="flex text-3xl font-bold grid-rows-3 gap-4">
              <div
                className={
                  selectedBest === "Best공연"
                    ? "text-main-pink cursor-pointer"
                    : "text-gray-400 cursor-pointer"
                }
                onClick={() => handleSelectBest("Best공연")}
              >
                공연
              </div>
              <div
                className={
                  selectedBest === "Best전시"
                    ? "text-main-pink cursor-pointer"
                    : "text-gray-400 cursor-pointer"
                }
                onClick={() => handleSelectBest("Best전시")}
              >
                전시
              </div>
              <div
                className={
                  selectedBest === "Best팝업스토어"
                    ? "text-main-pink cursor-pointer"
                    : "text-gray-400 cursor-pointer"
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
                  selectedNew === "New공연"
                    ? "text-main-pink cursor-pointer"
                    : "text-gray-400 cursor-pointer"
                }
                onClick={() => handleSelectNew("New공연")}
              >
                공연
              </div>
              <div
                className={
                  selectedNew === "New전시"
                    ? "text-main-pink cursor-pointer"
                    : "text-gray-400 cursor-pointer"
                }
                onClick={() => handleSelectNew("New전시")}
              >
                전시
              </div>
              <div
                className={
                  selectedNew === "New팝업스토어"
                    ? "text-main-pink cursor-pointer"
                    : "text-gray-400 cursor-pointer"
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
  const bestData = await loadBest();
  const newData = await loadNew();
  const bestExhibit = await loadBestExhibit();
  const newExhibit = await loadNewExhibit();
  const bestPopup = await loadBestPopup();
  const newPopup = await loadNewPopup();
  const reviewData = await loadReview();
  const mainBanner = await loadMainBannerPopup();
  return {
    props: {
      best: bestData,
      new: newData.datalist,
      bestExhibit: bestExhibit.datalist,
      newExhibit: newExhibit.datalist,
      bestPopup: bestPopup,
      newPopup: newPopup,
      review: reviewData.data,
      mainBanner: mainBanner
    }
  };
}
