import { useRef, useState, useEffect } from "react";
export const useScroll = () => {
  const scrollRef = useRef<HTMLElement | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState(NaN);

  const reportScroll = (e: any) => {
    setScrollPercentage(getScrollPercentage(e.target));
  };

  useEffect(() => {
    const node = scrollRef.current;
    if (node !== null) {
      node.addEventListener("scroll", reportScroll, { passive: true });
      if (Number.isNaN(scrollPercentage)) {
        setScrollPercentage(getScrollPercentage(node));
      }
    }
    return () => {
      if (node !== null) {
        node.removeEventListener("scroll", reportScroll);
      }
    };
  }, [scrollPercentage]);

  return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage];
};

function getScrollPercentage(element: HTMLElement | null) {
  if (element === null) {
    return NaN;
  }

  const width = element.scrollWidth - element.clientWidth;
  return Math.round((element.scrollLeft / width) * 100);
}
