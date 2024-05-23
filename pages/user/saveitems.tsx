// pages/favorites.js
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { truncateText } from "@/lib/components/TruncateText";
import { FavoriteButton } from "@/lib/components/FavoriteButton";

interface SaveItems {
  id: string;
  img: string;
  name: string;
  place: string;
  start: string;
  end: string;
  genre: string;
  status: string;
}
// 찜 목록을 sessionStorage에서 불러오는 함수
const getFavorites = () => {
  const favorites = sessionStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

// // 찜 목록을 sessionStorage에 저장하는 함수
// const saveFavorites = (favorites) => {
//   sessionStorage.setItem("favorites", JSON.stringify(favorites));
// };

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [performances, setPerformances] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadFavorites = async () => {
      const favoriteIds = getFavorites();
      if (favoriteIds.length) {
        try {
          const { data } = await axios.post("/api/user/saveitems", {
            ids: favoriteIds
          });
          console.log(data, "data");
          setPerformances(data);
        } catch (error) {
          setIsError(true);
        }
      }
      setIsLoading(false);
    };

    setFavorites(getFavorites());
    loadFavorites();
  }, []);

  // const handleToggleFavorite = (id) => {
  //   const updatedFavorites = favorites.includes(id)
  //     ? favorites.filter((favorite) => favorite !== id)
  //     : [...favorites, id];
  //   setFavorites(updatedFavorites);
  //   saveFavorites(updatedFavorites);
  // };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading performances</div>;

  return (
    <div className="flex-col">
      <div className="flex justify-center items-center text-4xl py-12 font-extrabold">
        찜한목록
      </div>
      <div className="flex items-center justify-center pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 ">
          {performances.map((el: SaveItems) => (
            <Link href={`/performances/${el.id}`} key={el.id}>
              <div className="card w-[24rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white">
                <figure>
                  <Image
                    src={el.img}
                    alt="공연사진"
                    width={350}
                    height={100}
                    className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="card-title">{truncateText(el.name, 16)}</h2>
                    <FavoriteButton item={el.id} />
                  </div>
                  공연기간: {el.start}~ {el.end}
                  <p>지역: {truncateText(el.place, 22)}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{el.genre}</div>
                    <div className="badge badge-outline">{el.status}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
