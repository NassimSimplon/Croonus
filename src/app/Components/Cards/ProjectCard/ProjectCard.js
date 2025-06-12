import "./ProjectCard.css";
import Link from "next/link"; // or 'react-router-dom";
import LinkIcon from "@/app/Icons/Link";
import PropTypes from "prop-types";
import React, { memo } from "react";
import ResponsiveImage from "@/app/MediaReaders/ResponsiveImage";

const ProjectCard = ({
  id,
  src,
  alt,
  title,
  link,
  type,
  isInView,
  setRef,
  fade = true,
}) => {
  return (
    <div
      className={`scroll-item ${
        isInView(`scroll-item_${id}`) && fade
          ? "fade-up-element"
          : fade
          ? "hidden-element"
          : ""
      }`}
      ref={setRef(`scroll-item_${id}`)}
      data-scroll-id={`scroll-item_${id}`}
    >
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
          href={link}
          target="_blank"
          className="project-card-link"
          rel="noopener noreferrer"
        >
          <LinkIcon className="link-project-card_icon" />
        </Link>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string,
  isInView: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
  fade: PropTypes.bool,
};

export default memo(ProjectCard);
