import Image from "next/image";
import Link from "next/link";
import { Performance_TYPE, Exhibition_TYPE, PopupStore_TYPE } from "@/pages";
import { truncateText } from "@/lib/components/TruncateText";
export interface BestProducts_TYPE {
  selectedBest: string;
  data: (Performance_TYPE | Exhibition_TYPE | PopupStore_TYPE)[];
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

  return (
    <div className="flex-col">
      <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-12">
        {data &&
          data.map(
            (
              el: Performance_TYPE | Exhibition_TYPE | PopupStore_TYPE,
              index
            ) => {
              const id = el.id || el._id || index;
              return (
                <Link href={`${linkUrl(selectedBest)}/${id}`} key={id}>
                  <div className="card w-48 h-80 sm:w-[24rem] sm:h-[30rem] bg-white shadow-xl rounded-none border-2 border-white transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100">
                    <figure className="">
                      {el.posterurl ? (
                        <Image
                          src={el.posterurl}
                          alt={selectedBest}
                          width={420}
                          height={380}
                        />
                      ) : (
                        <div className="w-[420px] h-[380px] bg-gray-200 flex items-center justify-center">
                          <span>No Image Available</span>
                        </div>
                      )}
                    </figure>
                    <div className="card-body p-3 sm:p-6">
                      <h2 className="card-title text-sm sm:text-2xl">
                        {truncateText(el.name, 16)}
                        <div className="badge bg-main-pink text-white text-xs sm:text-base">
                          BEST
                        </div>
                      </h2>
                      <p className="text-xs sm:text-base">마감: {el.enddate}</p>
                      <p className="text-xs sm:text-base">지역: {el.area}</p>
                      <div className="card-actions justify-end mt-2 sm:mt-4">
                        <div className="badge badge-outline text-xs sm:text-sm">
                          {el.genre}
                        </div>
                        <div className="badge badge-outline text-xs sm:text-sm">
                          {el.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          )}
      </div>
      <div className="flex justify-end mt-8">
        <Link href={`${linkUrl(selectedBest)}`}>
          <div className="text-black font-bold text-xl hover:text-main-pink py-8">
            {`더 많은 ${word} 보러 가기`}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BestProducts;
