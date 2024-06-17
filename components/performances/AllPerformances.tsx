import Image from "next/image";
import { useInfiniteQuery } from "react-query";
import { useObserver } from "@/customHook/useObserver";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import useLocalStorage from "use-local-storage";
import Hangul from "hangul-js";
import { IoSearch } from "react-icons/io5";
import Condition from "./Condition";
import { FavoriteButton } from "@/lib/components/FavoriteButton";
import { truncateText } from "@/lib/components/TruncateText";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { AllPerformance_TYPE, Performance_TYPE } from "@/pages";

const AllPerformances: React.FC = () => {
  const [scrollY, setScrollY] = useLocalStorage("performance_scroll", 0);
  const bottom = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const local = useSelector((state: RootState) => state.performance.local);
  const sort = useSelector((state: RootState) => state.performance.sort);

  const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
    entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event?.target.value);
  };

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, [scrollY]);

  const getPerformanceWithPageInfo = async ({ pageParam = 1 }) => {
    try {
      const areaParams = local.map((area) => `searchAreaArr=${area}`).join("&");
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/performances?status=all&days=30&page=${pageParam}&size=12&${areaParams}&orderby=${sort}`
      );
      return res.data;
    } catch (error) {
      console.log("error", error);
      throw new Error("error fetching data");
    }
  };

  const { data, fetchNextPage, status } = useInfiniteQuery(
    ["allPerformances", sort, local],
    getPerformanceWithPageInfo,
    {
      getNextPageParam: (lastPage, allPages) => {
        const page = lastPage.pageNo;
        if (lastPage.totalPages === page) return false;
        return page + 1;
      },
      select: (data) => {
        // 모든 페이지의 데이터 플랫화
        const allPerformances = data.pages.flatMap((page) => page.datalist);
        // ID를 기준으로 중복 제거
        const uniquePerformances = Array.from(
          new Map(allPerformances.map((item) => [item.name, item])).values()
        );
        return {
          pages: [{ datalist: uniquePerformances }],
          pageParams: data.pageParams
        };
      }
    }
  );

  const getInitials = (text: string, text2: string) => {
    let searcher = new Hangul.Searcher(text);
    return searcher.search(text2);
  };

  return (
    <>
      <div className="flex-col">
        <div className="flex justify-center items-center mx-16 py-16">
          <div className="relative flex items-center justify-center w-[30rem]">
            <input
              type="text"
              placeholder="공연 이름을 검색하세요"
              value={searchTerm}
              onChange={handleSearch}
              className="border-[1px] border-slate-300 rounded-3xl w-full h-12 pl-14"
            />
            <div className="absolute top-3 left-5 right-4 w-fit">
              <IoSearch className="w-6 h-6" />
            </div>
          </div>
          <div className="w-28 h-12 ml-2">
            <Condition />
          </div>
        </div>
        {status === "loading" && (
          <div className="flex justify-center items-center w-full h-96">
            <div className="loading loading-dots loading-lg"></div>
          </div>
        )}
        {status === "error" && <p>불러오기 실패</p>}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 ">
            {status === "success" && data && (
              <>
                {data.pages[0].datalist.map((el: Performance_TYPE) => {
                  const searchKeywordInitials = getInitials(
                    searchTerm,
                    el.name
                  );
                  if (
                    searchKeywordInitials === 0 ||
                    el.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return (
                      <Link
                        href={`/performances/${el.id}`}
                        key={el.id}
                        onClick={() => setScrollY(window.scrollY)}
                      >
                        <div className="card w-[24rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white">
                          <figure>
                            <Image
                              src={el.posterurl}
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
                            공연기간: {el.startdate}~ {el.enddate}{" "}
                            <p>지역: {truncateText(el.area, 22)}</p>
                            <div className="card-actions justify-end">
                              <div className="badge badge-outline">
                                {el.genre}
                              </div>
                              <div className="badge badge-outline">
                                {el.status}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                })}
              </>
            )}
          </div>
        </div>
      </div>
      <div ref={bottom}></div>
    </>
  );
};
export default AllPerformances;
