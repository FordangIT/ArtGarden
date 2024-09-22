import { useSession } from "next-auth/react";
import LoggedOutFavorites from "@/components/favorites/LoggedOutFavorites";
import LoggedInFavorites from "@/components/favorites/LoggedInFavorites";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";

export default function FavoritesPage() {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  // const { data: session } = useSession(); // 세션 데이터를 가져옴
  if (isLoggedIn) {
    return (
      <div className="flex-col min-h-screen">
        <div className="flex justify-center items-center text-4xl py-12 font-extrabold">
          찜한목록
        </div>
        <LoggedInFavorites />
      </div>
    );
  } else {
    return (
      <div className="flex-col min-h-screen">
        <div className="flex justify-center items-center text-4xl py-12 font-extrabold">
          찜한목록
        </div>
        <LoggedOutFavorites />;
      </div>
    );
  }
}
