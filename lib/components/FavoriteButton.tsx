import { RootState } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addToFavorite,
  removeFromFavorite,
  setFavorites
} from "@/redux/slices/favoriteSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { postScrap } from "../api/scrap";
interface FavoriteButtonProps {
  item: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.list);
  const { data: session } = useSession();
  const isFavorite = favorites.includes(item);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      sessionStorage.getItem("favorites") || "[]"
    );
    dispatch(setFavorites(savedFavorites));
  }, [session, dispatch]);

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault(); // 기본 동작 방지
    event.stopPropagation(); // 이벤트 전파 방지

    let updatedList;

    if (isFavorite) {
      updatedList = favorites.filter((favItem) => favItem !== item);
      dispatch(removeFromFavorite(item));
    } else {
      updatedList = [...favorites, item];
      dispatch(addToFavorite(item));
    }

    if (session) {
      try {
        console.log(item, "check11");
        await postScrap(item);
      } catch (error) {
        console.error("Failed to post scrap data:", error);
      }
    } else {
      sessionStorage.setItem("favorites", JSON.stringify(updatedList));
    }
  };

  return (
    <div onClick={handleClick} className="">
      {isFavorite ? (
        <FaHeart className="w-8 h-8 font-light text-main-pink" />
      ) : (
        <FaRegHeart className="w-8 h-8 font-light" />
      )}
    </div>
  );
};
