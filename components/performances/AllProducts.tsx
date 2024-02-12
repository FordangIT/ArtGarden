import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import React from "react";

const fetchProducts = async () => {
  try {
    const response = await fetch(`/api/performances/all`);
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("error fetching datat", error);
  }
};

const AllProducts = () => {
  const observerElem = useRef(null);
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["all-products"], fetchProducts, {
    getNextPageParam: (lastPage) => {
      const page = lastPage.data.page;
      if (lastPage.data.total_pages === page) return false;
      return page + 1;
    },
  });

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observerElem.current;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [fetchNextPage, hasNextPage, handleObserver]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {data &&
          data.pages?.map((group, i) => (
            <Fragment key={i}>
              {group &&
                group?.data.items.map((p) => {
                  return (
                    <div
                      key={p.id}
                      className="card w-[26rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white"
                    >
                      <figure>
                        <Image
                          src={p.img}
                          alt="공연사진"
                          width={420}
                          height={380}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">
                          {truncateText(p.name, 16)}
                        </h2>
                        공연기간: {p.start}~{p.end} <p>지역: {p.place}</p>
                        <div className="card-actions justify-end">
                          <div className="badge badge-outline">{p.genre}</div>
                          <div className="badge badge-outline">{p.state}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Fragment>
          ))}
      </div>
      {isFetching && <div>Loading...</div>}
    </div>
  );
};
export default AllProducts;
