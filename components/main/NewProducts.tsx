import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewProducts() {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const [data, setData] = useState<Array<any>>([]);
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
        console.error("error fetching datat", error);
      }
    };
    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 3500,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  return (
    <div className="bg-black flex-col">
      <Slider {...settings}>
        {data &&
          data.map((el) => (
            <div key={el.id} className="card h-[29rem] bg-white rounded-3xl">
              <figure className="border-2 border-white w-80 h-[18rem]">
                <Image src={el.img} alt="new image" width={400} height={100} />
              </figure>
              <div className="card-body border-x-2 border-black">
                <h2 className="card-title">
                  {truncateText(el.name, 10)}
                  <div className="badge badge-secondary bg-main-yellow border-none text-black ">
                    NEW
                  </div>
                </h2>
                가격: {el.price}원 <p>장소: {el.place}</p>
                <div className="card-actions justify-end">
                  {el.end} <div className="badge badge-outline">{el.genre}</div>
                  <div className="badge badge-outline">{el.rank}</div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
      <div className="flex justify-end mt-12 mr-6">
        <div className="text-white font-bold text-2xl hover:text-main-pink">
          더 많은 NEW 공연 보러 가기
        </div>
      </div>
    </div>
  );
}
