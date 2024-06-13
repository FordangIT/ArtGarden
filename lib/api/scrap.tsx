import axios from "axios";

interface ScrapData {
  objectid: string;
}

//사용자의 찜 목록 가져오기
export const getScrap = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/myScraps?page=1&size=30`
    );

    if (response.status !== 200) {
      throw new Error("Failed to get scraps");
    }

    console.log("get scraps successfully");
  } catch (error) {
    console.error("Error get scraps:", error);
  }
};
//사용자 찜 목록 추가하기
export const postScrap = async (item: string) => {
  try {
    console.log(typeof item, "item확인");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/scraps`,
      {
        objectid: item
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to post scrap data");
    }

    console.log("Scrap data posted successfully");
  } catch (error) {
    const err = error as Error;
    console.error("Error posting scrap data:", err.message);
  }
};
