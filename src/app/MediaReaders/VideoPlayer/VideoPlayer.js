"use client";
import PropTypes from "prop-types";
import React, { memo } from "react";

const VideoPlayer = ({
  src,
  type,
  autoPlay,
  loop,
  muted,
  playsInline,
  className,
}) => {
  return (
    <video
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      className={className}
       preload="auto"
    >
      <source src={src} type={type} />
    </video>
  );
};


VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  className: PropTypes.string,
};

VideoPlayer.defaultProps = {
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  className: "video-loader",
};

export default memo(VideoPlayer);
