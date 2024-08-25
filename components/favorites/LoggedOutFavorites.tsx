import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { truncateText } from "@/lib/components/TruncateText";
import { FavoriteButton } from "@/lib/components/FavoriteButton";
import { PopupStore_TYPE } from "@/pages";
import { NosaveItems } from "@/lib/components/NosaveItems";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
export interface SaveItems {
  id: string;
  img: string;
  name: string;
  place: string;
  start: string;
  end: string;
  genre: string;
  status: string;
}

export interface ExSaveItems {
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

// 로컬 스토리지 또는 세션 스토리지에서 찜한 목록을 가져오는 함수
const getFavorites = () => {
  const favorites = sessionStorage.getItem("favorites");
  if (!favorites) return [];
  try {
    const parsedFavorites = JSON.parse(favorites);
    return Array.isArray(parsedFavorites) ? parsedFavorites : [];
  } catch (error) {
    console.error("Failed to parse favorites:", error);
    return [];
  }
};

export default function LoggedOutFavorites() {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [performances, setPerformances] = useState<SaveItems[]>([]);
  const [exhibitions, setExhibitions] = useState<ExSaveItems[]>([]);
  const [popupstores, setPopupstores] = useState<PopupStore_TYPE[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFavorites = async () => {
      const favoriteIds = getFavorites();
      if (favoriteIds.length === 0) {
        setIsLoading(false);
        return;
      }

      try {
        const validFavoriteIds = favoriteIds.filter(Boolean);
        const exIds = validFavoriteIds.filter((id) => id.startsWith("EX"));
        const peIds = validFavoriteIds.filter((id) => id.startsWith("PF"));
        const popIds = validFavoriteIds.filter((id) => id.startsWith("PU"));

        const [peResponse, popResponse, ...exResponses] = await Promise.all([
          axios
            .post("/api/user/saveitems", { ids: peIds })
            .catch(() => ({ data: [] })),
          axios
            .post("/api/user/saveitemsPop", { ids: popIds })
            .catch(() => ({ data: [] })),
          ...exIds.map((id) =>
            axios
              .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/exhibits/${id}`)
              .catch(() => ({ data: null }))
          )
        ]);
        setPerformances(peResponse.data || []);
        setPopupstores(popResponse.data || []);

        const exData = exResponses
          .map((response) => response.data)
          .filter((data) => data !== null);
        setExhibitions(exData);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message || error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    setFavorites(getFavorites());
    loadFavorites();
  }, [isLoggedIn, performances, exhibitions, popupstores]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full h-96">
        <div className="loading loading-dots loading-lg"></div>
      </div>
    );

  if (error) return <div>Error loading data: {error}</div>;

  return (
    <>
      {performances.length === 0 &&
      exhibitions.length === 0 &&
      popupstores.length === 0 ? (
        <NosaveItems />
      ) : (
        <div className="flex items-center justify-center pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
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

            {popupstores.length > 0 && (
              <>
                <div className="col-span-full text-2xl font-bold">
                  팝업스토어
                </div>
                {popupstores.map((el: PopupStore_TYPE) => (
                  <Link href={`/popupstores/${el.id}`} key={el.id}>
                    <div className="card w-[24rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white">
                      <figure>
                        <Image
                          src={el.posterurl}
                          alt="팝업스토어 사진"
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
                        팝업스토어 기간: {el.startdate}~ {el.enddate}
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
      )}
    </>
  );
}
