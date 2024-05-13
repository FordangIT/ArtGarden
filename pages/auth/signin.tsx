import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
export default function SignIn() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) {
    return <div>Loading...</div>;
  }
  // const handleKakao = async () => {
  //   const result = await signIn("kakao", {
  //     redirect: true,
  //     callbackUrl: "/auth/signin"
  //   });
  // };
  return (
    <div className="flex justify-center">
      <div className="w-96 min-h-screen">
        {session ? (
          <>
            {session.user?.name}님 반갑습니다
            <button onClick={() => signOut()}>sign out</button>
          </>
        ) : (
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
            <div className="flex flex-col gap-y-4">
              <button
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
              <button
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
