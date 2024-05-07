// src/components/EditReviewForm.js
import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { updateReivew } from "@/lib/api/reviews";

const EditReviewForm = ({ review }) => {
  useEffect(() => {
    console.log(review, "review");
  });
  const [content, setContent] = useState(review);
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ id, content }) => updateReview(id, { content }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("reviews");
      }
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ id: review.id, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditReviewForm;
