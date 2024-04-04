import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import CreateReview from "@/components/performances/CreateReview";
//공연 상세 정보 페이지
function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

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
    console.log(id, "id");
    console.log(data[0], "data");
  }, [id]);
  return (
    <div className="flex justify-center items-center ">
      <div className="flex-col min-h w-full justify-center items-center">
        <div className="flex justify-center items-center bg-deep-blue">
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
                  <div className="text-white">
                    <div className="text-5xl font-bold mt-20 mb-20">
                      {data[0].name}
                    </div>
                    <div className="mt-8">
                      <div className="text-2xl font-bold mb-20 flex justify-end">
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
                            공연 소요시간 :{" "}
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/7 flex">
          <CreateReview />
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
