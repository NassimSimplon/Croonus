"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export const useHorizontalScroll = (scrollStep = 316) => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateButtons = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  const scroll = useCallback((dir) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -scrollStep : scrollStep, behavior: "smooth" });
  }, [scrollStep]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateButtons();
    el.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  return {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scroll,
  };
};
