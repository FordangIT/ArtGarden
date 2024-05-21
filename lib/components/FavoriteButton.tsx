import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite
} from "@/redux/slices/favoriteSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
interface FavoriteButtonProps {
  item: string;
}
export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.list);
  const isFavorite = favorites.includes(item);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(item));
    } else {
      dispatch(addToFavorite(item));
    }
  };
  return (
    <div
      onClick={() => handleClick()}
      className="border-[1px] border-black p-2"
    >
      {isFavorite ? (
        <FaHeart className="w-8 h-8 font-light text-main-pink" />
      ) : (
        <FaRegHeart className="w-8 h-8  font-light " />
      )}
    </div>
  );
};
