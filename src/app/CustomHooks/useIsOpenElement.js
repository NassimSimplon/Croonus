"use client";
import { useCallback, useState } from "react";

const useIsOpenElement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openElement = useCallback(() => setIsOpen(true), []);
  const closeElement = useCallback(() => setIsOpen(false), []);
  const toggleElement = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    openElement,
    closeElement,
    toggleElement,
  };
};

export default useIsOpenElement;
