import Link from "next/link";
export default function DetailSection() {
  return (
    <div className="flex w-full">
      <div className="flex justify-center items-center w-full h-16 my-16">
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
  );
}

export function DetailSection2() {
  return (
    <div className="flex justify-center items-center my-16">
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
  );
}
