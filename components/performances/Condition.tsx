import { useEffect, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLocal, setSort } from "@/redux/slices/performanceSlice";
import { RootState } from "@/redux/store";

interface Region {
  cdnm: string;
  cdengnm: string;
  code: string;
}

export default function Condition() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Region[]>([]);
  const selectedRegions = useSelector(
    (state: RootState) => state.performance.local
  );
  const selectedSort = useSelector(
    (state: RootState) => state.performance.sort
  );
  const dispatch = useDispatch();

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleRegionChange = (region: string) => {
    dispatch(
      setLocal(
        selectedRegions.includes(region)
          ? selectedRegions.filter((r) => r !== region)
          : [...selectedRegions, region]
      )
    );
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSort(event.target.value));
  };

  const applyConditions = () => {
    closeModal();
  };

  const getRegionNames = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/common/codeList?cdtype=1&uppcd=AREA&cddepth=2`
      );
      return res.data;
    } catch (error) {
      console.log("error", error);
      throw new Error("error fetching data");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRegionNames();
        console.log(res.codeList, "data");
        setData(res.codeList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <button
        className="flex justify-evenly items-center border-[1px] border-gray-500 rounded-lg text-black bg-white w-full h-full text-sm font-semibold "
        onClick={openModal}
      >
        <LuSettings2 />
        <div>상세검색</div>
      </button>
      {open && (
        <dialog className="modal bg-[#999999] bg-opacity-30" open>
          <div className="relative bg-white w-96 h-[28rem] lg:w-[45rem] lg:h-96 rounded-md shadow-2xl">
            <form method="dialog" onSubmit={closeModal}>
              <div className="flex flex-row justify-center items-center py-9 border-b-[1px] border-gray-300">
                <div className="basis-1/5 flex justify-center items-center font-semibold">
                  정렬순
                </div>
                <div className="basis-4/5">
                  <div className="basis-4/5 grid grid-cols-3 lg:grid-cols-6 lg:gap-4 items-center p-4">
                    <div className="col-span-1 flex items-center space-x-1">
                      <input
                        type="radio"
                        id="latest"
                        name="sorting"
                        value="latest"
                        checked={selectedSort === "latest"}
                        onChange={handleSortChange}
                      />
                      <label htmlFor="latest">최신순</label>
                    </div>
                    <div className="col-span-1 flex items-center space-x-1">
                      <input
                        type="radio"
                        id="views"
                        name="sorting"
                        value="popular"
                        checked={selectedSort === "popular"}
                        onChange={handleSortChange}
                      />
                      <label htmlFor="views">조회순</label>
                    </div>
                    <div className="col-span-1 flex items-center space-x-1">
                      <input
                        type="radio"
                        id="likes"
                        name="sorting"
                        value="scrap"
                        checked={selectedSort === "scrap"}
                        onChange={handleSortChange}
                      />
                      <label htmlFor="likes">찜하기순</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center py-5 lg:py-9">
                <div className="basis-1/5 flex justify-center items-center font-semibold">
                  지역
                </div>
                <div className="basis-4/5 grid grid-cols-3 gap-3 lg:grid-cols-6 lg:gap-4 items-center p-4">
                  {data.length > 0 ? (
                    data.map((region) => (
                      <div
                        key={region.cdengnm}
                        className="col-span-1 flex items-center space-x-1"
                      >
                        <input
                          type="checkbox"
                          id={region.code}
                          name={region.code}
                          value={region.code}
                          checked={selectedRegions.includes(region.code)}
                          onChange={() => handleRegionChange(region.code)}
                        />
                        <label htmlFor={region.code}>{region.cdnm}</label>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <button
                type="button"
                className="flex justify-between items-center bg-main-pink absolute right-4 bottom-2 px-2 py-2 rounded-md text-sm text-white font-semibold tracking-wide"
                onClick={applyConditions}
              >
                저장하기
              </button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}
