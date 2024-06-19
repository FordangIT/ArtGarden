// components/ShareKakaoButton.tsx
import React, { useEffect } from "react";
import { KAKAO_TEMPLATE_ID } from "@/lib/constants/constant";
import { MdShare } from "react-icons/md";
declare global {
  interface Window {
    Kakao: any;
  }
}
interface UrlType {
  url: string;
}
const ShareKakaoButton = ({ url }: UrlType) => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY); // 여기에 JavaScript 키를 넣어주세요.
    }
  }, []);

  const sendKakao = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: `${process.env.KAKAO_SHARE_URL}${url}`, // 여기에 실제 페이지 URL을 넣으세요.
      templateId: KAKAO_TEMPLATE_ID, // 여기에 템플릿 번호를 넣으세요.
      templateArgs: {
        THUMB:
          "https://agimage.s3.ap-northeast-2.amazonaws.com/pubao/447547966_2114396732275845_3278566807781733724.jpg", // 썸네일 이미지 주소
        TITLE: "주말에 뭐할까? Artgarden에서 다 찾았어! 🌟", // 제목
        DESC: "공연과 전시, 팝업스토어 정보를 통해 특별한 하루를 만들어보세요! 🌷" // 설명
      }
    });
  };

  return (
    <button onClick={sendKakao}>
      <MdShare className="w-9 h-9 font-light text-black" />
    </button>
  );
};

export default ShareKakaoButton;
