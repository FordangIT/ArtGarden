import { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import Image from "next/image";
import { useQueryClient } from "react-query";
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
      `${process.env.BACKEND_URL}/reviewList/${curId}?page=${pageNum}&size=1`
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
    <>
      <button
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        pre
      </button>
      <div className="flex justify-center bg-blue-500 w-full h-80">
        <div className="flex-none bg-black h-20 flex justify-center items-center">
          <Image
            src="/artgarden.png"
            alt="logo of artgarden"
            width={50}
            height={40}
            className="rounded-full"
          ></Image>
        </div>

        <div className="flex-1 bg-red-600">
          {data &&
            data?.data.map((el) => (
              <div
                key={el.reviewid}
                className="  w-full bg-white shadow-xl rounded-xl border-2 border-white hover:cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-in-out hover:text-white"
              >
                <div className="h-20 flex justify-between items-center">
                  <div className="text-xl font-semibold">{`fordn**`}</div>
                  <div className="text-gray-500 flex justify-end group-hover:text-white">
                    {new Date(el.regdt).toLocaleDateString()}
                  </div>
                </div>
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
                <div>
                  <h3>리뷰: {el.content}</h3>
                </div>
              </div>
            ))}
          <span>Page {currentPage}</span>
        </div>
      </div>
      <button
        disabled={currentPage >= maxPage}
        onClick={() => setCurrentPage((next) => next + 1)}
      >
        next
      </button>
    </>
  );
}
