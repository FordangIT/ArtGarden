import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getMemberDetails, leaveMember } from "@/lib/api/mypage";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { checkLogin } from "@/lib/api/userSign";
interface MemberDetails {
  name: string;
  loginid: string;
  email: string;
  nickname: string;
}
export default function MyPage() {
  const router = useRouter();
  const { data: session } = useSession();
  //const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const [usualSession, setUsualSession] = useState(false);
  useEffect(() => {
    const checkLoginState = async () => {
      let res = await checkLogin();
      setUsualSession(res);
    };
    checkLoginState();
  }, []);

  const { data, error, isLoading } = useQuery<MemberDetails>(
    "memberDetails",
    getMemberDetails
  );

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

  if (!session && !usualSession) {
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
                <div className="basis-3/4 flex justify-end lg:justify-start">
                  {data.nickname}
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
