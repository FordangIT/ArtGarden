import { useEffect, useState } from "react";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import { MdShare } from "react-icons/md";
import { fetchPerformanceDetails } from "@/lib/api/datailpage";
import { fetchDetailPerformanceReview } from "@/lib/api/reviews";
import DetailSection, {
  DetailSection2
} from "@/components/reviews/DetailSection";
import DetailReview from "@/components/reviews/DetailReview";
import axios from "axios";
import { FavoriteButton } from "@/lib/components/FavoriteButton";
import Link from "next/link";
interface DetailPerformance_TYPE {
  0: {
    id: string;
    name: string;
    img: string;
    start: string;
    end: string;
    place: string;
    genre: string;
    state: string;
    cast: string;
    runtime: string;
    age: string;
    price: string;
    story: string;
    prfstate: string;
    styurls: string[];
    relates: string;
  };
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
  id: string;
  data: DetailPerformance_TYPE;
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
  const id = props.id;
  const data = props.data[0];
  const [reviews, setReviews] = useState(props.reviews);

  return (
    <div className="flex justify-center items-center">
      <div className="w-full px-2 sm:w-2/3 ">
        <div className="flex items-center justify-center w-ful">
          <div className="flex flex-col h-full lg:flex-row justify-center items-center w-full mt-6">
            <div className="flex flex-auto justify-center items-center h-full  w-[26rem] lg:pr-10 lg:w-[40rem] lg:h-[30rem]">
              {data && (
                <Image
                  src={data.img}
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
                    <FavoriteButton item={id} />
                    <div className="border-[1px] p-2 border-black ml-1">
                      <MdShare className="w-8 h-8 font-light text-black" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold mb-4 leading-normal ">
                    {data.name}
                  </div>
                  <div className="w-full h-1 bg-gray-100 mb-7"></div>
                  <div className=" mb-10 2xl:mb-10 3xl:mb-20">
                    <div className="xl:text-xl 2xl:text-2xl flex justify-end mb-7">
                      {data.start} ~ {data.end}
                    </div>
                    <div className="mt-10 text-lg 2xl:text-xl">
                      <div className="mb-4">
                        <span className=" font-semibold">장소 : </span>
                        {data.place}
                      </div>
                      <div className="mb-4">
                        <span className=" font-semibold">장르 : </span>
                        {data.genre}
                      </div>
                      <div className="mb-4">
                        <span className=" font-semibold">{data.prfstate}</span>
                      </div>
                      <div className="mb-4">
                        <span className=" font-semibold">
                          공연 소요시간 :{}
                        </span>
                        {data.runtime}
                      </div>
                      <div className="mb-4">
                        <span className=" font-semibold">연령 : </span>
                        {data.age}
                      </div>
                      <div>
                        <span className=" font-semibold">가격 : </span>
                        {data.price}
                      </div>
                    </div>
                  </div>
                  <Link href={data.relates}>
                    <div className="bg-deep-blue font-semibold text-xl text-white w-full h-16 flex justify-center items-center">
                      예매하러 가기
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <DetailSection />
        <section id="detail">
          <div className="flex justify-center items-center w-4/7 min-h">
            <div className="flex-col">
              {data &&
                data.styurls.map((el: any, idx: number) => (
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
        </section>
        <DetailSection2 />
        <DetailReview id={id} reviews={reviews} />
      </div>
    </div>
  );
}
export default DetailPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  const detailPerformance = await fetchPerformanceDetails(id);
  const detailPerformanceReview = await fetchDetailPerformanceReview(
    id as string,
    1
  );
  return {
    props: {
      id,
      data: detailPerformance,
      reviews: detailPerformanceReview
    }
  };
}
