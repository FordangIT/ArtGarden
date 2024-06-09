import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Autoplay 스타일 추가
import { Keyboard, Scrollbar, Autoplay } from "swiper/modules";
import { MainBannerPopupStore_TYPE } from "@/pages";
import { FaMapMarkerAlt } from "react-icons/fa";

export interface MainBanner_TYPE {
  data: MainBannerPopupStore_TYPE[];
}
export default function MainBanner({ data }: MainBanner_TYPE) {
  return (
    <div className="h-full w-full">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2
          }
        }}
        scrollbar={true}
        autoplay={{
          delay: 2000, // 3초마다 슬라이드
          disableOnInteraction: false // 사용자가 슬라이드 클릭 등으로 상호작용해도 자동 슬라이딩 계속됨
        }}
        modules={[Keyboard, Scrollbar, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {data.map((el: MainBannerPopupStore_TYPE) => (
          <SwiperSlide
            key={el._id}
            className="flex justify-center items-center w-1/2 "
          >
            <div className="relative w-full h-full flex justify-center items-center">
              {el.posterurl ? (
                <Image
                  src={el.posterurl}
                  alt={`main-banner-${el._id}`}
                  fill
                  className="w-full brightness-75 object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p>Image not available</p>
                </div>
              )}
              <div className="absolute bottom-8 left-7 flex-col text-white font-semibold">
                <div className="text-2xl">{el.name}</div>
                <div className="flex items-center text-md">
                  <FaMapMarkerAlt className="mr-2" />
                  지역: {el.area}
                </div>
                <div className="text-md">
                  {el.startdate} - {el.enddate}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
