import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "react-query";
import {
  getMemberDetails,
  leaveMember,
  updateMemberInfo
} from "@/lib/api/mypage";
import { logoutMember } from "@/lib/api/userSign";
import { logOut } from "@/redux/slices/checkLoginSlice";
import { signOut } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface MemberDetails {
  name: string;
  loginid: string;
  email: string;
  nickname: string;
}
interface UpdateUserNickname {
  nickname: string;
}

const schema = yup.object().shape({
  nickname: yup
    .string()
    .matches(
      /^[가-힣a-zA-Z0-9]{2,10}$/,
      "- 별명은 2~10자 이내의 한글, 영문, 숫자만 사용 가능합니다."
    )
    .required("- 별명은 필수입니다.")
});

export default function MyPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const [readOnlyStatus, setReadOnly] = useState<boolean>(true);
  const [buttonName, setButtonName] = useState<string>("변경");

  const { data, error, isLoading } = useQuery<MemberDetails>(
    "memberDetails",
    getMemberDetails,
    {
      onSuccess: (memberData) => {
        reset(memberData);
      }
    }
  );
  const [nickname, setNickName] = useState(data?.nickname);
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    setError,
    setFocus,
    clearErrors,
    formState: { errors }
  } = useForm<UpdateUserNickname>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: { nickname }
  });

  useEffect(() => {
    if (data) {
      clearErrors();
      setNickName(data.nickname);
    }
  }, [data, clearErrors]);

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

  const handleChange = (value: string) => {
    setNickName(value);
  };

  const handleClick = async (loginid: string) => {
    try {
      const res = await leaveMember(loginid);

      if (res.success) {
        alert("회원탈퇴 되었습니다.");
        logoutMember();
        signOut();
        dispatch(logOut());
        router.push(`${process.env.NEXT_PUBLIC_FRONTEND_URL}`);
      } else {
        throw new Error("회원 탈퇴 실패");
      }
    } catch (error) {
      console.error("회원 탈퇴 실패:", error);
      alert("회원탈퇴가 실패하였습니다. 다시 시도해 주세요.");
    }
  };

  const handleButton = async () => {
    if (buttonName === "완료") {
      const newNickName = getValues("nickname");
      try {
        await updateMemberInfo({ loginid: data?.loginid, newNickName });
        queryClient.invalidateQueries("memberDetails");
        setReadOnly(true);
        setButtonName("변경");
      } catch (error) {
        setError("nickname", {
          type: "manual",
          message: "닉네임 변경에 실패했습니다. 다시 시도해 주세요."
        });
        setFocus("nickname");
      }
    } else {
      setReadOnly(false);
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
              <div className="flex flex-row justify-center items-center py-2 border-b-[1px] border-slate-300">
                <div className="basis-1/4 font-semibold">닉네임</div>
                <div className="basis-3/4 flex justify-end lg:justify-start items-center">
                  <form onSubmit={handleSubmit(handleButton)}>
                    <input
                      {...register("nickname", {
                        pattern: {
                          value: /^[가-힣a-zA-Z0-9]{2,10}$/,
                          message: "2~10자 한글, 영문, 숫자 형식"
                        }
                      })}
                      readOnly={readOnlyStatus}
                      type="text"
                      className={`w-full max-w-[11rem] py-2 mr-2 ${
                        readOnlyStatus
                          ? "outline-none bg-white"
                          : "border-slate-900"
                      } text-black`}
                    />
                    <button
                      type="submit"
                      className={`px-3 py-2 text-sm cursor-pointer h-full ${
                        buttonName === "변경"
                          ? "bg-slate-100 text-black"
                          : "bg-blue-600 text-white font-medium"
                      }`}
                      onClick={handleButton}
                    >
                      {buttonName}
                    </button>
                    {errors?.nickname ? (
                      <p>{errors.nickname?.message}</p>
                    ) : null}
                  </form>
                </div>
              </div>
              {errors.nickname && (
                <p className="text-red-500 text-sm pt-5">
                  {errors.nickname.message}
                </p>
              )}
              <div className="flex justify-end py-4 text-base underline">
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
