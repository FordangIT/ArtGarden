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
  const res = await fetch("http://localhost:3060/api/performances/new");
  const data = await res.json();
  return data;
}

export async function loadBest() {
  try {
    const response = await fetch("http://localhost:3060/api/performances/best");
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
  const res = await fetch(`https://artgarden.site/reviews?page=1&size=8`);
  const data = await res.json();
  return data.data;
}
