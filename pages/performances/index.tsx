import SearchCondition from "@/components/performances/SearchCondition";
import AllPerformances from "@/components/performances/AllPerformances";

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
