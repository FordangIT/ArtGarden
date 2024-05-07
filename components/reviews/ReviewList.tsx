import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { fetchDetailPerformanceReview } from "@/lib/api/reviews";
import EditReviewForm from "./EditReivewForm";
import DeleteReviewButton from "./DeleteReviewButton";
interface ReviewList_TYPE {
  id: string;
  props: Review_TYPE;
}

interface Review_TYPE {
  data: {
    name: string;
    content: string;
    genre: string;
    memberid: string;
    performid: string;
    posterurl: string;
    rate: number;
    regdt: string;
    reviewid: number;
  }[];
}

interface ReviewData {
  reviewid: number;
  content: string;
  rate: number;
  memberid: string;
  regdt: string;
}

export default function ReviewList({ id, props }: ReviewList_TYPE) {
  const maxPage = 10;
  const data = props.data;

  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage < maxPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ["detailReview", nextPage],
        queryFn: () => fetchDetailPerformanceReview(id, nextPage)
      });
    }
  }, [currentPage, queryClient]);

  return (
    <div className="flex-col w-full justify-center items-center mx-10">
      <div className="flex justify-center bg-blue-500 w-full ">
        <div className="bg-black w-full">
          {data &&
            data.map((el) => (
              <div
                key={el.reviewid}
                className="w-full bg-white shadow-xl rounded-xl border-2 border-white mb-4 p-6"
              >
                <div className="py-2 flex justify-between items-center">
                  <div className="text-xl font-semibold">{`비회원**`}</div>
                  <div className="text-gray-500 flex justify-end group-hover:text-white">
                    {new Date(el.regdt).toLocaleDateString()}
                  </div>
                </div>
                <div className="rating py-2">
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

                <div className="py-2 flex justify-between">
                  <div>리뷰: {el.content}</div>
                </div>
                {/* <EditReviewForm review={el.review} /> */}
                <DeleteReviewButton id={el.reviewid} />
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-around w-full py-10">
        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <FaArrowAltCircleLeft className="text-white bg-black w-7 h-5" />
        </button>
        <span className="text-white font-semibold">Page {currentPage}</span>
        <button
          disabled={currentPage >= maxPage}
          onClick={() => setCurrentPage((next) => next + 1)}
          className="text-white"
        >
          <FaArrowAltCircleRight className="text-white bg-black w-7 h-5" />
        </button>
      </div>
    </div>
  );
}
