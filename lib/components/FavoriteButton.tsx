import { RootState } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import {
  addToFavorite,
  removeFromFavorite,
  setFavorites
} from "@/redux/slices/favoriteSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { getScrapYN, postScrap } from "../api/scrap";

interface FavoriteButtonProps {
  item: string;
}

interface FavoriteItem {
  memberid?: string;
  objectid: string;
  regdt?: string;
  regid?: string;
  scrapid?: number;
  scrapyn?: boolean;
  upddt?: string;
  updid?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ item }) => {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.list);
  const queryClient = useQueryClient();

  const { data: scrapYN, refetch } = useQuery(
    ["scrapsYN", item],
    () => getScrapYN(item),
    {
      enabled: !!isLoggedIn // 로그인 상태에서만 데이터 가져오기
    }
  );

  const isFavorite = isLoggedIn ? scrapYN : favorites.includes(item);
  useEffect(() => {
    if (!isLoggedIn) {
      const savedFavorites = JSON.parse(
        sessionStorage.getItem("favorites") || "[]"
      );
      dispatch(setFavorites(savedFavorites));
    }
  }, [isLoggedIn, dispatch]);

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault(); // 기본 동작 방지
    event.stopPropagation(); // 이벤트 전파 방지

    if (isLoggedIn) {
      try {
        // 낙관적 업데이트
        queryClient.setQueryData(["scrapsYN", item], { scrapyn: !isFavorite });

        await postScrap(item);

        refetch(); // 서버와 동기화
      } catch (error) {
        console.error("failed to update scrap data", error);
        // 오류 발생 시 낙관적 업데이트 취소
        queryClient.setQueryData(["scrapsYN", item], { scrapyn: isFavorite });
      }
    } else {
      let updatedList;

      if (isFavorite) {
        updatedList = favorites.filter((favItem) => favItem !== item);
        dispatch(removeFromFavorite(item));
      } else {
        updatedList = [...favorites, item];
        dispatch(addToFavorite(item));
      }

      sessionStorage.setItem("favorites", JSON.stringify(updatedList));
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {isFavorite ? (
        <FaHeart className="w-5 h-5 sm:w-8 sm:h-8 text-main-pink" />
      ) : (
        <FaRegHeart className="w-5 h-5 sm:w-8 sm:h-8" />
      )}
    </div>
  );
};
