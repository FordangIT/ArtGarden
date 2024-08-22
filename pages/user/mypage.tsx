import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import {
  getMemberDetails,
  leaveMember,
  updateMemberInfo
} from "@/lib/api/mypage";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState, useRef, useEffect } from "react";
interface MemberDetails {
  name: string;
  loginid: string;
  email: string;
  nickname: string;
}
export default function MyPage() {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const { data, error, isLoading } = useQuery<MemberDetails>(
    "memberDetails",
    getMemberDetails
  );
  const [nickname, setNickname] = useState<string>("");
  const [readOnlyStatus, setReadOnly] = useState<boolean>(true);
  const [buttonName, setButtonName] = useState<string>("변경");

  useEffect(() => {
    if (data) setNickname(data.nickname);
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-96">
        <div className="loading loading-dots loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return <div>an error occured</div>;
  }

  if (!isLoggedIn) {
    router.push(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/signin`);
  }

  const handleClick = async (loginid: string) => {
    try {
      const res = await leaveMember(loginid);
      if (res.status !== 200) {
        throw new Error("회원탈퇴가 실패하였습니다.");
      }
      console.log("회원 탈퇴 성공");
      router.push(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`);
    } catch (error) {
      console.error("회원 탈퇴 실패:", error);
      alert("회원탈퇴가 실패하였습니다. 다시 시도해 주세요.");
    }
  };

  const handleInputChange = (name: string) => {
    setNickname(name);
  };

  const handleButton = async () => {
    setReadOnly((state) => !state);
    if (buttonName === "완료") {
      setButtonName("변경");
      if (data) {
        let infos = {
          loginid: data.loginid,
          nickname: nickname
        };
        console.log(infos, "front infos");
        await updateMemberInfo(infos);
      }
    } else {
      setButtonName("완료");
    }
  };
  return (
    <>
      {data && (
        <div className="flex flex-col justify-center items-center px-6">
          <div className="text-3xl font-semibold py-20">
            {data.name}님, 환영해요.
          </div>
          <div className="border-[1px] border-gray-200 rounded-xl w-full md:w-[41rem] min-h-fit pt-5 px-8 my-10">
            <div>
              <p className="text-2xl font-semibold">계정 관리</p>
              <p className="text-lg text-gray-500 py-4">
                서비스에서 사용하는 내 계정 정보를 관리할 수 있습니다.
              </p>
            </div>
            <div className="text-lg ">
              <div className="flex flex-row py-4 border-b-[1px] border-slate-300">
                <div className="basis-1/4 font-semibold">아이디</div>
                <div className="basis-3/4 flex justify-end lg:justify-start">
                  {data.loginid}
                </div>
              </div>
              <div className="flex flex-row py-4 border-b-[1px] border-slate-300">
                <div className="basis-1/4 font-semibold">이메일</div>
                <div className="basis-3/4 flex justify-end lg:justify-start">
                  {data.email}
                </div>
              </div>
              <div className="flex flex-row py-4 border-b-[1px] border-slate-300">
                <div className="basis-1/4 font-semibold">이름</div>
                <div className="basis-3/4 flex justify-end lg:justify-start">
                  {data.name}
                </div>
              </div>
              <div className="flex flex-row py-4 border-b-[1px] border-slate-300">
                <div className="basis-1/4 font-semibold">닉네임</div>
                <div className="basis-2/4 flex justify-end lg:justify-start">
                  <input
                    type="text"
                    onChange={(e) => handleInputChange(e.target.value)}
                    value={nickname}
                    readOnly={readOnlyStatus}
                    minLength={2}
                    maxLength={10}
                    className={
                      "text-black" +
                      (readOnlyStatus
                        ? " outline-none"
                        : " outline-none border-[1px] border-slate-900")
                    }
                  />
                  <button
                    type="button"
                    className={
                      "w-20 h-20 basis-1/4 flex justify-end items-center text-sm cursor-pointer reset" +
                      (buttonName === "변경"
                        ? "bg-slate-400 text-black"
                        : "bg-blue-600 text-blue-600")
                    }
                    onClick={handleButton}
                  >
                    {buttonName}
                  </button>
                </div>
              </div>
              <div className="flex justify-end py-6 text-base underline">
                <button onClick={() => handleClick(data.loginid)}>
                  회원 탈퇴
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
