import { useMutation } from "react-query";

async function deleteReview(reviewId: number): Promise<any> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/${reviewId}`,
    {
      method: "DELETE",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to delete review");
  }
  return res.json();
}

function DeleteReview({ reviewId }: { reviewId: number }) {
  const mutation = useMutation(deleteReview);

  const handleDelete = async () => {
    try {
      await mutation.mutateAsync(reviewId);
      console.log("리뷰가 성공적으로 삭제되었습니다.");
    } catch (error) {
      console.error("리뷰 삭제에 실패했습니다:", error);
    }
  };

  return (
    <button onClick={handleDelete} disabled={mutation.isLoading}>
      {mutation.isLoading ? "삭제 중..." : "리뷰 삭제"}
    </button>
  );
}

export default DeleteReview;
