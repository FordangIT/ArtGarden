import Image from "next/image";
import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";

interface Review_Data {
  id: string;
  perform_id: string;
  content: string;
  rate: number;
  member_id: number;
  created_at: string;
  modified_at: string;
}
const Reviews = () => {
  const { data, isLoading, isError, error } = useQuery<Review_Data[]>(
    "reviewData",
    async () => {
      const res: AxiosResponse<Review_Data[]> = await axios.get(
        "http://3.34.188.24/reviews"
      );
      return res.data;
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{(error as Error).message}</div>;
  }
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {data &&
          data?.map((el) => (
            <div
              key={el.id}
              className="card w-80 h-96 bg-white shadow-xl rounded-xl border-2 border-white"
            >
              <figure>
                {/* <Image
                  src={el.perform_id}
                  alt="review-image"
                  width={420}
                  height={380}
                /> */}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{el.perform_id}</h2>
                <h3>사용자: {el.member_id}</h3>
                <h3>별점: {el.rate}</h3>
                <h3>내용: {el.content}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Reviews;
