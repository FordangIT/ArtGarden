import axios from "axios";

interface PerformanceDetail {
  id: string;
  name: string;
  img: string;
  place: string;
  genre: string;
  start: string;
  end: string;
  prfstate: string;
  runtime: string;
  age: string;
  price: string;
  styurls: string[];
}

// 공연 상세 정보를 가져오는 함수
export const fetchPerformanceDetails = async (
  id: string | string[] | undefined
): Promise<PerformanceDetail[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/performances/${id}`
  );
  const data = await res.json();
  return data;
};
