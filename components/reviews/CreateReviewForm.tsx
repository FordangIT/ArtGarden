import { useState } from "react";
import { createReview } from "@/lib/api/reviews";
import { useMutation, useQueryClient } from "react-query";

interface PropsType {
  id: string;
}
export default function CreateReviewForm({ id }: PropsType) {
  const [rate, setRate] = useState(5);
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(createReview, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
    }
  });

  const handleRatingChange = (selectedRate: number) => {
    setRate(selectedRate);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({
      performid: String(id),
      content: content,
      rate: Number(rate),
      memberid: "asdf"
    });
    setContent(""), setRate(5);
  };

  return (
    <div className="flex justify-start items-center w-full">
      <form onSubmit={handleSubmit} className="flex-col w-full">
        <div className="flex justify-between mt-8">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
