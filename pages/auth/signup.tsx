import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CiUser, CiLock, CiMail } from "react-icons/ci";
import { checkLoginId, joinMember } from "@/lib/api/userSign";
import { useRouter } from "next/router";
interface SignupFormValues {
  userId: string;
  password: string;
  name: string;
  nickname: string;
  email: string;
}

const schema = yup.object().shape({
  userId: yup
    .string()
    .matches(
      /^[a-z0-9]{5,20}$/,
      "- 아이디는 5~20자 이내의 영문 소문자와 숫자만 사용 가능합니다."
    )
    .required("- 아이디는 필수입니다."),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$~!@%*#^?&()\-_=+])[A-Za-z\d$~!@%*#^?&()\-_=+]{8,16}$/,
      "- 비밀번호는 8~16자 이내로 영문 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다."
    )
    .required("비밀번호는 필수입니다."),
  name: yup
    .string()
    .matches(
      /^[가-힣a-zA-Z]{1,30}$/,
      "- 이름은 1~30자 이내의 영문 또는 한글로 입력해주세요."
    )
    .required("- 이름은 필수입니다."),
  nickname: yup
    .string()
    .matches(
      /^[가-힣a-zA-Z0-9]{2,10}$/,
      "- 별명은 2~10자 이내의 한글, 영문, 숫자만 사용 가능합니다."
    )
    .required("- 별명은 필수입니다."),
  email: yup
    .string()
    .email("- 유효한 이메일을 입력해주세요.")
    .required("- 이메일은 필수입니다.")
});

const Signup: React.FC = () => {
  const [isIdChecked, setIsIdChecked] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<SignupFormValues>({
    resolver: yupResolver(schema)
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    if (!isIdChecked) {
      alert("아이디 중복 확인을 해주세요.");
      return;
    }
    try {
      const response = await joinMember({
        loginid: data.userId,
        password: data.password,
        name: data.name,
        nickname: data.nickname,
        email: data.email
      });
      alert("회원가입 성공!");
      router.push(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/signin`);
    } catch (error) {
      alert("회원가입 실패! 다시 시도해 주세요.");
      console.error("회원가입 중 에러 발생:", error);
    }
  };
  const handleIdCheck = async () => {
    const userId = getValues("userId");
    if (!userId) {
      alert("아이디를 입력하세요.");
      return;
    }
    try {
      const response = await checkLoginId(userId);
      if (response.data) {
        alert("이미 사용 중인 아이디입니다.");
      } else {
        alert("사용 가능한 아이디입니다.");
        setIsIdChecked(true);
      }
    } catch (error) {
      console.error("아이디 중복 확인 중 에러 발생:", error);
      alert("아이디 중복 확인에 실패했습니다.");
    }
  };
  const onSubmitButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSubmit(onSubmit)();
  };
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="bg-white p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          회원가입
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="border border-gray-300 rounded-md shadow-sm">
            <div className="flex mt-1 p-2 w-full border-b border-gray-300">
              <label className="flex items-center justify-center text-gray-700 p-1">
                <CiUser className="w-6 h-6 text-slate-400" />
              </label>
              <input
                type="text"
                {...register("userId")}
                placeholder="아이디"
                className=" block w-full ml-2 font-medium text-slate-700 p-1"
              />
              <button onClick={handleIdCheck} className="text-sm w-20">
                중복 확인
              </button>
            </div>

            <div className="flex mt-1 p-2 w-full border-b border-gray-300">
              <label className="flex items-center justify-center text-gray-700 p-1">
                <CiLock className="w-6 h-6 text-slate-400" />
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="비밀번호"
                className=" block w-full ml-2"
              />
            </div>
            <div className="flex mt-1 p-2 w-full border-b border-gray-300">
              <label className="flex items-center justify-center text-gray-700 p-1">
                <CiUser className="w-6 h-6 text-slate-400" />
              </label>
              <input
                type="text"
                {...register("nickname")}
                placeholder="별명"
                className="block w-full ml-2 font-medium text-slate-700 p-1"
              />
            </div>
            <div className="flex mt-1 p-2 w-full border-b border-gray-300">
              <label className="flex items-center justify-center text-gray-700 p-1">
                <CiUser className="w-6 h-6 text-slate-400" />
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="이름"
                className="block w-full ml-2 font-medium text-slate-700 p-1"
              />
            </div>
            <div className="flex mt-1 p-2 w-full ">
              <label className="flex items-center justify-center text-gray-700 p-1">
                <CiMail className="w-6 h-6 text-slate-400" />
              </label>
              <input
                type="text"
                {...register("email")}
                placeholder="이메일 주소"
                className="block w-full ml-2"
              />
            </div>
          </div>
          <div className="text-sm font-thin">
            {errors.userId && (
              <p className="text-red-500">{errors.userId.message}</p>
            )}
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            {errors.nickname && (
              <p className="text-red-500">{errors.nickname.message}</p>
            )}
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            onClick={onSubmitButtonClick}
            className="w-full py-3 px-4 bg-main-pink font-semibold text-white rounded-md"
          >
            승인 요청
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
