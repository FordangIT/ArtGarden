import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Autoplay 스타일 추가
import { Keyboard, Scrollbar, Autoplay } from "swiper/modules";

export default function MainBanner() {
  const images = [
    "http://www.kopis.or.kr/upload/pfmPoster/PF_PF239553_240419_104424.gif",
    "http://www.kopis.or.kr/upload/pfmPoster/PF_PF235107_240226_103835.gif",
    "http://www.kopis.or.kr/upload/pfmPoster/PF_PF238655_240404_103127.gif",
    "http://www.kopis.or.kr/upload/pfmPoster/PF_PF240728_240509_103444.gif"
  ];

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
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center w-1/2 "
          >
            <div className="relative w-full h-full flex justify-center items-center">
              {src ? (
                <Image
                  src={src}
                  alt={`main-banner-${index}`}
                  fill
                  className="w-full brightness-75 object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p>Image not available</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
