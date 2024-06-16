import { RootState } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useQuery } from "react-query";
import {
  addToFavorite,
  removeFromFavorite,
  setFavorites
} from "@/redux/slices/favoriteSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { getScrap, postScrap } from "../api/scrap";

interface FavoriteButtonProps {
  item: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const favorites = useSelector((state: RootState) => state.favorites.list);
  const { data: scrapsData } = useQuery(["scraps"], getScrap, {
    enabled: !!session
  });
  const favoriteIds =
    scrapsData?.myDTOList?.map((el: { objectid: string }) => el.objectid) ?? [];

  const isFavorite = session
    ? favoriteIds.includes(item)
    : favorites.includes(item);

  useEffect(() => {
    if (!session) {
      const savedFavorites = JSON.parse(
        sessionStorage.getItem("favorites") || "[]"
      );
      dispatch(setFavorites(savedFavorites));
    }
  }, [session, dispatch]);

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault(); // 기본 동작 방지
    event.stopPropagation(); // 이벤트 전파 방지

    if (session) {
      try {
        if (isFavorite) {
          await postScrap(item); // 서버에 삭제 요청을 보냅니다.
          dispatch(removeFromFavorite(item));
        } else {
          await postScrap(item); // 서버에 추가 요청을 보냅니다.
          dispatch(addToFavorite(item));
        }
      } catch (error) {
        console.error("Failed to update scrap data:", error);
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
        <FaHeart className="w-8 h-8 text-main-pink" />
      ) : (
        <FaRegHeart className="w-8 h-8" />
      )}
    </div>
  );
};
