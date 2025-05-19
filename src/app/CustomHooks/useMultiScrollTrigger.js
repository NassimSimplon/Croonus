import { useEffect, useRef, useState } from "react";

 
const getScrollParent = (element) => {
  if (!element) return null;

  let parent = element.parentElement;
  while (parent) {
    const style = window.getComputedStyle(parent);
    const overflowY = style.getPropertyValue("overflow-y");
    if (overflowY === "auto" || overflowY === "scroll") {
      return parent;
    }
    parent = parent.parentElement;
  }
  return null;
};

 
const handleEntry = (entry, observer, triggerOnce, setVisibleIds) => {
  const id = entry.target.dataset.scrollId;
  if (entry.isIntersecting && id) {
    setVisibleIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    if (triggerOnce) observer.unobserve(entry.target);
  }
};

 
const createObserver = (elements, scrollContainer, threshold, triggerOnce, setVisibleIds) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => handleEntry(entry, observer, triggerOnce, setVisibleIds));
    },
    { threshold, root: scrollContainer }
  );

  elements.forEach((el) => observer.observe(el));
  return observer;
};

const useMultiScrollTrigger = (threshold = 0.1, triggerOnce = true) => {
  const elementsRef = useRef(new Map());      
  const observersRef = useRef(new Map());  
  const [visibleIds, setVisibleIds] = useState(new Set());

  const setRef = (id) => (node) => {
    if (node) {
      elementsRef.current.set(id, node);
    } else {
      elementsRef.current.delete(id);
    }
  };

  const setupObservers = () => {
    const scrollGroups = new Map();  

    elementsRef.current.forEach((el) => {
      const scrollParent = getScrollParent(el);
      const key = scrollParent || null;
      if (!scrollGroups.has(key)) scrollGroups.set(key, new Set());
      scrollGroups.get(key).add(el);
    });

    scrollGroups.forEach((elements, scrollContainer) => {
      const observer = createObserver(elements, scrollContainer, threshold, triggerOnce, setVisibleIds);
      observersRef.current.set(scrollContainer, observer);
    });
  };

  const cleanupObservers = () => {
    observersRef.current.forEach((observer) => observer.disconnect());
    observersRef.current.clear();
  };

  const handleResize = () => {
    cleanupObservers();
    setupObservers();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    setupObservers();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cleanupObservers();
    };
  }, [threshold, triggerOnce]);

  const isInView = (id) => visibleIds.has(id);

  return { setRef, isInView };
};

export default useMultiScrollTrigger;
