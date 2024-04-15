import { useEffect, useState } from "react";
import Image from "next/image";
import CreateReview from "@/components/performances/CreateReview";
import { ReadReview } from "@/components/performances/ReadReview";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { useMutation } from "react-query";

interface PropsType {
  id: string;
}
//공연 상세 정보 페이지
function DetailPage(props: PropsType) {
  const { id } = props;
  //send a request to the backend api
  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/performances/${id}`);
          if (!response.ok) {
            throw new Error("failed to fetch data");
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("error fetching datat", error);
        }
      };
      fetchData();
    }
  }, [id, data]);

  return (
    <div className="flex justify-center items-center ">
      <div className="flex-col min-h w-full justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="flex w-2/3">
            <div className="w-1/2 flex justify-center items-center">
              {data[0] && (
                <Image
                  src={data[0].img}
                  alt="메인 이미지"
                  width={500}
                  height={400}
                  className="rounded-3xl border-2 my-10"
                />
              )}
            </div>
            <div className="flex justify-center w-1/2 mx-12 my-12">
              <div className="">
                {data[0] && (
                  <div className="text-black">
                    <div>별점 총점(리뷰 몇개),찜하기, 공유하기</div>
                    <div className="text-5xl font-bold mt-6 mb-4 leading-normal">
                      {data[0].name}
                    </div>
                    <div className="w-full h-1 bg-gray-100 mb-7"></div>
                    <div className="mb-20">
                      <div className="text-2xl flex justify-end mb-7">
                        {data[0].start} ~ {data[0].end}
                      </div>
                      <div className="mt-10 text-lg">
                        <div className="mb-4">
                          <span className=" font-semibold">장소 : </span>
                          {data[0].place}
                        </div>
                        <div className="mb-4">
                          <span className=" font-semibold">장르 : </span>
                          {data[0].genre}
                        </div>
                        <div className="mb-4">
                          <span className=" font-semibold">
                            {data[0].prfstate}
                          </span>
                        </div>
                        <div className="mb-4">
                          <span className=" font-semibold">
                            공연 소요시간 :{}
                          </span>
                          {data[0].runtime}
                        </div>
                        <div className="mb-4">
                          <span className=" font-semibold">연령 : </span>
                          {data[0].age}
                        </div>
                        <div>
                          <span className=" font-semibold">가격 : </span>
                          {data[0].price}
                        </div>
                      </div>
                    </div>

                    <div className="bg-deep-blue font-semibold text-xl text-white w-full h-16 flex justify-center items-center">
                      예매하러 가기
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/7 flex">
          <CreateReview id={id} />
        </div>
        <div className="">
          <ReadReview id={id} />
        </div>
        <div className="flex justify-center items-center w-4/7 min-h">
          <div className="flex-col">
            {data[0] &&
              data[0].styurls.map((el: any, idx: number) => (
                <Image
                  key={idx}
                  src={el}
                  alt={`image ${idx}`}
                  width={940}
                  height={400}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailPage;

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<{ props: { id: string } }> {
  const { id } = context.query;
  return {
    props: {
      id: id as string,
    },
  };
}
