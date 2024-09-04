import axios from "axios";
interface OauthLoginData_TYPE {
  loginData: {
    loginid: string;
    name: string;
    email: string;
    nickname: string;
  };
}

//사용자가 로그인 중인지 확인하는 api
export const checkLogin = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/chkLogin`,
      {
        withCredentials: true // 쿠키를 포함한 요청 설정
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("로그인 상태를 확인하는 도중 오류가 발생했습니다.");
  }
};

//사용자 소셜 로그인할 때 백엔드한테 id 보내기
export const postUserId = async (
  loginData: OauthLoginData_TYPE["loginData"]
) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauthLoginProcess`,
      loginData,
      {
        withCredentials: true // 쿠키를 포함한 요청 설정
      }
    );
    if (response.status !== 200) {
      throw new Error("Failed to post user ID");
    }
    return response;
  } catch (error) {
    console.error("Error posting user ID:", error);
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

    return response.data; // 필요한 데이터를 반환
  } catch (error) {
    console.error("Error checking login ID:", error);
  }
};
//닉네임 중복확인
export const checkLoginNick = async (loginNick: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/chkNickname?nickname=${loginNick}`
    );

    return response.data; // 필요한 데이터를 반환
  } catch (error) {
    console.error("Error checking login ID:", error);
  }
};

//login 유저
export const loginUser = async (loginInfo: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/loginProcess`,
      loginInfo,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to login");
    }
    return response.data; // 필요한 데이터를 반환
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

// 회원 가입
export const joinMember = async (memberInfo: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/join`,
      memberInfo
    );
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, error: "Failed to join member" };
    }
  } catch (error) {
    console.error("error joining memeber", error);
    return { success: false, error: error };
  }
};
