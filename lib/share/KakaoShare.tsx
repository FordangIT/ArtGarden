const KakaoShare = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(javascript key);
    }

    kakao.Link.sendDefault({
      objectType: "feed", 
      content: {
        title: "제목입니다",
        description: "설명란입니다",
        imageUrl:
          "https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png",
        link: {
          mobileWebUrl: "https://www.naver.com",
          webUrl: "https://www.google.com",
        },
      },
      buttons: [
        {
          title: "자세히 보러 가기",
          link: {
            mobileWebUrl: "https://www.naver.com",
            webUrl: "https://www.google.com",
          },
        },
      ],
    });
  }
};