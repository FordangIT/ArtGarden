import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
export default function SaveItems() {
  useEffect(() => {
    let arr = sessionStorage.getItem("favorites"); //
    console.log(arr, "arrcheck");
  }, []);

  return (
    <></>
    // <div className="flex items-center justify-center">
    //   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 ">
    //     {status === "loading" && <div>로딩중</div>}
    //     {status === "error" && <p>불러오기 실패</p>}
    //     {status === "success" && data && (
    //       <>
    //         {data?.pages?.map((page) => {
    //           const performanceList = page.data.data;
    //           return performanceList.map((el: Performance) => {
    //             const searchKeywordInitials = getInitials(searchTerm, el.name);
    //             if (
    //               searchKeywordInitials === 0 ||
    //               el.name.toLowerCase().includes(searchTerm.toLowerCase())
    //             ) {
    //               return (
    //                 <Link
    //                   href={`/performances/${el.id}`}
    //                   key={el.id}
    //                   onClick={() => setScrollY(window.scrollY)}
    //                 >
    //                   <div className="card w-[26rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white  transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-100">
    //                     <figure>
    //                       <Image
    //                         src={el.posterUrl}
    //                         alt="공연사진"
    //                         width={420}
    //                         height={380}
    //                       />
    //                     </figure>
    //                     <div className="card-body">
    //                       <h2 className="card-title">
    //                         {truncateText(el.name, 16)}
    //                         {/* <div className="badge bg-main-pink text-white">
    //                       BEST
    //                     </div> */}
    //                       </h2>
    //                       공연기간: {el.startDate}~ {el.endDate}{" "}
    //                       <p>지역: {truncateText(el.place, 22)}</p>
    //                       <div className="card-actions justify-end">
    //                         <div className="badge badge-outline">
    //                           {el.genre}
    //                         </div>
    //                         <div className="badge badge-outline">
    //                           {el.performStatus}
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </Link>
    //               );
    //             }
    //           });
    //         })}
    //       </>
    //     )}
    //   </div>
    // </div>
  );
}
