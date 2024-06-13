import NextAuth, { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

// NextAuth 설정
const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      // session.user 객체가 정의되어 있는지 확인
      if (session.user) {
        session.user.id = token.sub as string; // token.sub에서 사용자 ID를 가져와 session.user.id에 할당
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.sub = user.id; // 사용자 ID를 token.sub에 할당
      }
      return token;
    }
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key"
};

export default NextAuth(authOptions);
