// import React, { useEffect, useState } from "react";
// import { useMutation, useQueryClient } from "react-query";
// import axios from "axios";

// interface ReviewData {
//   reviewid: number;
//   content: string;
//   rate: number;
//   upid: string;
// }

// function UpdateReview({ reviewId }: { reviewId: number }) {
//   const queryClient = useQueryClient();
//   const [rate, setRate] = useState(5);
//   const [reviewText, setReviewText] = useState("");

//   const submitReview = async (reviewData: ReviewData) => {
//     try {
//       const res = await axios.put(
//         // PUT 또는 PATCH 요청으로 수정
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/${reviewId}`,
//         reviewData
//       );
//       setReviewText("");
//       setRate(1);
//     } catch (error) {
//       console.log("error", error);
//       throw new Error("error fetching data");
//     }
//   };

//   const mutation = useMutation(submitReview, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("reviews");
//       console.log("성공 mutation");
//     },
//     onError: (error) => {
//       console.error("Mutation error", error); // mutation 에러 로그 출력
//       // 에러 처리 로직 추가 (예: 사용자에게 알림 등)
//     }
//   });

//   useEffect(() => {
//     // 리뷰 정보를 불러와서 초기화
//     const fetchReview = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/${reviewId}`
//         );
//         const { content, rate } = response.data;
//         setReviewText(content);
//         setRate(rate);
//       } catch (error) {
//         console.error("Error fetching review:", error);
//       }
//     };

//     fetchReview();
//   }, [reviewId]);

//   const handleRatingChange = (selectedRate: number) => {
//     setRate(selectedRate);
//     console.log(selectedRate, "clickstar");
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(reviewId, rate, "아이디랑 별 점수");
//     await mutation.mutate({
//       reviewid: reviewId,
//       content: reviewText,
//       rate: Number(rate),
//       upid: "1"
//     });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={reviewText}
//           onChange={(e) => setReviewText(e.target.value)}
//           placeholder="Write your review..."
//           rows={4}
//           cols={50}
//         />
//         <div className="rating">
//           {[1, 2, 3, 4, 5].map((star, idx) => (
//             <input
//               key={idx}
//               type="radio"
//               name="rating"
//               value={star}
//               className="mask mask-star-2 bg-orange-400"
//               checked={star === rate}
//               onClick={() => handleRatingChange(star)} // rating 선택 시 handleRatingChange 호출
//             />
//           ))}
//         </div>

//         <button type="submit">수정하기</button>
//       </form>
//     </>
//   );
// }

// export default UpdateReview;
