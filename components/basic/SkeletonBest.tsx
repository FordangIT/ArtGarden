function SkeletonBest({ cards }: any) {
  return Array(cards)
    .fill(0)
    .map((_, idx) => (
      <div
        className="flex flex-col gap-4 w-[26rem] h-[30rem] items-center"
        key={idx}
      >
        <div className="skeleton h-60 w-full"></div>
        <div className="flex flex-col gap-4 mt-6 w-[22rem]">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="flex justify-end">
            <div className="skeleton h-4 w-20 "></div>
            <div className="skeleton h-4 w-20 ml-2"></div>
          </div>
        </div>
      </div>
    ));
}

export default SkeletonBest;
