import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
interface Performance {
  id: number;
  img: string;
  name: string;
  place: string;
  start: string;
  end: string;
  genre: string;
  rank: string;
}

export default function NewProducts(): JSX.Element {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const [data, setData] = useState<Performance[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/performances/new");
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-black flex-col ">
      <div className="slider-wrapper flex">
        {data.map((el: Performance) => (
          <Link href={`/performances/${el.id}`} key={el.id}>
            <div
              key={el.id}
              className={`card h-[29rem] w-[22rem] bg-white rounded-3xl transform transition-transform ease-in-out duration-1000 ml-8 animate-slide-flow`}
            >
              <figure className="h-[15rem]">
                <Image src={el.img} alt="new image" width={350} height={200} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {truncateText(el.name, 10)}
                  <div className="badge badge-secondary bg-main-yellow border-none text-black ">
                    NEW
                  </div>
                </h2>
                <p>장소: {el.place}</p>
                공연 기간: {el.start}~{el.end}
                <div className="card-actions justify-end m-5">
                  <div className="badge badge-outline">{el.genre}</div>
                  <div className="badge badge-outline">{el.rank}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-end mt-12 mr-6">
        <Link href={`/performances`}>
          <div className="text-white font-bold text-2xl hover:text-main-pink">
            더 많은 NEW 공연 보러 가기
          </div>
        </Link>
      </div>
    </div>
  );
}
