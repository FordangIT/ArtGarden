import { Inter } from "next/font/google";
import BestProducts from "@/components/main/BestProducts";
import NewProducts from "@/components/main/NewProducts";
import Reviews from "@/components/main/Reviews";
import MainCarousel from "@/components/main/MainCarousel";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBest,
  updateNew,
  updateReview
} from "@/redux/slices/selectSlice";
import { RootState } from "@/redux/store";
import { loadNew, loadBest } from "@/lib/loadData";
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
interface Performance_TYPE {
  bestData: Best_TYPE[];
  newData: New_TYPE[];
}
export default function Home(props: Performance_TYPE) {
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
  };
  const handleSelectNew = (text: string) => {
    dispatch(updateNew(text));
  };
  const handleSelectReview = (text: string) => {
    dispatch(updateReview(text));
  };
  return (
    <>
      <MainCarousel />
      <main
        className={`flex min-h-screen flex-col items-center bg-black pt-20 z-10 ${inter.className}`}
      >
        <div className="flex-col sm:flex sm:flex-row justify-center sm:justify-around items-center my-16 ">
          <div className="text-main-pink text-5xl font-extrabold py-12 sm:px-16">
            <div className="flex justify-center items-center ">RANKING</div>
          </div>
          <div className="flex text-white text-3xl font-bold grid-rows-3 gap-4">
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
          <BestProducts data={props.bestData} />
        </div>
        <div className="flex-col sm:flex sm:flex-row justify-center sm:justify-around items-center">
          <div className="text-main-pink text-5xl font-extrabold py-12 sm:px-16">
            <div className="flex justify-center items-center ">NEW</div>
          </div>
          <div className="flex text-white text-3xl font-bold grid-rows-3 gap-4">
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
        <NewProducts data={props.newData} />
      </div>
      <div className="bg-main-pink z-20 flex-col justify-center py-20">
        <div className="flex flex-col sm:flex-row justify-center items-center my-16">
          <div className="text-white text-5xl font-extrabold py-12 sm:px-16">
            REVIEW
          </div>
          <div className="flex text-white text-3xl font-bold grid-rows-3 gap-4">
            <div className="hover:text-black">공연</div>
            <div className="hover:text-black">전시</div>
            <div className="hover:text-black">팝업스토어</div>
          </div>
        </div>
        <div>
          <Reviews />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const newData = await loadNew();
  const bestData = await loadBest();
  return { props: { bestData, newData } };
}
