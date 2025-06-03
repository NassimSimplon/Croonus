import { useCallback, useEffect, useRef, useState } from "react";

export const useHorizontalScroll = (scrollStep) => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  }, [containerRef]);

  const scroll = useCallback(
    (dir) => {
      const el = containerRef.current;
      if (!el) return;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth && dir === "right") {
        el.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else if (el.scrollLeft === 0 && dir === "left") {
        el.scrollTo({
          left: el.scrollWidth - el.clientWidth,
          behavior: "smooth",
        });
      } else {
        el.scrollBy({
          left: dir === "left" ? -scrollStep : scrollStep,
          behavior: "smooth",
        });
      }
    },
    [scrollStep]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateScrollState();

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  return {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scroll,
  };
};
