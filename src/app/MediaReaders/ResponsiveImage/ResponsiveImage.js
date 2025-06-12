"use client";
import "./ResponsiveImage.css";
import CroonusSpiner from "@/app/Shared/CroonusSpiner";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";

const ResponsiveImage = ({
  webpSrc,
  fallbackSrc,
  alt,
  width,
  height,
  className,
  lazyLoading,
  type,
  showLoader,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <picture>
      <source srcSet={webpSrc} type={`image/${type}`} />
      {showLoader && (hasError || !isLoaded) && <CroonusSpiner />}
      <Image
        src={fallbackSrc}
        alt={alt}
        loading={lazyLoading ? "lazy" : "eager"}
        width={width}
        height={height}
        className={`${isLoaded && !hasError ? "block" : "none"} ${className}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        crossOrigin="anonymous"
      />
    </picture>
  );
};

ResponsiveImage.propTypes = {
  webpSrc: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  lazyLoading: PropTypes.bool,
  type: PropTypes.string,
  showLoader: PropTypes.bool,
};

ResponsiveImage.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
  lazyLoading: true,
  showLoader: true,
};

export default memo(ResponsiveImage);
