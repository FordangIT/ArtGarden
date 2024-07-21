import Image from "next/image";
import ShareKakaoButton from "@/lib/components/ShareKakaoButton";
import { loadDetailPopupStore } from "@/lib/api/loadData";
import { FavoriteButton } from "@/lib/components/FavoriteButton";
import Link from "next/link";
import { PopupStore_TYPE } from "@/pages";
import { GetServerSidePropsContext } from "next";
//공연 상세 정보 페이지

interface DetailPopup_TYPE {
  id: string;
  data: PopupStore_TYPE;
}
function DetailPage(props: DetailPopup_TYPE) {
  const id = props.id;
  const data = props.data;
  return (
    <div className="flex justify-center items-center">
      <div className="w-full px-2 sm:w-2/3 ">
        <div className="flex items-center justify-center w-ful">
          <div className="flex flex-col h-full lg:flex-row justify-center items-center w-full mt-6">
            <div className="flex flex-auto justify-center items-center h-full  w-[26rem] lg:pr-10 lg:w-[40rem] lg:h-[30rem]">
              {data && (
                <Image
                  src={data.posterurl}
                  alt="메인 이미지"
                  width={500}
                  height={400}
                  className="rounded-3xl border-2 w-full h-full"
                />
              )}
            </div>
            <div className="flex flex-auto w-full">
              {data && (
                <div className="text-black w-full">
                  <div className="flex justify-end items-center my-4">
                    <div className="border-[1px] border-black p-2 ">
                      <FavoriteButton item={id} />
                    </div>
                    <div className="border-[1px] border-black ml-1 p-2 flex justify-center items-center">
                      <ShareKakaoButton data={data} />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold mb-4 leading-normal ">
                    {data.name}
                  </div>
                  <div className="w-full h-1 bg-gray-100 mb-7"></div>
                  <div className=" mb-10 2xl:mb-10 3xl:mb-20">
                    <div className="xl:text-xl 2xl:text-2xl flex justify-end mb-7">
                      {data.startdate} ~ {data.enddate}
                    </div>
                    <div className="mt-10 text-lg 2xl:text-xl">
                      <div className="mb-4">
                        <span className=" font-semibold">지역 :</span>
                        {data.area}
                      </div>
                      <div className="mb-4">
                        <span className=" font-semibold">장소 :</span>
                        {data.place}
                      </div>
                      <div className="mb-4">
                        <span className=" font-semibold">장르 :</span>
                        {data.genre}
                      </div>
                      <div className="mb-4">
                        <span className=" font-semibold">시간 : </span>
                        {data.time}
                      </div>
                      <div className="mb-4">
                        <span className=" font-semibold">상태 : </span>
                        {data.status}
                      </div>
                    </div>
                  </div>
                  {data.link && (
                    <Link href={data.link} target="_blank">
                      <div className="bg-deep-blue font-semibold text-xl text-white w-full h-16 flex justify-center items-center">
                        인스타그램 바로가기
                      </div>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-4/7 min-h mt-10">
          <div className="flex-col">
            {data &&
              data.posterarray.map((el: any, idx: number) => (
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query;
  try {
    const data = await loadDetailPopupStore(id as string);

    return {
      props: {
        id,
        data
      }
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true
    };
  }
};
