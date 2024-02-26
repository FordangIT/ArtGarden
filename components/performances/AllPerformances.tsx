import Image from "next/image";
import { useQuery, useInfiniteQuery } from "react-query";
import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import axios from "axios";

const AllPerformances = () => {
  const fetchData = async ({ pageParam = 1 }: { pageParam?: number }) => {
    const { data } = await axios.get(`/api/performances/all`);
    return data;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {data &&
            data.map((el) => (
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
export default AllPerformances;
