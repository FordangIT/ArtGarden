import React from "react";
import Slider from "react-slick";

export default function NewProducts() {
  const data = [
    {
      id: 1,
      name: "제목입니당",
      img: "https://picsum.photos/420/300",
      end: "2023년 12월 3일",
      price: "37,000",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 2,
      name: "이름입니당",
      img: "https://picsum.photos/420/300",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 3,
      name: "이름입니당",
      img: "https://picsum.photos/420/300",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 4,
      name: "이름입니당",
      img: "https://picsum.photos/420/300",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 5,
      name: "이름입니당",
      img: "https://picsum.photos/420/300",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 6,
      name: "이름입니당",
      img: "https://picsum.photos/420/300",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 7,
      name: "이름입니당",
      img: "https://picsum.photos/420/300",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 8,
      name: "이름입니당",
      img: "https://picsum.photos/420/300",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
  ];
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
    <div className="bg-black">
      <Slider {...settings}>
        {data &&
          data.map((el) => (
            <div key={el.id} className="card h-[29rem] bg-white rounded-3xl">
              <figure className="border-2 border-white ">
                <img src={el.img} alt="Shoes" />
              </figure>
              <div className="card-body border-x-2 border-black">
                <h2 className="card-title">
                  {el.name}
                  <div className="badge badge-secondary bg-main-yellow border-none text-black">
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
    </div>
  );
}
