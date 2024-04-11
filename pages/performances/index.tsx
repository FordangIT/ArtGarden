import dynamic from "next/dynamic";
import SearchCondition from "@/components/performances/SearchCondition";
const AllPerformances = dynamic(
  import("@/components/performances/AllPerformances")
);

//공연 전체 정보 페이지
function Performances() {
  return (
    <div className="flex-col">
      <SearchCondition />
      <AllPerformances />
    </div>
  );
}
export default Performances;
