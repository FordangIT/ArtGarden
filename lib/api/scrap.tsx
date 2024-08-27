import axios from "axios";

interface ScrapData {
  objectid: string;
}

export const getScrapYN = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/scrapYN?objectid=${id}`,
      {
        withCredentials: true // 쿠키를 포함한 요청 설정
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to get scraps");
    }
    return response.data;
  } catch (error) {
    console.error("Error getting scraps:", error);
    throw error;
  }
};
// 사용자의 찜 목록 가져오기
export const getScrap = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/myScraps?page=1&size=8`,
      {
        withCredentials: true // 쿠키를 포함한 요청 설정
      }
    );
    if (response.status !== 200) {
      throw new Error("Failed to get scraps");
    }
    return response.data;
  } catch (error) {
    console.error("Error getting scraps:", error);
    throw error;
  }
};

// 사용자 찜 목록 추가하고, 삭제하기
export const postScrap = async (item: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/scraps`,
      {
        objectid: item
      },
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true // 쿠키를 포함한 요청 설정
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to post scrap data");
    }
  } catch (error) {
    const err = error as Error;
    console.error("Error posting scrap data:", err.message);
  }
};
