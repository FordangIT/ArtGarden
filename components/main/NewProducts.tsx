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
import { time } from "console";
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

interface NewPopup_TYPE {
  _id: string;
  name: string;
  img: string;
  place: string;
  date: string;
  time: string[];
  images: string[];
}

interface NewProducts_TYPE {
  selectedNew: string;
  data: (New_TYPE | NewPopup_TYPE)[];
}

const isTypeNew = (item: New_TYPE | NewPopup_TYPE): item is New_TYPE => {
  return (item as New_TYPE).id !== undefined;
};

const NewProducts: React.FC<NewProducts_TYPE> = ({ selectedNew, data }) => {
  SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="bg-black flex-col ">
      <Swiper
        className="slider-wrapper flex "
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        pagination={{ clickable: false }}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
      >
        {data.map((el) => (
          <SwiperSlide key={isTypeNew(el) ? el.id : el._id}>
            <Link href={`/performances/${isTypeNew(el) ? el.id : el._id}`}>
              <div className="card w-80">
                <figure className="bg-white h-96 md:h-80">
                  <Image
                    src={el.img}
                    alt="new image"
                    width={300}
                    height={200}
                    className="rounded-4xl w-full "
                  />
                </figure>
                <div className="card-body text-white rounded-3xl border-b-2 pb-2">
                  <h2 className="card-title text-2xl sm:text-xl">
                    {truncateText(el.name, 9)}
                    <div className="badge badge-secondary bg-main-yellow border-none text-black ">
                      NEW
                    </div>
                  </h2>
                  <p className="text-lg sm:text-base ">
                    장소 : {truncateText(el.place, 13)}
                  </p>
                  {isTypeNew(el) ? (
                    <p className="text-lg sm:text-base">
                      공연 기간: {el.start}~{el.end}
                    </p>
                  ) : (
                    <p className="text-lg sm:text-base">
                      공연 기간 : {el.date}
                    </p>
                  )}

                  <div className="card-actions flex flex-col m-5 items-end ">
                    <div className="badge badge-outline my-1">
                      {isTypeNew(el) ? el.genre : el.time[0]}
                    </div>
                    <div className="badge badge-outline">
                      {isTypeNew(el) ? el.genre : el.time[1]}
                    </div>
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
    </div>
  );
};

export default NewProducts;
