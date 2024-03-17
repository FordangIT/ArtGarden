import SearchCondition from "@/components/performances/SearchCondition";
import AllPerformances from "@/components/performances/AllPerformances";
// import Test from "@/components/performances/test";

//공연 전체 정보 페이지
function Performances() {
  return (
    <div className="flex-col">
      <AllPerformances />
      <SearchCondition />
    </div>
  );
}
export default Performances;
