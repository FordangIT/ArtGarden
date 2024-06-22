import axios from "axios";
//사용자 소셜 로그인할 때 백엔드한테 id 보내기
export const postUserId = async (userId: number | string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauthLoginProcess`,
      {
        loginid: String(userId)
      },
      {
        withCredentials: true // 쿠키를 포함한 요청 설정
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

// 회원정보상세 조회
export const getMemberDetails = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/members`,
      {
        withCredentials: true // 쿠키를 포함한 요청 설정
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to get member details");
    }

    console.log("Member details retrieved successfully:", response.data);
    return response.data; // 필요한 데이터를 반환
  } catch (error) {
    console.error("Error getting member details:", error);
  }
};

// 로그아웃 요청
export const logoutMember = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/memberLogout`,
      {
        withCredentials: true // 쿠키를 포함한 요청 설정
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to log out member");
    }

    console.log("Member logged out successfully");
  } catch (error) {
    console.error("Error logging out member:", error);
  }
};

// ID 중복 확인
export const checkLoginId = async (loginId: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/chkLoginid?loginid=${loginId}`
    );

    if (response.status !== 200) {
      throw new Error("Failed to check login ID");
    }

    console.log("Login ID check completed successfully:", response.data);
    return response.data; // 필요한 데이터를 반환
  } catch (error) {
    console.error("Error checking login ID:", error);
  }
};

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

export const loginUser = async (loginInfo: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/loginProcess`,
      loginInfo,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true // 쿠키를 포함한 요청 설정
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to login");
    }

    console.log("User logged in successfully:", response.data);
    return response.data; // 필요한 데이터를 반환
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

// 회원 탈퇴
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

// 회원 가입
export const joinMember = async (memberInfo: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/join`,
      memberInfo,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (response.status !== 201) {
      throw new Error("Failed to join member");
    }

    console.log("Member joined successfully:", response.data);
    return response.data; // 필요한 데이터를 반환
  } catch (error) {
    console.error("Error joining member:", error);
  }
};
