import CreateReviewForm from "@/components/reviews/CreateReviewForm";
import ReviewList from "@/components/reviews/ReviewList";
import { DetailReview_TYPE } from "@/pages/performances/[id]";
import { ReviewData } from "@/lib/api/reviews";
interface PropsType {
  id: string;
  reviews: DetailReview_TYPE;
}

export default function DetailReview({ id, reviews }: PropsType) {
  return (
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
                <CreateReviewForm id={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center xl:mx-16">
        <div className="bg-black w-full">
          <div className="font-semibold text-3xl my-10 text-white mx-9">
            개수({reviews.data.length})
          </div>
          <div className="h-fit flex justify-center items-center">
            <div className="flex justify-center items-center w-full bg-black">
              <ReviewList id={id} props={reviews} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
