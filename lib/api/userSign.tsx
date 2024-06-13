import axios from "axios";
//사용자 소셜 로그인할 때 백엔드한테 id 보내기
export const postUserId = async (userId: number | string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauthLoginProcess`,
      {
        userId: String(userId)
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to post user ID");
    }

    console.log("User ID posted successfully");
  } catch (error) {
    console.error("Error posting user ID:", error);
  }
};
