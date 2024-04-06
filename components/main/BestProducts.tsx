import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import SkeletonBest from "../basic/SkeletonBest";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ReadyBest from "../basic/ReadyBest";
const BestProducts = () => {
  const selectedBest = useSelector(
    (state: RootState) => state.selected.best || ""
  );
  useEffect(() => {
    console.log(selectedBest);
  }, [selectedBest]);
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/performances/best");
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        setReady(false);
        setData(result);
        setLoading(false);
        console.log("공연 데이터 호출");
      } catch (error) {
        console.error("error fetching datat", error);
      }
    };
    const fetchDataExhibition = async () => {
      try {
        setReady(true);
        setLoading(false);
      } catch (error) {
        console.error("error fetching datat", error);
      }
    };
    const fetchDataPopupStore = async () => {
      try {
        setReady(true);
        setLoading(false);
        console.log("팝업스토어 데이터 호출");
      } catch (error) {
        console.error("error fetching datat", error);
      }
    };
    if (selectedBest === "Best공연") {
      setLoading(true);
      fetchData();
    } else if (selectedBest === "Best전시") {
      setLoading(true);
      fetchDataExhibition();
    } else {
      setLoading(true);
      fetchDataPopupStore();
    }
  }, [selectedBest]);

  return (
    <div className="flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {loading ? (
          <SkeletonBest cards={8} />
        ) : ready ? (
          <ReadyBest cards={8} />
        ) : (
          data.map((el) => (
            <Link href={`/performances/${el.id}`} key={el.id}>
              <div className="card w-[26rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white  transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100">
                <figure>
                  <Image src={el.img} alt="공연사진" width={420} height={380} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {truncateText(el.name, 16)}
                    <div className="badge bg-main-pink text-white">BEST</div>
                  </h2>
                  공연기간: {el.date} <p>지역: {el.place}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{el.genre}</div>
                    <div className="badge badge-outline">
                      공연횟수: {el.count}번
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className="flex justify-end mt-8">
        <Link href={`/performances`}>
          <div className="text-white font-bold text-2xl hover:text-main-pink">
            더 많은 BEST 공연 보러 가기
          </div>
        </Link>
      </div>
    </div>
  );
};
export default BestProducts;
