import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
interface ReviewFormProps {
  id: string;
}

interface ReviewData {
  reviewid: number;
  content: string;
  rate: number;
  memberid: string;
  regdt: string;
}

async function updateReview(
  reviewId: number,
  newContent: string
): Promise<any> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/${reviewId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: newContent })
    }
  );
  if (!res.ok) {
    throw new Error("Failed to update review");
  }
  return res.json();
}
async function deleteReview(reviewId: number): Promise<any> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/${reviewId}`,
    {
      method: "DELETE"
    }
  );
  if (!res.ok) {
    throw new Error("Failed to delete review");
  }
  return res.json();
}

export function ReadReview({ id }: ReviewFormProps) {
  const curId = id;
  const maxPage = 10;
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [editingReviewId, setEditingReviewId] = useState<number | null>(null);
  const [newReviewContent, setNewReviewContent] = useState<string>("");

  // const updateMutation = useMutation(updateReview);
  // const deletemutation = useMutation(deleteReview);

  // const handleUpdate = async (reviewId: number) => {
  //   try {
  //     await updateMutation.mutateAsync(reviewId, newReviewContent);
  //     setEditingReviewId(null);
  //     console.log("리뷰가 성공적으로 업데이트되었습니다.");
  //   } catch (error) {
  //     console.error("리뷰 업데이트에 실패했습니다:", error);
  //   }
  // };

  // const handleDelete = async (reviewId: number) => {
  //   try {
  //     await deletemutation.mutateAsync(reviewId);
  //     console.log("리뷰가 성공적으로 삭제되었습니다.");
  //   } catch (error) {
  //     console.error("리뷰 삭제에 실패했습니다:", error);
  //   }
  // };

  const fetchData = async (pageNum = 1): Promise<{ data: ReviewData[] }> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviewList/${curId}?page=${pageNum}&size=10`
    );
    return res.json();
  };

  useEffect(() => {
    if (currentPage < maxPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ["detailReview", nextPage],
        queryFn: () => fetchData(nextPage)
      });
    }
  }, [currentPage, queryClient]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["detailReview", currentPage],
    queryFn: () => fetchData(),
    staleTime: 5000
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
                {/* {editingReviewId === el.reviewid ? (
                  <div className="py-2 flex justify-between">
                    <input
                      type="text"
                      value={newReviewContent}
                      onChange={(e) => setNewReviewContent(e.target.value)}
                    />
                    <div className="flex">
                      <button onClick={() => handleUpdate(el.reviewid)}>
                        완료
                      </button>
                      <button onClick={() => setEditingReviewId(null)}>
                        취소
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-2 flex justify-between">
                    <div>리뷰: {el.content}</div>
                    <div className="flex">
                      <div
                        className="text-gray-500 hover:text-black"
                        onClick={() => setEditingReviewId(el.reviewid)}
                      >
                        수정
                      </div>
                      <div className="text-gray-300 mx-2">|</div>
                      <div
                        className="text-gray-500 hover:text-black"
                        onClick={() => handleDelete(el.reviewid)}
                      >
                        삭제
                      </div>
                    </div>
                  </div>
                )} */}
                {/* {editingReviewId === el.reviewid && ( // 리뷰를 수정할 때만 UpdateReview 컴포넌트를 보여줍니다.
                  <UpdateReview reviewId={el.reviewid} />
                )} */}
                <div className="py-2 flex justify-between">
                  <div>리뷰: {el.content}</div>
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
