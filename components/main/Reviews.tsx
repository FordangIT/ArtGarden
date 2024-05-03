import Image from "next/image";
import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import { useEffect, useRef } from "react";
interface ReviewData {
  name: string;
  reviewid: string;
  performid: string;
  content: string;
  rate: number;
  regdt: string;
  membierid: string;
  genre: string;
  posterurl: string;
}
interface REVIEW_TYPE {
  data: ReviewData[];
}
const Reviews = (data: REVIEW_TYPE) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  useEffect(() => {
    console.log(data, "맞다이로 들어와");
  });
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {data &&
          data.data.map((el: ReviewData) => (
            <Link href={`/performances/${el.performid}`} key={el.reviewid}>
              <div
                key={el.reviewid}
                className="card group w-80 h-96 bg-white shadow-xl rounded-xl border-2 border-white hover:cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-in-out hover:text-white"
              >
                <figure>
                  <Image
                    src={el.posterurl}
                    alt="review-image"
                    width={420}
                    height={400}
                    className="group-hover:opacity-40"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {truncateText(`${el.name}`, 14)}
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="rating">
                      {[1, 2, 3, 4, 5].map((star, idx) => (
                        <input
                          key={idx}
                          type="radio"
                          name="rating"
                          value={star}
                          checked={star === el.rate}
                          className="mask mask-star-2 bg-orange-400"
                          readOnly
                        />
                      ))}
                    </div>
                    <div className="badge badge-secondary bg-main-yellow border-none text-black font-semibold flex justify-end">
                      <div> {el.genre}</div>
                    </div>
                  </div>
                  <h3>리뷰:{truncateText(el.content, 15)}</h3>
                  <div className="flex items-center justify-end">
                    <div className="text-gray-500 flex justify-end group-hover:text-white">
                      {new Date(el.regdt).toLocaleDateString("ko-KR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
