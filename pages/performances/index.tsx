import AllProducts from "@/components/performances/AllProducts";
import SearchCondition from "@/components/performances/SearchCondition";
function Performances() {
  return (
    <div className="flex-col">
      <SearchCondition />
      <AllProducts />
    </div>
  );
}
export default Performances;
