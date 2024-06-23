// components/ShareKakaoButton.tsx
import React, { useState, useEffect } from "react";
import { MdShare } from "react-icons/md";
import { KAKAO_TEMPLATE_ID } from "@/lib/constants/constant";
import { DetailExhibition_TYPE } from "@/pages/exhibitions/[exhibitId]";
import { PopupStore_TYPE } from "@/pages";
interface ShareProps_TYPE {
  data: ShareDataPF_TYPE | DetailExhibition_TYPE | PopupStore_TYPE;
}
interface ShareDataPF_TYPE {
  id: string;
  name: string;
  posterurl: string;
  start: string;
  end: string;
  place: string;
  genre: string;
  state: string;
  cast: string;
  runtime: string;
  age: string;
  price: string;
  story: string;
  prfstate: string;
  styurls: string[];
  relates: string;
}
const ShareKakaoButton = ({ data }: ShareProps_TYPE) => {
  const [isKakaoInitialized, setIsKakaoInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        const apiKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
        if (apiKey) {
          window.Kakao.init(apiKey);
          setIsKakaoInitialized(true);
        } else {
          console.error("Kakao API key is missing.");
        }
      } else {
        setIsKakaoInitialized(true);
      }
    }
  }, []);

  const sendKakao = () => {
    if (!isKakaoInitialized) {
      console.error("Kakao is not initialized.");
      return;
    }

    if (typeof window !== "undefined" && window.Kakao && window.Kakao.Share) {
      try {
        window.Kakao.Share.sendScrap({
          requestUrl: `${process.env.NEXT_PUBLIC_KAKAO_SHARE_URL}/${location.pathname}`,
          templateId: KAKAO_TEMPLATE_ID,
          templateArgs: {
            img1: data.posterurl,
            title: `📌` + data.name,
            description: `✨` + data.place + `✨`,
            pagePathname: location.pathname
          }
        });
      } catch (error) {
        console.error("Error sending Kakao share:", error);
      }
    }
  };

  return (
    <button onClick={sendKakao} disabled={!isKakaoInitialized}>
      <MdShare className="w-9 h-9 font-light text-black" />
    </button>
  );
};

export default ShareKakaoButton;
