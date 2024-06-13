import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { truncateText } from "@/lib/components/TruncateText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Performance_TYPE, Exhibition_TYPE, PopupStore_TYPE } from "@/pages";

interface NewProducts_TYPE {
  selectedNew: string;
  data: (Performance_TYPE | Exhibition_TYPE | PopupStore_TYPE)[];
}

const linkUrl = (selectedNew: string) => {
  switch (selectedNew) {
    case "New공연":
      return "/performances";
    case "New전시":
      return "/exhibitions";
    case "New팝업스토어":
      return "/popupstores";
    default:
      return "/performances"; // 기본값 설정 (필요 시 조정)
  }
};

const NewProducts: React.FC<NewProducts_TYPE> = ({ selectedNew, data }) => {
  const word = selectedNew.match(/[가-힣]+/g)?.[0];
  SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full md:w-4/5">
        <Swiper
          className="slider-wrapper flex justify-center items-center"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          pagination={{ clickable: false }}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
        >
          {data.map((el) => {
            const id = el.id || el._id;
            return (
              <SwiperSlide
                key={id}
                className="flex justify-center items-center"
              >
                <Link href={`${linkUrl(selectedNew)}/${id}`} key={id}>
                  <div className="card w-44 h-64 sm:w-52 sm:h-96 lg:w-80 lg:h-[27rem] border-b-2 shadow-lg ">
                    <figure className="bg-black">
                      {el.posterurl ? (
                        <Image
                          src={el.posterurl}
                          alt="new image"
                          width={300}
                          height={200}
                          className="rounded-4xl w-full "
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <p>Image not available</p>
                        </div>
                      )}
                    </figure>
                    <div className="card-body text-black rounded-3xl p-3 sm:p-6">
                      <h2 className="card-title text-sm sm:text-xl">
                        {truncateText(el.name, 9)}
                        <div className="badge badge-secondary bg-main-yellow border-none text-black text-xs sm:text-lg">
                          NEW
                        </div>
                      </h2>
                      <p className="text-xs sm:text-lg">
                        장소 : {truncateText(el.place, 13)}
                      </p>
                      <p className="text-xs sm:text-lg">마감 : {el.enddate}</p>
                      <div className="card-actions flex flex-col items-end">
                        <div className="badge badge-outline sm:my-1 text-xs sm:text-lg">
                          {el.genre}
                        </div>
                        <div className="badge badge-outline text-xs sm:text-lg">
                          {el.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
          <div className="flex justify-end mt-12 mr-6">
            <Link href={`${linkUrl(selectedNew)}`}>
              <div className="text-black font-bold text-xl hover:text-main-pink">
                {`더 많은 ${word} 보러 가기`}
              </div>
            </Link>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default NewProducts;
