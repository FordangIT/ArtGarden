import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Best_TYPE, BestPopup_TYPE, BestExhibit_TYPE } from "@/pages";

interface BestProducts_TYPE {
  selectedBest: string;
  data: (Best_TYPE | BestPopup_TYPE | BestExhibit_TYPE)[];
}

const linkUrl = (selectedBest: string) => {
  switch (selectedBest) {
    case "Best공연":
      return "/performances";
    case "Best전시":
      return "/exhibitions";
    case "Best팝업스토어":
      return "/popupstores";
    default:
      return "/performances"; // 기본값 설정 (필요 시 조정)
  }
};

const BestProducts: React.FC<BestProducts_TYPE> = ({ selectedBest, data }) => {
  const word = selectedBest.match(/[가-힣]+/g)?.[0];

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {data &&
          data.map((el: Best_TYPE | BestPopup_TYPE | BestExhibit_TYPE) => (
            <Link href={`${linkUrl(selectedBest)}/${el.id}`} key={el.id}>
              <div className="card w-[24rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100">
                <figure>
                  {el.posterurl ? (
                    <Image
                      src={el.posterurl}
                      alt="공연사진"
                      width={420}
                      height={380}
                    />
                  ) : (
                    <div className="w-[420px] h-[380px] bg-gray-200 flex items-center justify-center">
                      <span>No Image Available</span>
                    </div>
                  )}
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {truncateText(el.name, 16)}
                    <div className="badge bg-main-pink text-white">BEST</div>
                  </h2>
                  기간: {el.startdate}~{el.enddate} <p>지역: {el.area}</p>
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
