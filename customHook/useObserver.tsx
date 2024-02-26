import { useEffect, useRef } from "react";
interface IntersectionObserverProps {
  target: React.MutableRefObject<HTMLElement | null>;
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

export const useObserver = ({
  target, //감지할 대상 (여기서는 ref 전달)
  root = null, //교차할 부모 요소 (default : document)
  rootMargin = "0px", // root와 target이 감지하는 여백의 거리
  threshold = 1.0, // 임계점으로 1.0이면 root내에서 target이 100% 보여질 때 callback이 실행된다.
  onIntersect, //target 감지 시 실행할 callback 함수
}: IntersectionObserverProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (target.current) {
      observer.current = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });
      observer.current.observe(target.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [target, rootMargin, threshold, onIntersect]);
};
