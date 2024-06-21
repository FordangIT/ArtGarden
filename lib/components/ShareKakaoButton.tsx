// components/ShareKakaoButton.tsx
import React, { useEffect } from "react";
import { MdShare } from "react-icons/md";
interface UrlType {
  url: string;
}
const ShareKakaoButton = ({ url }: UrlType) => {
  const buildUrl = (path: string) => {
    return `${process.env.NEXT_PUBLIC_KAKAO_SHARE_URL}${path}`;
  };
  const sendKakao = () => {
    if (typeof window === "undefined") return;
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "주말에 뭐할까? Artgarden에서 다 찾았어! 🌟",
        description:
          "공연과 전시, 팝업스토어 정보를 통해 특별한 하루를 만들어보세요! 🌷",
        imageUrl:
          "https://agimage.s3.ap-northeast-2.amazonaws.com/pubao/447547966_2114396732275845_3278566807781733724.jpg",
        link: {
          mobileWebUrl: buildUrl(url),
          webUrl: buildUrl(url)
        }
      },
      social: {
        likeCount: 10,
        commentCount: 5,
        sharedCount: 2
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: buildUrl(url),
            webUrl: buildUrl(url)
          }
        }
      ]
    });
  };

  return (
    <button onClick={sendKakao}>
      <MdShare className="w-9 h-9 font-light text-black" />
    </button>
  );
};

export default ShareKakaoButton;
