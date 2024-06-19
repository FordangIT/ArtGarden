import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface SignupFormValues {
  userId: string;
  password: string;
  name: string;
  gender: "M" | "W";
  birthdate: string;
  phoneNumber: string;
  email: string;
  nickname: string;
  address1: string;
  address2: string;
  address3: string;
}

const schema = yup.object().shape({
  userId: yup
    .string()
    .matches(
      /^[a-z0-9]{5,20}$/,
      "아이디는 5~20자 이내의 영문 소문자와 숫자만 사용 가능합니다."
    )
    .required("아이디는 필수입니다."),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$~!@%*#^?&()\-_=+])[A-Za-z\d$~!@%*#^?&()\-_=+]{8,16}$/,
      "비밀번호는 8~16자 이내로 영문 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다."
    )
    .required("비밀번호는 필수입니다."),
  name: yup
    .string()
    .matches(
      /^[가-힣a-zA-Z]{1,30}$/,
      "이름은 1~30자 이내의 영문 또는 한글로 입력해주세요."
    )
    .required("이름은 필수입니다."),
  gender: yup
    .string()
    .oneOf(["M", "W"], "성별은 M(남자) 또는 W(여자)만 가능합니다.")
    .required("성별은 필수입니다."),
  birthdate: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "생년월일은 YYYY-MM-DD 형식이어야 합니다.")
    .required("생년월일은 필수입니다."),
  phoneNumber: yup
    .string()
    .matches(
      /^\d{3}-\d{4}-\d{4}$|^\d{3}-\d{3}-\d{4}$/,
      "연락처는 nnn-nnnn-nnnn 또는 nnn-nnn-nnnn 형식이어야 합니다."
    )
    .required("연락처는 필수입니다."),
  email: yup
    .string()
    .email("유효한 이메일을 입력해주세요.")
    .required("이메일은 필수입니다."),
  nickname: yup
    .string()
    .matches(
      /^[가-힣a-zA-Z0-9]{2,10}$/,
      "별명은 2~10자 이내의 한글, 영문, 숫자만 사용 가능합니다."
    )
    .required("별명은 필수입니다."),
  address1: yup.string().required("주소1은 필수입니다."),
  address2: yup.string().required("주소2는 필수입니다."),
  address3: yup.string().required("주소3은 필수입니다.")
});

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupFormValues>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    alert("회원가입 성공!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          회원가입
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <div className="flex mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm">
              <label className="block text-gray-700">아이콘</label>
              <input
                type="text"
                {...register("userId")}
                placeholder="아이디"
                className=" block w-full "
              />
            </div>

            <div className="flex mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm">
              <label className="block text-gray-700">아이콘</label>
              <input
                type="password"
                {...register("password")}
                placeholder="비밀번호"
                className=" block w-full"
              />
            </div>
            <div className="flex mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm">
              <label className="block text-gray-700">아이콘</label>
              <input
                type="text"
                {...register("email")}
                placeholder="이메일 주소"
                className="block w-full"
              />
            </div>
          </div>
          <div>
            {errors.userId && (
              <p className="text-red-500">{errors.userId.message}</p>
            )}
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">이름</label>
            <input
              type="text"
              {...register("name")}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">성별</label>
            <select
              {...register("gender")}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">선택하세요</option>
              <option value="M">남자</option>
              <option value="W">여자</option>
            </select>
            {errors.gender && (
              <p className="text-red-500">{errors.gender.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">생년월일</label>
            <input
              type="text"
              {...register("birthdate")}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.birthdate && (
              <p className="text-red-500">{errors.birthdate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">연락처</label>
            <input
              type="text"
              {...register("phoneNumber")}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">별명</label>
            <input
              type="text"
              {...register("nickname")}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.nickname && (
              <p className="text-red-500">{errors.nickname.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">주소1</label>
            <input
              type="text"
              {...register("address1")}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.address1 && (
              <p className="text-red-500">{errors.address1.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
