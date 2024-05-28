import axios from "axios";

export interface ReviewData {
  reviewid: number;
  content: string;
  rate: number;
  memberid: string;
  regdt: string;
}

interface ReviewCreate_TYPE {
  performid: string;
  content: string;
  rate: number;
  memberid: string;
}
//main의 review
export const fetchReview = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews`);
  return res.data;
};

//상세페이지 공연 리뷰 get
export const fetchDetailPerformanceReview = async (
  id: string,
  pageNum: number
): Promise<{
  pageNo: number;
  data: ReviewData[];
  totalPages: number;
  hasNext: boolean;
}> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviewList/${id}?page=${pageNum}&size=5`
  );
  const result = await res.json();
  return {
    pageNo: result.pageNo,
    data: result.data,
    totalPages: result.totalPages,
    hasNext: result.hasNext
  };
};

//상세페이지 리뷰 create
export const createReview = async (reviewData: ReviewCreate_TYPE) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews`,
    reviewData
  );
  return res.data;
};

//상세페이지 리뷰 update
export const updateReview = async (id: number, review: Partial<ReviewData>) => {
  const res = await axios.patch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/${id}`,
    review
  );
  return res.data;
};

//상세페이지 리뷰 delete
export const deleteReview = async (id: number) => {
  await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/${id}`);
  return id;
};
