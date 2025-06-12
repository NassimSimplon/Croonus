"use client";
import "./ProjectSection.css";
import ArrowIcon from "@/app/Icons/ArrowIcon";
import Link from "next/link";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";
import { projectList } from "@/app/data/projectData";

const ProjectSection = () => {
  const { setRef, isInView } = useMultiScrollReveal(0.9);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);
  const touchStartX = useRef(0);
  const scrollStep = 300;

  useEffect(() => {
    const handleResize = () => {
      setFade(window.innerWidth > 1220);
      setIsMobile(window.innerWidth < 480);
      updateScrollButtons();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateScrollButtons = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(currentScroll > 0);
    setCanScrollRight(currentScroll < maxScroll - 10); // 10px buffer for rounding errors
  }, []);

  const scrollTo = useCallback(
    (direction) => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      let targetScroll;
      if (direction === "left") {
        targetScroll = Math.max(currentScroll - scrollStep, 0);
      } else {
        targetScroll = Math.min(currentScroll + scrollStep, maxScroll);
      }

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });

      // Update button states after scroll completes
      setTimeout(updateScrollButtons, 300);
    },
    [updateScrollButtons]
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Add scroll event listener to update button states
    container.addEventListener("scroll", updateScrollButtons);
    return () => container.removeEventListener("scroll", updateScrollButtons);
  }, [updateScrollButtons]);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      const threshold = 50;
      const touchEndX = e.changedTouches[0].clientX;
      const difference = touchStartX.current - touchEndX;

      if (difference > threshold) {
        scrollTo("right"); // Swipe left = scroll right
      } else if (difference < -threshold) {
        scrollTo("left"); // Swipe right = scroll left
      }
    },
    [scrollTo]
  );

  return (
    <section className="project-section">
      <h1
        className={`project-section_title ${
          isInView("project-section_title")
            ? "fade-up-element"
            : "hidden-element"
        }`}
        ref={setRef("project-section_title")}
        data-scroll-id="project-section_title"
      >
        Naši projekti<span>.</span>
      </h1>
      <div className="scroller-wrapper">
        {!isMobile && (
          <button
            className="scroll-button left"
            onClick={() => scrollTo("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll Left"
          >
            <ArrowIcon className="left-arrow" />
          </button>
        )}

        <div
          className="scroll-container"
          ref={scrollContainerRef}
          onTouchStart={isMobile ? handleTouchStart : null}
          onTouchEnd={isMobile ? handleTouchEnd : null}
        >
          <div className="scroll-content">
            {projectList.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                isInView={isInView}
                setRef={setRef}
                fade={fade}
              />
            ))}
          </div>
        </div>

        {!isMobile && (
          <button
            className="scroll-button right"
            onClick={() => scrollTo("right")}
            disabled={!canScrollRight}
            aria-label="Scroll Right"
          >
            <ArrowIcon />
          </button>
        )}
      </div>
      <Link href="/Projects">
        <p
          className={`project-section-footer ${
            isInView("project-section-footer")
              ? "fade-up-element"
              : "hidden-element"
          }`}
          ref={setRef("project-section-footer")}
          data-scroll-id="project-section-footer"
        >
          Pogledajte sve projekte
        </p>
      </Link>
    </section>
  );
};

export default ProjectSection;
