import Image from "next/image";
import { useQuery, useInfiniteQuery } from "react-query";
import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import axios from "axios";
import { useObserver } from "@/customHook/useObserver";

const AllPerformances = () => {
  const [pages, setPages] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const bottom = useRef(null);

  const getReviewsWithPageInfo = async (props: any) => {
    const data = await fetch(
      `http://54.180.145.33:8080/performances?status=공연중&days=30&page=${pages}&size=${20}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res: Response) => {
        return res.json();
      })
      .catch((e) => {
        return e;
      });
    const { page } = data.pageNo;
    const { totalPages } = data.totalPages;
    return {
      result: data.list,
      nextPage: data.hasNext,
      isLast: !hasNextPage,
    };
  };
  const { isFetching, data, fetchNextPage, isLoading, error, refetch } =
    useInfiniteQuery("allPerformances", getReviewsWithPageInfo, {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage;
      },
      onSuccess: () => {
        setPages(pages + 1);
      },
    });

  if (isLoading)
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        로딩중
      </div>
    );

  if (error)
    return (
      <button
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 15,
          color: 'var(--black-10)',
        }}
        onClick={() => refetch()}
      >
        한번 더 시도하기
      </button>
    );

  if (!data) return <></>;


  // const fetchData = async ({ pageParam = 1 }) => {
  //   const response = await axios.get(
  //     `http://54.180.145.33:8080/performances?status=공연중&days=30&page=${pageParam}&size=${20}`
  //   );
  //   console.log(response.data.totalPages, "데이터 확인");
  //   return response;
  // };

  // const { data, fetchNextPage, status, refetch } = useInfiniteQuery(
  //   "allPerformances",
  //   fetchData,
  //   {
  //     getNextPageParam: (lastPage) => {
  //       if (lastPage.data.totalPages === lastPage.data.page) return false;
  //       return lastPage.data.page + 1;
  //     },
  //   }
  // );
  const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
    entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
  });
  return (
    <>
      <div className="flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {data &&
            data.pages.map((group, idx) => (
                <div key={idx}>
{group.result.map(el) => (
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
        <div className="badge bg-main-pink text-white">
          BEST
        </div>
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
)}
                </div>
              ))
            )}
        </div>
      </div>
      <div ref={bottom}></div>
    </>
  );
};
export default AllPerformances;
