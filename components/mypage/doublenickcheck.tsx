import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkLoginNick } from "@/lib/api/userSign";

interface DoubleNickType {
  userNick: string;
  setPassNick: (nick: string) => void;
  setIsNickChecked: (checked: boolean) => void;
}

export const doubleNickCheck = async ({
  userNick,
  setPassNick,
  setIsNickChecked
}: DoubleNickType) => {
  const isValidUserNick = /^[가-힣a-zA-Z0-9]{2,10}$/.test(userNick);
  if (!userNick) {
    toast.error("닉네임 입력하세요", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
    return;
  } else if (!isValidUserNick) {
    toast.error("2~10자 한글, 영문, 숫자 형식", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
    return;
  }

  try {
    const response = await checkLoginNick(userNick);
    if (response) {
      toast.error("이미 사용 중인 닉네임입니다.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    } else {
      toast.success("사용 가능한 닉네임입니다.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
      setPassNick(userNick);
      setIsNickChecked(true);
      //  clearErrors("nickname");
    }
  } catch (error) {
    toast.warn("닉네임 중복 확인에 실패했습니다.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  }
};
