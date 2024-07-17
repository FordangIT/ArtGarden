import { useSession } from "next-auth/react";
import LoggedOutFavorites from "@/components/favorites/LoggedOutFavorites";
import LoggedInFavorites from "@/components/favorites/LoggedInFavorites";
import { NosaveItems } from "@/lib/components/NosaveItems";
import { useEffect } from "react";
export default function FavoritesPage() {
  const { data: session } = useSession(); // 세션 데이터를 가져옴
  if (session) {
    return (
      <div className="flex-col">
        <div className="flex justify-center items-center text-4xl py-12 font-extrabold">
          찜한목록
        </div>
        <LoggedInFavorites />
      </div>
    );
  } else {
    return (
      <div className="flex-col">
        <div className="flex justify-center items-center text-4xl py-12 font-extrabold">
          찜한목록
        </div>
        <LoggedOutFavorites />;
      </div>
    );
  }
}
