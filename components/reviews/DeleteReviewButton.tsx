import React from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

interface Props {
  id: number;
}

const DeleteReviewButton = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const deleteReviewMutation = useMutation(
    async (reviewId: number) => {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/${reviewId}`
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["detailReview"]);
      }
    }
  );

  const handleDelete = () => {
    deleteReviewMutation.mutate(id);
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white p-2 rounded mt-2"
    >
      삭제
    </button>
  );
};

export default DeleteReviewButton;
