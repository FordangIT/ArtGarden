import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
interface CarouselItem {
  info: string;
  title: string;
  titleStyle: string;
  name: string;
  nameStyle: string;
  description: string;
  descriptionStyle: string;
  style: string;
  image: string;
  width: number;
  height: number;
  position: string;
  buttonStyle: string;
}

interface ItemProps {
  item: CarouselItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <Paper>
      <div className="h-[28rem]">
        <div className={item.style}>
          <div className="w-2/3 relative">
            <div className={item.titleStyle}>{item.title}</div>
            <div className={item.nameStyle}>{item.name}</div>
            <div className={item.descriptionStyle}>{item.description}</div>
            <Link href={`/performances`}>
              <Button className={item.buttonStyle}>
                모든 {item.info} 보러 가기
              </Button>
            </Link>

            <Image
              src={item.image}
              width={item.width}
              height={item.height}
              alt="Picture of the author"
              className={item.position}
            ></Image>
          </div>
        </div>
      </div>
    </Paper>
  );
};

const MainCarousel: React.FC = () => {
  var items = [
    {
      info: "공연",
      title: "UPDATE",
      titleStyle:
        "flex justify-center items-center bg-[#21FE02] rounded-md w-28 h-9 text-lg font-semibold text-white absolute top-20 z-20",
      name: "당신의 하루가 즐거웠으면 하는 간절한 마음으로🙏",
      nameStyle: "text-white w-96 text-4xl absolute top-40 font-extrabold z-20",
      description: "다양하게 찾아보는 공연 정보!",
      descriptionStyle:
        "text-white w-96 text-2xl absolute top-72 font-bold z-20",
      style: "bg-black h-full flex justify-center",
      image: "/updates.gif",
      width: 400,
      height: 400,
      position: "absolute top-8 right-8",
      buttonStyle:
        "CheckButton text-main-yellow absolute bottom-2 left-60 z-20",
    },
    {
      info: "전시회",
      title: "#데이트",
      titleStyle:
        "flex justify-center items-center bg-[#F76B0D] rounded-md w-28 h-9 text-lg font-semibold text-white absolute top-20 z-20",
      name: "데이트하기 딱! 좋은 장소 손쉽게 구하기 📷",
      nameStyle: "text-black w-96 text-4xl absolute top-40 font-extrabold z-20",
      description: "사진찍기 딱 좋은 전시회!",
      descriptionStyle:
        "text-black w-96 text-2xl absolute top-72 font-bold z-20",
      style: "bg-[#F3EAD6] h-full flex justify-center",
      image: "/hotstuff.gif",
      width: 400,
      height: 400,
      position: "absolute top-8 right-8",
      buttonStyle: "CheckButton text-[#F76B0D] absolute bottom-2 left-60 z-20",
    },
    {
      info: "팝업스토어",
      title: "#HOT Place",
      titleStyle:
        "flex justify-center items-center bg-main-pink rounded-md w-32 h-9 text-lg font-semibold text-white absolute top-20 z-20",
      name: "요즘 HOT 트렌드 총집합 POPUP STORE 🎉",
      nameStyle: "text-black w-96 text-4xl absolute top-40 font-extrabold z-20",
      description: "오감을 자극하는 팝업스토어!",
      descriptionStyle:
        "text-black w-96 text-2xl absolute top-72 font-bold z-20",
      style: "bg-[#F0EFF3] h-full flex justify-center",
      image: "/insta.gif",
      width: 380,
      height: 380,
      position: "absolute top-8 right-8",
      buttonStyle: "CheckButton text-main-pink absolute bottom-2 left-60 z-20",
    },
  ];

  return (
    <Carousel
      fullHeightHover={true} // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          width: "60px",
          height: "60px",
          backgroundColor: "#D73D55",
          borderRadius: "full",
        },
      }}
      navButtonsWrapperProps={{
        // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          marginTop: "30px",
          textAlign: "right",
          bottom: "0",
          top: "unset",
        },
      }}
      NextIcon={<FaArrowRight />}
      PrevIcon={<FaArrowLeft />}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default MainCarousel;
