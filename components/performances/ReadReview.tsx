import { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
interface ReviewFormProps {
  id: string;
}
interface Review_Data {
  reviewid: number;
  content: string;
  rate: number;
  memberid: string;
  regdt: string;
}
export function ReadReview(id: ReviewFormProps) {
  const curId = id.id;
  const maxPage = 10;
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (pageNum = 1): Promise<{ data: Review_Data[] }> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviewList/${curId}?page=${pageNum}&size=10`
    ); //여기에 몇 페이지 가져오게
    return res.json();
  };

  useEffect(() => {
    if (currentPage < maxPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ["detailReview", nextPage],
        queryFn: () => fetchData(nextPage),
      });
    }
  }, [currentPage, queryClient]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["detailReview", currentPage],
    queryFn: () => fetchData(),
    staleTime: 5000,
  });

  return (
    <div className="flex-col w-full justify-center items-center mx-10">
      <div className="flex justify-center bg-blue-500 w-full ">
        <div className="bg-black w-full">
          {data &&
            data?.data.map((el) => (
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
                <div className="py-2">
                  <h3>리뷰: {el.content}</h3>
                </div>
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
