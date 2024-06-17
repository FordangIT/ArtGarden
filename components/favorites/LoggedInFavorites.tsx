import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { getScrap } from "@/lib/api/scrap";
import Image from "next/image";
import Link from "next/link";
import { truncateText } from "@/lib/components/TruncateText";
import { FavoriteButton } from "@/lib/components/FavoriteButton";
import { PopupStore_TYPE } from "@/pages";
import { SaveItems, ExSaveItems } from "./LoggedOutFavorites";
import { NosaveItems } from "@/lib/components/NosaveItems";

interface ScrapResponse {
  myDTOList: { objectid: string; scrapyn: boolean }[];
}

export default function LoggedInFavorites() {
  const { data, error, isLoading } = useQuery<ScrapResponse>(
    ["scraps"],
    getScrap
  );
  const [performances, setPerformances] = useState<SaveItems[]>([]);
  const [exhibitions, setExhibitions] = useState<ExSaveItems[]>([]);
  const [popupstores, setPopupstores] = useState<PopupStore_TYPE[]>([]);

  // 비동기 작업을 처리할 함수 정의
  const fetchData = async () => {
    try {
      const favoriteIds =
        data?.myDTOList
          ?.filter((el) => el.scrapyn === true)
          .map((el) => el.objectid) ?? [];
      const validFavoriteIds = favoriteIds.filter(Boolean);
      const exIds = validFavoriteIds.filter((id) => id.startsWith("EX"));
      const peIds = validFavoriteIds.filter((id) => id.startsWith("PF"));
      const popIds = validFavoriteIds.filter((id) => /^[0-9]+/.test(id));

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
      console.error(error);
    }
  };

  useEffect(() => {
    if (data) {
      fetchData();
    }
    console.log(data, "찜 목록 데이터 확인");
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-96">
        <div className="loading loading-dots loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading data</div>;
  }

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
                  <Link href={`/popupstores/${el._id}`} key={el._id}>
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
                          <FavoriteButton item={el._id} />
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
