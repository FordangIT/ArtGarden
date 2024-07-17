import axios from "axios";

// 회원정보상세 조회
export const getMemberDetails = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/members`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true // 쿠키를 포함한 요청 설정
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to get member details");
    }

    console.log("Member details retrieved successfully:");
    return response.data; // 필요한 데이터를 반환
  } catch (error) {
    console.error("Error getting member details:", error);
  }
};

//회원정보 수정
export const updateMemberInfo = async (memberInfo: any) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/members`,
      memberInfo,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true // 쿠키를 포함한 요청 설정
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to update member info");
    }

    console.log("Member info updated successfully:", response.data);
    return response.data; // 필요한 데이터를 반환
  } catch (error) {
    console.error("Error updating member info:", error);
  }
};

//회원 탈퇴
export const leaveMember = async (loginid: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/leaveId`,
      { loginid: loginid },
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true // 쿠키를 포함한 요청 설정
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to leave member");
    }

    console.log("Member left successfully:", response.data);
    return response.data; // 필요한 데이터를 반환
  } catch (error) {
    console.error("Error leaving member:", error);
  }
};
