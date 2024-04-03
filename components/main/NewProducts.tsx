import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  Autoplay,
  Virtual,
  Pagination,
} from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

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

  const [data, setData] = useState<Performance[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/performances/new");
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-black flex-col ">
      <Swiper
        className="slider-wrapper flex"
        spaceBetween={40}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        virtual
        loop // 무한 루프 활성화
        autoplay={{ delay: 2000 }} // 자동 재생 설정
      >
        {data.map((el: Performance) => (
          <Link href={`/performances/${el.id}`} key={el.id}>
            <SwiperSlide virtualIndex={el.id} key={el.id}>
              <figure className="h-[15rem]">
                <Image src={el.img} alt="new image" width={350} height={200} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {truncateText(el.name, 10)}
                  <div className="badge badge-secondary bg-main-yellow border-none text-black ">
                    NEW
                  </div>
                </h2>
                <p>장소: {el.place}</p>
                공연 기간: {el.start}~{el.end}
                <div className="card-actions justify-end m-5">
                  <div className="badge badge-outline">{el.genre}</div>
                  <div className="badge badge-outline">{el.rank}</div>
                </div>
              </div>
            </SwiperSlide>
          </Link>
        ))}
      </Swiper>

      <div className="flex justify-end mt-12 mr-6">
        <Link href={`/performances`}>
          <div className="text-white font-bold text-2xl hover:text-main-pink">
            더 많은 NEW 공연 보러 가기
          </div>
        </Link>
      </div>
    </div>
  );
}
