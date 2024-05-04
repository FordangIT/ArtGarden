import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
interface Review_Full {
  data: Review_Data[];
}
interface Review_Data {
  name: string;
  reviewid: string;
  performid: string;
  content: string;
  rate: number;
  regdt: string;
  membierid: string;
  genre: string;
  posterurl: string;
}
export async function loadNew() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/performances/new`
  );
  const data = await res.json();
  console.log("loadNew 함수 데이터");
  return data;
}

export async function loadBest() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/performances/best`
    );
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error fetching data", error);
    throw new Error("failed to fetch data");
  }
}

export async function loadReview() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews?page=1&size=8`
  );
  const data = await res.json();
  return data.data;
}
