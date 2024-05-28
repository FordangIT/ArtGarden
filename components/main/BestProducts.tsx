import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface Best_TYPE {
  id: string;
  name: string;
  img: string;
  date: string;
  place: string;
  genre: string;
  count: string;
}
interface BestPopup_TYPE {
  _id: string;
  name: string;
  img: string;
  place: string;
  date: string;
  time: string[];
  images: string[];
}

interface BestProducts_TYPE {
  selectedBest: string;
  data: (Best_TYPE | BestPopup_TYPE)[];
}

const BestProducts: React.FC<BestProducts_TYPE> = ({ selectedBest, data }) => {
  const word = selectedBest.match(/[가-힣]+/g)?.[0];

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {data &&
          data.map((el: Best_TYPE | BestPopup_TYPE) => (
            <Link
              href={`/performances/${"id" in el ? el.id : el._id}`}
              key={"id" in el ? el.id : el._id}
            >
              <div className="card w-[24rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100">
                <figure>
                  <Image src={el.img} alt="공연사진" width={420} height={380} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {truncateText(el.name, 16)}
                    <div className="badge bg-main-pink text-white">BEST</div>
                  </h2>
                  기간: {el.date} <p>지역: {el.place}</p>
                  {word === "공연" && "count" in el && "genre" in el && (
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">{el.genre}</div>
                      <div className="badge badge-outline">
                        공연횟수: {el.count}번
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
      </div>
      {word === "공연" && (
        <div className="flex justify-end mt-8">
          <Link href={`/performances`}>
            <div className="text-black font-bold text-xl hover:text-main-pink py-8">
              더 많은 공연 보러 가기
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BestProducts;
