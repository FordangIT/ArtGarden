import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

// 찜 목록을 sessionStorage에서 불러오는 함수
const getFavorites = () => {
  const favorites = sessionStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

// 찜 목록을 sessionStorage에 저장하는 함수
const saveFavorites = (favorites) => {
  sessionStorage.setItem("favorites", JSON.stringify(favorites));
};

// 서버로부터 공연 데이터를 가져오는 함수
const fetchPerformances = async (ids) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/performances/multiple`,
    { ids }
  );
  return data;
};

export default function SaveItems() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const { data, isError, isLoading } = useQuery(
    ["favorites", favorites],
    () => fetchPerformances(favorites),
    {
      enabled: !!favorites.length
    }
  );

  const handleToggleFavorite = (id) => {
    let updatedFavorites = favorites.includes(id)
      ? favorites.filter((favorite) => favorite !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading performances</div>;

  return (
    <div className="flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {data &&
          data.map((el) => (
            <div
              key={el.id}
              className="card w-[26rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100"
            >
              <figure onClick={() => handleToggleFavorite(el.id)}>
                <Image
                  src={el.img}
                  alt="Performance image"
                  width={420}
                  height={380}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{el.name}</h2>
                {/* Render details and a button to toggle favorites */}
                <button onClick={() => handleToggleFavorite(el.id)}>
                  {favorites.includes(el.id)
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
