import "./BlogCard.css";
import PropTypes from "prop-types";
import React, { memo } from "react";
import ResponsiveImage from "@/app/MediaReaders/ResponsiveImage";

const BlogCard = ({ id, src, alt, title, type }) => {
    return (
        <div className="blog_card">
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
                <svg
                    className="blog_card_more_icon"
                    height="30"
                    fill="white"
                    viewBox="0 0 480 480"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240 240-107.453125 240-240c-.148438-132.484375-107.515625-239.851562-240-240zm0 464c-123.710938 0-224-100.289062-224-224s100.289062-224 224-224 224 100.289062 224 224c-.140625 123.652344-100.347656 223.859375-224 224zm0 0" />
                    <path d="m240 200c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40 40-17.910156 40-40c-.027344-22.082031-17.917969-39.972656-40-40zm0 64c-13.253906 0-24-10.746094-24-24s10.746094-24 24-24 24 10.746094 24 24-10.746094 24-24 24zm0 0" />
                    <path d="m144 200c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40 40-17.910156 40-40c-.027344-22.082031-17.917969-39.972656-40-40zm0 64c-13.253906 0-24-10.746094-24-24s10.746094-24 24-24 24 10.746094 24 24-10.746094 24-24 24zm0 0" />
                    <path d="m336 200c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40 40-17.910156 40-40c-.027344-22.082031-17.917969-39.972656-40-40zm0 64c-13.253906 0-24-10.746094-24-24s10.746094-24 24-24 24 10.746094 24 24-10.746094 24-24 24zm0 0" />
                </svg>
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
