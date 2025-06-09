"use client";
import "./ProjectSection.css";
import ArrowIcon from "@/app/Icons/ArrowIcon";
import Link from "next/link";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";
import React, { useEffect, useState } from "react";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";
import { useHorizontalScroll } from "@/app/CustomHooks/useHorizontalScroll";
import { projectList } from "@/app/data/projectData";

const ProjectSection = () => {
  const { containerRef, canScrollLeft, canScrollRight, scroll } =
    useHorizontalScroll(316);
  const { setRef, isInView } = useMultiScrollReveal(0.9);
  const [fade, setFade] = useState(true);
useEffect(() => {
  setFade(window.innerWidth > 1220);
}, []);
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
        <button
          className="scroll-button left"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll Left"
        >
          <ArrowIcon className="left-arrow" />
        </button>

        <div className="scroll-container" ref={containerRef}>
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
        <button
          className="scroll-button right"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll Right"
        >
          <ArrowIcon />
        </button>
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
