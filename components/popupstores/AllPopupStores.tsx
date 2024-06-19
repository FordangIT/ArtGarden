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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {data.map((el: PopupStore_TYPE) => (
            <Link href={`/popupstores/${el.id}`} key={el.id}>
              <div className="card w-[24rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white">
                <figure>
                  <Image
                    src={el.posterurl}
                    alt="공연사진"
                    width={350}
                    height={100}
                    className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="card-title">{truncateText(el.name, 16)}</h2>
                    <FavoriteButton item={el.id} />
                  </div>
                  공연기간: {el.startdate} ~ {el.enddate}
                  <p>지역: {truncateText(el.area, 22)}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{el.genre}</div>
                    <div className="badge badge-outline">{el.status}</div>
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
