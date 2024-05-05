import { useEffect, useState } from "react";
import Image from "next/image";
import CreateReview from "@/components/performances/CreateReview";
import { ReadReview } from "@/components/performances/ReadReview";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { Anchor } from "@/lib/anchore";
import axios from "axios";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite
} from "@/redux/slices/favoriteSlice";
import { RootState } from "@/redux/store";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdShare } from "react-icons/md";
interface PropsType {
  id: string;
}
//공연 상세 정보 페이지
function DetailPage(props: PropsType) {
  const { id } = props;
  const [data, setData] = useState<Array<any>>([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.list);

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

  const handleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-2/3 ">
        <div className="flex items-center justify-center w-ful">
          <div className="flex flex-col h-full lg:flex-row justify-center items-center w-full mt-6">
            <div className="flex flex-auto justify-center items-center h-full  w-[26rem] lg:pr-10 lg:w-[40rem] lg:h-[30rem]">
              {data[0] && (
                <Image
                  src={data[0].img}
                  alt="메인 이미지"
                  width={500}
                  height={400}
                  className="rounded-3xl border-2 w-full h-full"
                />
              )}
            </div>
            <div className="flex flex-auto w-full">
              {data[0] && (
                <div className="text-black w-full">
                  <div className="flex justify-end items-center my-4">
                    <div
                      onClick={() => handleFavorite(id)}
                      className="border-[1px] border-black p-2"
                    >
                      {favorites.includes(id) ? (
                        <FaHeart className="w-8 h-8 font-light text-main-pink" />
                      ) : (
                        <FaRegHeart className="w-8 h-8  font-light " />
                      )}
                    </div>
                    <div className="border-[1px] p-2 border-black ml-1">
                      <MdShare className="w-8 h-8 font-light text-black" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold mb-4 leading-normal ">
                    {data[0].name}
                  </div>
                  <div className="w-full h-1 bg-gray-100 mb-7"></div>
                  <div className=" mb-10 2xl:mb-10 3xl:mb-20">
                    <div className="xl:text-xl 2xl:text-2xl flex justify-end mb-7">
                      {data[0].start} ~ {data[0].end}
                    </div>
                    <div className="mt-10 text-lg 2xl:text-xl">
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
        <div className="flex w-full">
          <div className="flex justify-center items-center w-full h-16 my-20">
            <div className="border-[1px] border-x-black border-t-black border-b-0 w-1/2 h-full ">
              <Link
                href="#detail"
                className="flex justify-center items-center h-full"
              >
                <div className="flex justify-center items-center font-semibold h-full">
                  공연 상세 정보
                </div>
              </Link>
            </div>
            <div className="border-[1px] w-1/2 h-full border-b-black bg-review-section">
              <Link
                href="#review"
                className="flex justify-center items-center h-full"
              >
                <div className="flex justify-center items-center font-medium h-full">
                  공연 리뷰
                </div>
              </Link>
            </div>
          </div>
        </div>
        <section id="detail">
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
        </section>
        <div className="flex justify-center items-center md:mx-16 my-20">
          <div className="flex justify-center items-center w-full h-16">
            <div className="border-[1px] w-1/2 h-full border-b-black bg-review-section ">
              <Link
                href="#detail"
                className="flex justify-center items-center h-full"
              >
                <div className="flex justify-center items-center font-medium h-full">
                  공연 상세 정보
                </div>
              </Link>
            </div>
            <div className="border-[1px] w-1/2 h-full border-x-black border-t-black border-b-0">
              <Link
                href="#review"
                className="flex justify-center items-center h-full"
              >
                <div className="flex justify-center items-center  font-semibold h-full">
                  공연 리뷰
                </div>
              </Link>
            </div>
          </div>
        </div>
        <section id="review">
          <div className="flex justify-center items-center xl:mx-16">
            <div className="bg-black w-full flex-col mt-20 px-10 justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="w-full h-1/3">
                  <div className="flex justify-start items-center">
                    <div className="font-semibold text-3xl my-10 text-white">
                      리뷰 작성
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <div className="w-full h-2/3">
                  <div className="flex items-center justify-center w-full">
                    <CreateReview id={id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center xl:mx-16">
            <div className="bg-black w-full">
              <div className="font-semibold text-3xl my-10 text-white mx-9">
                리뷰(개수)
              </div>
              <div className="h-fit flex justify-center items-center">
                <div className="flex justify-center items-center w-full bg-black">
                  <ReadReview id={id} />
                </div>
              </div>
            </div>
          </div>
        </section>
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
      id: id as string
    }
  };
}
