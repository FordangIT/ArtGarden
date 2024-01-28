import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

interface CarouselItem {
  info: string;
  title: string;
  name: string;
  description: string;
  style: string;
}

interface ItemProps {
  item: CarouselItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <Paper>
      <div className="h-[27rem]">
        <div className={item.style}>
          <div className="w-2/3 bg-white">
            <div className="">{item.title}</div>
            <h2 className="">{item.name}</h2>
            <p className="">{item.description}</p>
            <Button className="CheckButton">모든 {item.info} 보러 가기</Button>
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
      name: "당신의 하루가 즐거웠으면 좋겠어",
      description: "다양하게 찾아보는 공연 정보!",
      style: "bg-[#FBFBF3] h-full flex justify-center",
    },
    {
      info: "전시회",
      title: "#데이트",
      name: "애인이랑 어디갈까",
      description: "내 여자친구가 좋아하는 전시회 여기 다 있다!",
      style: "bg-[#f6f4d2] h-full flex justify-center",
    },
    {
      info: "팝업스토어",
      title: "#HOT Place",
      name: "HOT 트렌드는 팝업스토어라며?",
      description: "뒤쳐지지 않는 방법 ArtGarden",
      style: "bg-[#edede9] h-full flex justify-center",
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
