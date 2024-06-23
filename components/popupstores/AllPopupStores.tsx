import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "@/lib/components/FavoriteButton";
import { truncateText } from "@/lib/components/TruncateText";
import { PopupStore_TYPE, AllPopupStore_TYPE } from "@/pages";
import { useEffect } from "react";

const AllPopupStores = ({ data }: AllPopupStore_TYPE) => {
  return (
    <div className="flex-col">
      <div className="flex justify-center items-center mx-16"></div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-12">
          {data.map((el: PopupStore_TYPE) => (
            <Link href={`/popupstores/${el.id}`} key={el.id}>
              <div className="card w-48 h-80 sm:w-[24rem] sm:h-[30rem] bg-white shadow-xl rounded-none border-2 border-white">
                <figure>
                  <Image
                    src={el.posterurl}
                    alt="공연사진"
                    width={350}
                    height={100}
                    className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100"
                  />
                </figure>
                <div className="card-body p-3 sm:p-6">
                  <div className="flex justify-between">
                    <h2 className="card-title text-sm sm:text-2xl">
                      {truncateText(el.name, 16)}
                    </h2>
                    <FavoriteButton item={el.id} />
                  </div>
                  <p className="text-xs sm:text-base">
                    공연기간: {el.startdate} ~ {el.enddate}
                  </p>
                  <p className="text-xs sm:text-base">
                    지역: {truncateText(el.area, 22)}
                  </p>
                  <div className="card-actions justify-end">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPopupStores;
