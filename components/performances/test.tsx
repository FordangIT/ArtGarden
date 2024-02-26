import Image from "next/image";
import { useInfiniteQuery } from "react-query";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useObserver } from "@/coustomHook/useObserver";

interface Performance {
  id: string;
  img: string;
  name: string;
  start: string;
  end: string;
  place: string;
  genre: string;
  state: string;
}

interface PageData {
  data: any;
  pageParam: number;
  pages: number[];
  page: number;
  pageParams: number[];
  total_pages: number;
  total_results: number;
}

const fetchData = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<PageData> => {
  const { data } = await axios.get<PageData>(
    `/api/performances/all/${pageParam}`
  );
  console.log(data, "data 확인");
  return data;
};

const Test = () => {
  const bottom = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, status } = useInfiniteQuery(
    ["performancelist"],
    fetchData,
    {
      getNextPageParam: (lastPage: PageData) => {
        const page = lastPage.page;
        if (lastPage.total_pages === page) return false;
        return page + 1;
      },
    }
  );
  useEffect(() => {
    const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
      entry.isIntersecting && fetchNextPage();

    if (bottom.current) {
      useObserver({
        target: bottom.current,
        onIntersect,
      });
    }
  }, [fetchNextPage]);

  return (
    <>
      <div className="flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {data &&
            data.data.map((el) => (
              <Link href={`/performances/${el.id}`} key={el.id}>
                <div className="card w-[26rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-100">
                  <figure>
                    <Image
                      src={el.img}
                      alt="공연사진"
                      width={420}
                      height={380}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {el.name}
                      <div className="badge bg-main-pink text-white">BEST</div>
                    </h2>
                    공연기간: {el.start}~ {el.end} <p>지역: {el.place}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">{el.genre}</div>
                      <div className="badge badge-outline">
                        공연상태: {el.state}번
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};
export default Test;
