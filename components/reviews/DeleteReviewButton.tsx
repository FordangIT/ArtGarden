import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteReview } from "@/lib/api/reviews";
interface Props {
  id: number;
}

const DeleteReviewButton = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(() => deleteReview(id), {
    onMutate: async () => {
      await queryClient.cancelQueries("review");
      const previousReviews = queryClient.getQueryData("reviews");
      queryClient.setQueryData("reviews", (old) =>
        old.filter((review) => review.id !== id)
      );
      return { previousReviews };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData("reviews", context?.previousReviews);
    },
    onSettled: () => {
      queryClient.invalidateQueries("reviews");
    }
  });
  return (
    <button
      onClick={() => mutation.mutate()}
      className="bg-main-pink text-white p-2 rounded font-semibold"
    >
      삭제
    </button>
  );
};

export default DeleteReviewButton;
