import { FC } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading() {
  <>
    <Skeleton />
    <Skeleton count={5} />
  </>;
}

export default Loading;
