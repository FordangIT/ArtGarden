import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
interface ReviewData {
  performid: string;
  content: string;
  rate: number;
  memberid: string;
}
interface ReviewFormProps {
  id: string;
}

function ReviewForm({ id }: ReviewFormProps) {
  const queryClient = useQueryClient();
  const [rate, setRate] = useState(5);
  const [reviewText, setReviewText] = useState("");

  const submitReview = async (reviewData: ReviewData) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews`,
        reviewData
      );
      return res.data;
    } catch (error) {
      console.log(error, "error");
      throw error;
    }
  };

  const mutation = useMutation(submitReview, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
      console.log("성공 mutation");
    },
    onError: (error) => {
      console.error("Mutation error", error); // mutation 에러 로그 출력
      // 에러 처리 로직 추가 (예: 사용자에게 알림 등)
    }
  });

  const handleRatingChange = (selectedRate: number) => {
    setRate(selectedRate);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    mutation.mutate({
      performid: String(id),
      content: reviewText,
      rate: Number(rate),
      memberid: "asdf"
    });
    setReviewText(""), setRate(5);
  };

  return (
    <div className="flex justify-start items-center w-full">
      <form onSubmit={handleSubmit} className="flex-col w-full">
        <div className="flex justify-between mt-8">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="리뷰를 작성하세요"
            className="rounded-md h-28 w-full border-2 border-black"
          />
          <button
            type="submit"
            className="text-white text-xl border-2 md:px-4 md:py-4 ml-8 rounded-md border-white"
          >
            submit
          </button>
        </div>
        <div className="flex justify-between my-5">
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star, idx) => (
              <input
                key={idx}
                type="radio"
                name="rating"
                value={star}
                className="mask mask-star-2 bg-orange-400"
                onClick={() => handleRatingChange(star)} // rating 선택 시 handleRatingChange 호출
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
