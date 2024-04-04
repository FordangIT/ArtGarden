function SkeletonNew({ cards }: any) {
  return (
    <div className="flex flex-row gap-10 justify-center items-center">
      {Array(cards)
        .fill(0)
        .map((_, idx) => (
          <div className="flex-col w-[20rem] h-[32rem] items-center" key={idx}>
            <div className="skeleton h-80 w-full"></div>
            <div className="flex flex-col gap-4 mt-6 w-full">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="flex justify-end">
                <div className="skeleton h-4 w-20 "></div>
                <div className="skeleton h-4 w-20 ml-2"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SkeletonNew;
