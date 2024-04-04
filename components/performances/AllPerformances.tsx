import Image from "next/image";
import { useInfiniteQuery } from "react-query";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useObserver } from "@/customHook/useObserver";
import useLocalStorage from "use-local-storage";
import { BiSearch } from "react-icons/bi";
import Hangul from "hangul-js";

interface Performance {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  place: string;
  posterUrl: string;
  genre: string;
  performStatus: string;
}

interface QueryData {
  pages: {
    data: Performance[];
  }[];
}

const AllPerformances: React.FC = () => {
  const [scrollY, setScrollY] = useLocalStorage("performance_scroll", 0);
  const bottom = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
    entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event?.target.value);
  };
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  const getPerformanceWithPageInfo = async ({ pageParam = 1 }) => {
    try {
      const res = await axios.get(
        `${process.env.BACKEND_URL}/performances?status=all&days=30&page=${pageParam}&size=12`
      );
      return res;
    } catch (error) {
      console.log("error", error);
      throw new Error("error fetching data");
    }
  };

  const { data, fetchNextPage, status } = useInfiniteQuery(
    ["allPerformances"],
    getPerformanceWithPageInfo,
    {
      getNextPageParam: (lastPage) => {
        const page = lastPage.data.pageNo;
        if (lastPage.data.totalPages === page) return false;
        return page + 1;
      },
    }
  );

  const getInitials = (text: string, text2: string) => {
    let searcher = new Hangul.Searcher(text);
    return searcher.search(text2);
  };
  return (
    <>
      <div className="flex-col">
        <div className="flex items-center justify-center ">
          <input
            type="text"
            placeholder="공연 이름을 검색하세요"
            value={searchTerm}
            onChange={handleSearch}
            className="border-2 border-slate-300 rounded-3xl w-[40rem] h-12 mb-12 px-10"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {status === "loading" && <div>로딩중</div>}
            {status === "error" && <p>불러오기 실패</p>}
            {status === "success" && data && (
              <>
                {data?.pages?.map((page) => {
                  const performanceList = page.data.data;
                  return performanceList.map((el: Performance) => {
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
                          <div className="card w-[26rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white  transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100">
                            <figure>
                              <Image
                                src={el.posterUrl}
                                alt="공연사진"
                                width={420}
                                height={380}
                              />
                            </figure>
                            <div className="card-body">
                              <h2 className="card-title">
                                {truncateText(el.name, 16)}
                                {/* <div className="badge bg-main-pink text-white">
                                  BEST
                                </div> */}
                              </h2>
                              공연기간: {el.startDate}~ {el.endDate}{" "}
                              <p>지역: {truncateText(el.place, 22)}</p>
                              <div className="card-actions justify-end">
                                <div className="badge badge-outline">
                                  {el.genre}
                                </div>
                                <div className="badge badge-outline">
                                  {el.performStatus}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    }
                  });
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
