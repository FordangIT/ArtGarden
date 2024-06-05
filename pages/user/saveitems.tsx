import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { truncateText } from "@/lib/components/TruncateText";
import { FavoriteButton } from "@/lib/components/FavoriteButton";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

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

interface ExSaveItems {
  id: string;
  name: string;
  startdate: string;
  enddate: string;
  genre: string;
  area: string;
  place: string;
  status: string;
  posterurl: string;
}

const getFavorites = (session: Session | null) => {
  const storage = session ? localStorage : sessionStorage;
  const favorites = storage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export default function FavoritesPage() {
  const { data: session } = useSession();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [performances, setPerformances] = useState<SaveItems[]>([]);
  const [exhibitions, setExhibitions] = useState<ExSaveItems[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadFavorites = async () => {
      const favoriteIds = getFavorites(session);
      if (favoriteIds.length) {
        try {
          // EX와 PE로 시작하는 ID를 분류
          const exIds = favoriteIds.filter((id: string) => id.startsWith("EX"));
          const peIds = favoriteIds.filter((id: string) => id.startsWith("PF"));

          // 공연 정보를 가져오는 요청
          const peResponse = await axios.post("/api/user/saveitems", {
            ids: peIds
          });
          setPerformances(peResponse.data);

          // 전시회 정보를 개별 GET 요청으로 가져오기
          const exRequests = exIds.map((id: string) =>
            axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/exhibits/${id}`)
          );
          const exResponses = await Promise.all(exRequests);
          const exData = exResponses.map((response) => response.data);
          setExhibitions(exData);
        } catch (error) {
          setIsError(true);
        }
      }
      setIsLoading(false);
    };

    setFavorites(getFavorites(session));
    loadFavorites();
  }, [session]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading performances and exhibitions</div>;

  return (
    <div className="flex-col">
      <div className="flex justify-center items-center text-4xl py-12 font-extrabold">
        찜한목록
      </div>
      <div className="flex items-center justify-center pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 ">
          {performances.length > 0 && (
            <>
              <div className="col-span-full text-2xl font-bold">공연</div>
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
                        <h2 className="card-title">
                          {truncateText(el.name, 16)}
                        </h2>
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
            </>
          )}
          {exhibitions.length > 0 && (
            <>
              <div className="col-span-full text-2xl font-bold">전시회</div>
              {exhibitions.map((el: ExSaveItems) => (
                <Link href={`/exhibitions/${el.id}`} key={el.id}>
                  <div className="card w-[24rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white">
                    <figure>
                      <Image
                        src={el.posterurl}
                        alt="전시사진"
                        width={350}
                        height={100}
                        className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100"
                      />
                    </figure>
                    <div className="card-body">
                      <div className="flex justify-between">
                        <h2 className="card-title">
                          {truncateText(el.name, 16)}
                        </h2>
                        <FavoriteButton item={el.id} />
                      </div>
                      전시기간: {el.startdate}~ {el.enddate}
                      <p>지역: {truncateText(el.area, 22)}</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">{el.genre}</div>
                        <div className="badge badge-outline">{el.status}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
