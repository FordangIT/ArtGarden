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

function ReviewForm(id: ReviewFormProps) {
  let curId = id.id;
  const [rate, setRate] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const queryClient = useQueryClient();

  const submitReview = async (reviewData: ReviewData) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews`,
        reviewData
      );
      setReviewText("");
      setRate(1);
    } catch (error) {
      console.log("error", error);
      throw new Error("error fetching data");
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
    },
  });

  const handleRatingChange = (selectedRate: number) => {
    setRate(selectedRate);
    console.log(selectedRate, "clickstar");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(curId, rate, "아이디랑 별 점수");
    await mutation.mutate({
      performid: String(curId),
      content: reviewText,
      rate: Number(rate),
      memberid: "1",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
          rows={4}
          cols={50}
        />
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <input
              key={star}
              type="radio"
              name="rating"
              value={star}
              className="mask mask-star-2 bg-orange-400"
              onClick={() => handleRatingChange(star)} // rating 선택 시 handleRatingChange 호출
            />
          ))}
        </div>

        <button type="submit">Submit Review</button>
      </form>
    </>
  );
}

export default ReviewForm;
