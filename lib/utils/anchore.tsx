import Link from "next/link";
interface AnchorProps {
  text: string;
}
export function Anchor(props: AnchorProps) {
  <div className="flex justify-center items-center mx-16 my-20">
    <div className="flex justify-center items-center w-2/3 h-16 ">
      <div className="border-[1px] border-x-black border-t-black border-b-0 w-1/2 h-full ">
        <Link
          href="#detail"
          className="flex justify-center items-center h-full"
        >
          <div className="flex justify-center items-center font-semibold h-full">
            {props.text} 상세 정보
          </div>
        </Link>
      </div>
      <div className="border-[1px] w-1/2 h-full border-b-black bg-review-section">
        <Link
          href="#review"
          className="flex justify-center items-center h-full"
        >
          <div className="flex justify-center items-center font-medium h-full">
            {props.text} 리뷰
          </div>
        </Link>
      </div>
    </div>
  </div>;
}
