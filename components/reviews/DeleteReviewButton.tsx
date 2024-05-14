import React, { useEffect } from "react";
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
        location.reload();
      }
    }
  );

  const handleDelete = () => {
    deleteReviewMutation.mutate(id);
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-main-pink text-white p-2 rounded font-semibold"
    >
      삭제
    </button>
  );
};

export default DeleteReviewButton;
