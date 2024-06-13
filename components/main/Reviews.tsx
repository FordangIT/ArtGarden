import Image from "next/image";
import Link from "next/link";
import { Review_TYPE, AllReview_TYPE } from "@/pages";

const Reviews = (data: AllReview_TYPE) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const generateLinkHref = (objectId: string) => {
    if (!objectId) {
      return "/";
    }
    if (objectId.startsWith("EX")) {
      return `/exhibitions/${objectId}`;
    } else if (objectId.startsWith("PF")) {
      return `/performances/${objectId}`;
    }
    return `/performances/${objectId}`; // default case if no prefix match
  };

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-8 ">
        {data &&
          data?.data.map((el: Review_TYPE) => (
            <Link href={generateLinkHref(el.objectid)} key={el.reviewid}>
              <div
                key={el.reviewid}
                className="card group w-48 h-60 sm:w-80 sm:h-96 bg-white shadow-xl rounded-xl border-2 border-white hover:cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-in-out hover:text-white"
              >
                <figure>
                  {el.posterurl ? (
                    <Image
                      src={el.posterurl}
                      alt="review-image"
                      width={420}
                      height={400}
                      className="group-hover:opacity-40"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <p>Image not available</p>
                    </div>
                  )}
                </figure>
                <div className="card-body p-3 sm:p-6">
                  <h2 className="card-title text-sm sm:text-xl">
                    {truncateText(`${el.name}`, 14)}
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="rating flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star, idx) => (
                        <input
                          key={idx}
                          type="radio"
                          name="rating"
                          value={star}
                          checked={star === el.rate}
                          className="mask mask-star-2 bg-orange-400 w-4 h-4 sm:w-6 sm:h-6"
                          readOnly
                        />
                      ))}
                    </div>
                    <div className="text-xs sm:text-base badge badge-secondary bg-main-yellow border-none text-black font-semibold flex justify-end">
                      <div> {el.genre}</div>
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-base">
                    리뷰: {truncateText(el.content, 15)}
                  </h3>
                  <div className="flex items-center justify-end">
                    <div className="text-gray-500 flex justify-end group-hover:text-white text-xs sm:text-base">
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
