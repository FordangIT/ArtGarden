import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { createReview } from "@/lib/api/reviews";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/slices/modalSlice";
import { ModalComponent } from "@/lib/components/Modal";
interface PropsType {
  id: string;
}

export default function CreateReviewForm({ id }: PropsType) {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const [rate, setRate] = useState(1);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const mutation = useMutation(createReview, {
    onMutate: async (newReview) => {
      await queryClient.cancelQueries(["reviews", id]);
      const previousReviews = queryClient.getQueriesData(["reviews", id]);
      queryClient.setQueryData(["reviews", id], (old: any) => {
        if (old) {
          return [...old, { ...newReview, id: Date.now() }];
        } else {
          return [{ ...newReview, id: Date.now() }];
        }
      });
      return { previousReviews };
    },
    onError: (err, newReview, context) => {
      if (context && context.previousReviews) {
        queryClient.setQueryData(["reviews", id], context.previousReviews);
      } else {
        console.error(
          "Failed to roll back to previous state due to missing context"
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(["reviews", id]);
    }
  });

  const handleRatingChange = (selectedRate: number) => {
    setRate(selectedRate);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!session) {
      dispatch(
        openModal({
          message: "로그인이 필요합니다.",
          buttonText: "로그인 하러가기",
          link: "/auth/signin"
        })
      );
      return;
    }
    mutation.mutate({
      objectid: String(id),
      content,
      rate: Number(rate),
      memberid: session.user?.name || "guest"
    });
    setContent("");
    setRate(5);
  };

  return (
    <div className="flex justify-start items-center w-full">
      <ModalComponent />
      <form onSubmit={handleSubmit} className="flex-col w-full">
        <div className="flex justify-between mt-8">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="다른 고객님에게 도움이 되도록 솔직한 평가를 남겨주세요."
            className="rounded-md h-28 w-full border-2 border-black custom-placeholder"
          />
          <button
            type="submit"
            className="text-black text-xl border-2 md:px-4 md:py-4 ml-8 rounded-md border-black bg-white"
          >
            등록
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
                onClick={() => handleRatingChange(star)}
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
