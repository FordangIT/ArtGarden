import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { CiUser, CiLock } from "react-icons/ci";
import Link from "next/link";
import { loginUser } from "@/lib/api/userSign";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logIn, logOut } from "@/redux/slices/checkLoginSlice";
import { useRouter } from "next/router";
// Yup을 사용한 폼 유효성 검사 스키마 정의
const schema = yup.object().shape({
  userId: yup
    .string()
    .matches(
      /^[a-z0-9]{5,20}$/,
      "- 아이디는 5~20자 이내의 영문 소문자와 숫자만 사용 가능합니다."
    )
    .required("- 아이디는 필수입니다."),
  password: yup.string().required("비밀번호는 필수입니다.")
});

type FormData = {
  userId: string;
  password: string;
};

export default function SignIn() {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const loginInfo = {
        loginid: data.userId,
        password: data.password
      };
      const result = await loginUser(loginInfo);
      if (result) {
        router.push("/");
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 중 오류가 발생했습니다.", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-96 min-h-screen">
        <div className="flex flex-col">
          <div className="py-20">
            <div className="flex justify-center items-center py-4">
              <h1 className="text-center text-black text-2xl font-semibold leading-relaxed">
                쉽게 가입하고
                <br />
                간편하게 로그인하세요.
              </h1>
            </div>
            <div className="">
              <h2 className="text-center tracking-wide text-sm font-semibold text-[#909093]">
                문화에서 오는 풍요로움, Artgarden
              </h2>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4"
          >
            <div className="border border-gray-300 rounded-md shadow-sm">
              <div className="flex mt-1 p-2 w-full border-b border-gray-300">
                <label className="flex items-center justify-center text-gray-700 p-1">
                  <CiUser className="w-6 h-6 text-slate-400" />
                </label>
                <input
                  type="text"
                  {...register("userId")}
                  placeholder="아이디"
                  className="block w-full ml-2 font-medium text-slate-700 p-1"
                />
              </div>

              <div className="flex mt-1 p-2 w-full border-b border-gray-300">
                <label className="flex items-center justify-center text-gray-700 p-1">
                  <CiLock className="w-6 h-6 text-slate-400" />
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="비밀번호"
                  className="block w-full ml-2"
                />
              </div>
            </div>
            <div>
              {errors.userId && (
                <p className="text-red-500 text-sm ">{errors.userId.message}</p>
              )}
              {errors.password && (
                <p className="text-red-500 text-sm ">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-4 mt-4 justify-center items-center">
              <button
                type="submit"
                className="rounded-xl w-full h-[3.1rem] bg-main-pink"
              >
                <div className="flex justify-center items-center">
                  <span className="font-semibold text-lg text-white">
                    로그인
                  </span>
                </div>
              </button>
              <Link
                href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/signup`}
              >
                <div className="text-sm underline underline-offset-1">
                  회원가입
                </div>
              </Link>
              <div className="my-10 flex flex-col gap-y-4 w-full">
                <button
                  type="button"
                  className="rounded-xl w-full h-[3.1rem] bg-white border-[1px] border-gray-40"
                  onClick={() =>
                    signIn("google", {
                      redirect: true,
                      callbackUrl: "/"
                    })
                  }
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src="/google_login.png"
                      alt="구글 로그인 아이콘"
                      width={100}
                      height={100}
                      className="w-5 h-5 mr-2"
                    />
                    <span className="font-semibold text-sm text-black">
                      구글 계정으로 계속하기
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  className="rounded-xl w-full h-[3.1rem] bg-[#FFEB00]"
                  onClick={() =>
                    signIn("kakao", {
                      redirect: true,
                      callbackUrl: "/"
                    })
                  }
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src="/kakao_login.png"
                      alt="카카오 로그인 아이콘"
                      width={100}
                      height={100}
                      className="w-5 h-5 mr-2"
                    />
                    <span className="font-semibold text-sm text-black">
                      카카오 계정으로 계속하기
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
