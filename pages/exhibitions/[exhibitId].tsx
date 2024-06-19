import { useEffect, useState } from "react";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import ShareKakaoButton from "@/lib/components/ShareKakaoButton";
import { fetchExhibitionDetails } from "@/lib/api/datailpage";
import { fetchDetailExhibitionReview } from "@/lib/api/reviews";
import DetailReview from "@/components/reviews/DetailReview";

import { FavoriteButton } from "@/lib/components/FavoriteButton";
interface DetailExhibition_TYPE {
  id: string;
  name: string;
  posterurl: string;
  startdate: string;
  enddate: string;
  area: string;
  place: string;
  genre: string;
  status: string;
}
export interface DetailReview_TYPE {
  data: {
    name: string;
    content: string;
    genre: string;
    memberid: string;
    performid: string;
    posterurl: string;
    rate: number;
    regdt: string;
    reviewid: number;
  }[];
  hasNext: boolean;
  pageNo: number;
  totalPages: number;
}
export interface DetailPage_TYPE {
  exhibitId: string;
  data: DetailExhibition_TYPE;
  reviews: DetailReview_TYPE;
}

export interface ReviewData {
  reviewid: number;
  content: string;
  rate: number;
  memberid: string;
  regdt: string;
}

export interface ReviewCreate_TYPE {
  performid: string;
  content: string;
  rate: number;
  memberid: string;
}
//공연 상세 정보 페이지
function DetailPage(props: DetailPage_TYPE) {
  const id = props.exhibitId;
  const data = props.data;
  const [reviews, setReviews] = useState(props.reviews);

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
                    <div className="border-[1px] border-black ml-1 p-1">
                      <ShareKakaoButton url={`/exhibitions/${id}`} />
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
                        <span className=" font-semibold">지역 : </span>
                        {data.area}
                      </div>
                      <div className="mb-4">
                        <span className=" font-semibold">장소 : </span>
                        {data.place}
                      </div>
                      <div className="mb-4">
                        <span className=" font-semibold">장르 : </span>
                        {data.genre}
                      </div>
                      <div className="mb-4">
                        <span className=" font-semibold">상태 : </span>
                        {data.status}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <DetailReview id={id} reviews={reviews} />
      </div>
    </div>
  );
}
export default DetailPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { exhibitId } = context.query;
  const detailExhibition = await fetchExhibitionDetails(exhibitId);
  const detailExhibitionReview = await fetchDetailExhibitionReview(
    exhibitId as string,
    1
  );
  return {
    props: {
      exhibitId,
      data: detailExhibition,
      reviews: detailExhibitionReview
    }
  };
}
