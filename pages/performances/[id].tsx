import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
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
    <div className="flex justify-center w-full">
      <div className="mx-80 flex-col w-2/3 min-h items-center">
        <div className="flex w-full flex-row">
          <div className="w-1/2">
            {data[0] && (
              <Image
                src={data[0].img}
                alt="메인 이미지"
                width={550}
                height={400}
              />
            )}
          </div>
          <div className="w-1/2">
            <div className="mx-12 my-16">
              {data[0] && (
                <>
                  <div className="text-4xl font-bold">{data[0].name}</div>
                  <div className="my-8">
                    <div className="text-xl font-bold">
                      공연 기간: {data[0].start} ~ {data[0].end}
                    </div>
                    <div>장소: {data[0].place}</div>
                    <div>장르: {data[0].genre}</div>
                    <div>{data[0].prfstate}</div>
                    <div>공연 소요시간: {data[0].runtime}</div>
                    <div>연령: {data[0].age}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-black pt-24">
          {data[0] &&
            data[0].styurls.map((el: any, idx: number) => (
              // <img key={idx} src={el} alt={`image ${idx}`} />
              <Image
                key={idx}
                src={el}
                alt={`image ${idx}`}
                width={420}
                height={380}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
export default DetailPage;
