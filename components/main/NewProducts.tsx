import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SkeletonNew from "../basic/SkeletonNew";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  Autoplay,
  Virtual,
  Pagination
} from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ReadyNew from "../basic/ReadyNew";
interface Performance {
  id: number;
  img: string;
  name: string;
  place: string;
  start: string;
  end: string;
  genre: string;
  rank: string;
}

export default function NewProducts(): JSX.Element {
  SwiperCore.use([Virtual, Navigation, Pagination, Autoplay, Scrollbar]);
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const selectedNew = useSelector(
    (state: RootState) => state.selected.new || ""
  );
  const [data, setData] = useState<Performance[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [ready, setReady] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/performances/new");
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        setReady(false);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("error fetching data", error);
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
      } catch (error) {
        console.error("error fetching datat", error);
      }
    };
    if (selectedNew === "New공연") {
      setLoading(true);
      fetchData();
    } else if (selectedNew === "New전시") {
      setLoading(true);
      fetchDataExhibition();
    } else {
      setLoading(true);
      fetchDataPopupStore();
    }
  }, [selectedNew]);

  return (
    <div className="bg-black flex-col ">
      {loading ? (
        <SkeletonNew cards={5} />
      ) : ready ? (
        <ReadyNew cards={5} />
      ) : (
        <Swiper
          className="slider-wrapper flex "
          spaceBetween={40}
          slidesPerView={5}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          pagination={{ clickable: false }}
          virtual
          loop // 무한 루프 활성화
          autoplay={{ delay: 2000 }} // 자동 재생 설정
        >
          {data.map((el: Performance) => (
            <SwiperSlide virtualIndex={el.id} key={el.id}>
              <Link href={`/performances/${el.id}`} key={el.id}>
                <div className="card ">
                  <figure className="h-80 ">
                    <Image
                      src={el.img}
                      alt="new image"
                      width={330}
                      height={100}
                      className="rounded-4xl"
                    />
                  </figure>
                  <div className="card-body text-white rounded-3xl border-b-2 pb-2">
                    <h2 className="card-title">
                      {truncateText(el.name, 10)}
                      <div className="badge badge-secondary bg-main-yellow border-none text-black ">
                        NEW
                      </div>
                    </h2>
                    <p>장소: {truncateText(el.place, 16)}</p>
                    공연 기간: {el.start}~{el.end}
                    <div className="card-actions justify-end m-5">
                      <div className="badge badge-outline">{el.genre}</div>
                      <div className="badge badge-outline">{el.rank}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="flex justify-end mt-12 mr-6">
            <Link href={`/performances`}>
              <div className="text-white font-bold text-2xl hover:text-main-pink">
                더 많은 NEW 공연 보러 가기
              </div>
            </Link>
          </div>
        </Swiper>
      )}
    </div>
  );
}
