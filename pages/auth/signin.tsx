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
    <div>
      <div>
        {session ? (
          <>
            {session.user?.name}님 반갑습니다
            <button onClick={() => signOut()}>sign out</button>
          </>
        ) : (
          <>
            <button
              className="w-full transform rounded-md tracking-wide bg-gray-400 text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              onClick={() =>
                signIn("google", {
                  redirect: true,
                  callbackUrl: "/"
                })
              }
            >
              google login
            </button>
            <button
              className="w-64 transform h-11"
              onClick={() =>
                signIn("kakao", {
                  redirect: true,
                  callbackUrl: "/"
                })
              }
            >
              <Image
                src="/kakao_login.png"
                alt="카카오 로그인"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
