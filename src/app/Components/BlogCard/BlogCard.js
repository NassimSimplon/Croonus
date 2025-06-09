"use client";
import "./BlogCard.css";
import Link from "next/link";
import MoreOptionsIcon from "@/app/Icons/MoreOptionsIcon";
import PropTypes from "prop-types";
import React, { memo } from "react";
import ResponsiveImage from "@/app/MediaReaders/ResponsiveImage";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";

const BlogCard = ({ id, src, alt, title, type }) => {
  const { setRef, isInView } = useMultiScrollReveal(0.4);
  const scrollId = `blog_card_${id}`;
  const visibilityClass = isInView(scrollId)
    ? "fade-up-element"
    : "hidden-element";
  const cardClassName = `blog_card ${visibilityClass}`;

  return (
    <div
      className={cardClassName}
      ref={setRef(scrollId)}
      data-scroll-id={scrollId}
    >
      <div className="blog_card_image_wrapper">
        <ResponsiveImage
          type={type}
          width={490}
          height={270}
          webpSrc={src}
          fallbackSrc={src}
          alt={`${alt}_${id}`}
          className="blog_card_image"
        />
      </div>
      <div className="blog_card_content">
        <h1 className="blog_card_title">{title}</h1>
             <Link href={`/blog/${id}`}  > <MoreOptionsIcon className='blog_card_more_icon' /></Link>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default memo(BlogCard);
