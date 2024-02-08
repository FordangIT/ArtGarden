import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const AllProducts = () => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const [data, setData] = useState<Array<any>>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/performances/all");
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("error fetching datat", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {data &&
          data.map((el) => (
            <div
              key={el.id}
              className="card w-[26rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white"
            >
              <figure>
                <Image src={el.img} alt="공연사진" width={420} height={380} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{truncateText(el.name, 16)}</h2>
                공연기간: {el.start}~{el.end} <p>지역: {el.place}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{el.genre}</div>
                  <div className="badge badge-outline">{el.state}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default AllProducts;
