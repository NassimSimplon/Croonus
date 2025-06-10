"use client";
import "./ProjectSection.css";
import ArrowIcon from "@/app/Icons/ArrowIcon";
import Link from "next/link";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";
import React, { useCallback, useEffect, useState } from "react";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";
import { useHorizontalScroll } from "@/app/CustomHooks/useHorizontalScroll";
import { projectList } from "@/app/data/projectData";

const ProjectSection = () => {
  const { containerRef, canScrollLeft, canScrollRight, scroll } =
    useHorizontalScroll(316);
  const { setRef, isInView } = useMultiScrollReveal(0.9);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setFade(window.innerWidth > 1220);
      setIsMobile(window.innerWidth < 480);
    };
    
    handleResize(); // Initialize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      scroll("right");
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      scroll("left");
    }
  }, [touchStart, touchEnd, scroll]);

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
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll Left"
          >
            <ArrowIcon className="left-arrow" />
          </button>
        )}

        <div 
          className="scroll-container" 
          ref={containerRef}
          onTouchStart={isMobile ? handleTouchStart : null}
          onTouchMove={isMobile ? handleTouchMove : null}
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
            onClick={() => scroll("right")}
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