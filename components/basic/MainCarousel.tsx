import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Image from "next/image";

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
      <div className="h-[27rem]">
        <div className={item.style}>
          <div className="w-2/3 relative">
            <div className={item.titleStyle}>{item.title}</div>
            <div className={item.nameStyle}>{item.name}</div>
            <div className={item.descriptionStyle}>{item.description}</div>
            <Button className={item.buttonStyle}>
              모든 {item.info} 보러 가기
            </Button>
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
        "flex justify-center items-center bg-[#21FE02] rounded-md w-28 h-9 text-lg font-semibold text-white absolute top-24",
      name: "당신의 하루가 즐거웠으면 하는 간절한 마음으로🙏",
      nameStyle: "text-white w-96 text-4xl absolute top-40 font-extrabold",
      description: "다양하게 찾아보는 공연 정보!",
      descriptionStyle: "text-white w-96 text-2xl absolute top-72 font-bold",
      style: "bg-black h-full flex justify-center",
      image: "/updates.gif",
      width: 400,
      height: 400,
      position: "absolute top-8 right-8",
      buttonStyle: "CheckButton text-main-yellow absolute bottom-2 left-60",
    },
    {
      info: "전시회",
      title: "#데이트",
      name: "애인이랑 어디갈까",
      description: "내 여자친구가 좋아하는 전시회 여기 다 있다!",
      style: "bg-[#AFAFAF] h-full flex justify-center",
      image: "/post.gif",
      width: 300,
      height: 300,
      position: "absolute top-0",
    },
    {
      info: "팝업스토어",
      title: "#HOT Place",
      name: "HOT 트렌드는 팝업스토어라며?",
      description: "뒤쳐지지 않는 방법 ArtGarden",
      style: "bg-[#F0EFF3] h-full flex justify-center",
      image: "/insta.gif",
      width: 300,
      height: 300,
      position: "absolute top-0",
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
          marginTop: "50px",
          textAlign: "right",
          bottom: "0",
          top: "unset",
        },
      }}
      NextIcon=">" // Change the "inside" of the next button to "next"
      PrevIcon="<"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default MainCarousel;
