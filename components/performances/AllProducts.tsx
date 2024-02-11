import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import React from "react";

const AllProducts = () => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const fetchProducts = async ({ pageParam = 1 }) => {
    try {
      const response = await fetch(`/api/performances/all?page=${pageParam}`);
      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("error fetching datat", error);
    }
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey,
    queryFn: fetchProducts,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  const observer = useRef();

  const lastProductRef = useCallback(
    (node) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((product, productIndex) => {
              const isLastProduct =
                data?.pages.length === pageIndex + 1 &&
                page.length === productIndex + 1;
              return (
                <div
                  key={product.id}
                  className="card w-[26rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white"
                  ref={isLastProduct ? lastProductRef : null}
                >
                  <figure>
                    <Image
                      src={product.img}
                      alt="공연사진"
                      width={420}
                      height={380}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {truncateText(product.name, 16)}
                    </h2>
                    공연기간: {product.start}~{product.end}{" "}
                    <p>지역: {product.place}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">{product.genre}</div>
                      <div className="badge badge-outline">{product.state}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      {isFetching && <div>Loading...</div>}
      {isError && <div>Error fetching</div>}
    </div>
  );
};
export default AllProducts;
