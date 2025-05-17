"use client";
import "./ProjectSection.css";
import Link from "next/link";
import React from "react";
import ResponsiveImage from "@/app/MediaReaders/ResponsiveImage";
import { useHorizontalScroll } from "@/app/CustomHooks/useHorizontalScroll";

const projectList = [
  {
    id: 1,
    src: "/images/stefantekstil_Image.jpg",
    alt: "Stefan Tekstil",
    title: "Stefan Tekstil",
    link: "https://www.stefantekstil.rs/",
    type: "jpg",
  },
  {
    id: 2,
    src: "/images/bogutovo_Image.jpg",
    alt: "Bogutovo",
    title: "Bogutovo",
    link: "https://www.bogutovo.com/",
    type: "jpg",
  },
  {
    id: 3,
    src: "/images/agacevkazlatna_Image.jpg",
    alt: "Dragačevka Zlatna",
    title: "Dragačevka Zlatna",
    link: "https://www.dragacevkazlatna.rs/",
    type: "jpg",
  },
  {
    id: 4,
    src: "/images/tiedup_Image.jpg",
    alt: "Tied Up",
    title: "Tied Up",
    link: "https://www.tiedup.rs/",
    type: "jpg",
  },
  {
    id: 5,
    src: "/images/bojanvukadinov_Image.jpg",
    alt: "Bojan Vukadinov",
    title: "Bojan Vukadinov",
    link: "https://www.bojanvukadinov.com/",
    type: "jpg",
  },
  {
    id: 6,
    src: "/images/principalduo_Image.jpg",
    type: "jpg",
    alt: "Principal Duo",
    title: "Principal Duo",
    link: "https://www.principalduo.com/sr",
  },
];

const ProjectSection = () => {
  const { containerRef, canScrollLeft, canScrollRight, scroll } =
    useHorizontalScroll(316);

  return (
    <section className="project-section">
      <h1 className="project-section_title">
        Naši projekti<span>.</span>
      </h1>

      <div className="scroller-wrapper">
        <button
          className="scroll-button left"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll Left"
        >
          <ResponsiveImage
            className="left-arrow"
            width="25"
            height="25"
            webpSrc="/right-chevron.svg"
            fallbackSrc="/right-chevron.svg"
            alt="Scroll left"
          />
        </button>

        <div className="scroll-container" ref={containerRef}>
          <div className="scroll-content">
            {projectList.map(({ id, src, alt, title, link, type }) => (
              <div key={id} className="scroll-item">
                <ResponsiveImage
                  width="100"
                  height="100"
                  webpSrc={src}
                  fallbackSrc={src}
                  alt={alt}
                  className="project-card__image"
                  type={type}
                />
                <div className="project-card-footer">
                  <h1 className="project-card-footer_title">{title}</h1>
                  <Link
                    href={`${link}`}
                    target="_blank"
                    className="project-card-link"
                  >
                    <ResponsiveImage
                      width="20"
                      height="20"
                      webpSrc="/link.svg"
                      fallbackSrc="/link.svg"
                      alt="Link icon"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="scroll-button right"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll Right"
        >
          <ResponsiveImage
            width="25"
            height="25"
            webpSrc="/right-chevron.svg"
            fallbackSrc="/right-chevron.svg"
            alt="Scroll right"
          />
        </button>
      </div>
      <p className="project-section-footer">Pogledajte sve projekte</p>
    </section>
  );
};

export default ProjectSection;
