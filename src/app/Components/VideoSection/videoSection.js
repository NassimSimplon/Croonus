"use client";
import "./videoSection.css";
import Link from "next/link";
import PlayIcon from "@/app/Icons/PlayIcon";
import PropTypes from "prop-types";
import React, { memo } from "react";
import VideoPlayer from "@/app/MediaReaders/VideoPlayer";

const VideoSection = ({ openElement }) => {
  return (
    <section className="video-container">
      <div className="VideoSection">
        <div className="video-background">
          <VideoPlayer
            className="video"
            src={"/videos/Video Background.mov"}
            muted
            type="video/mp4"
            autoPlay
            loop
            playsInline
          />
        </div>
      </div>
      <div className="message-section">
        <h1 className="title fade-up-element">
          Pronašli ste nas<span>.</span>
        </h1>
        <p className="description fade-up-element">
          Sada pomozimo kupcima
          <br />
          da pronađu vaše proizvode.
        </p>
        <div className="btn-section">
        <Link href="/Form" className="first_btn_link">  <button className="first-btn"  type="button">
            Pošaljite upit
          </button></Link>
          <button className="second-btn" type="button" onClick={openElement}>
            <PlayIcon className="menu-icon" />
            Pogledajte priču
          </button>
        </div>
      </div>
    </section>
  );
};

VideoSection.propTypes = {
  openElement: PropTypes.func.isRequired,
};

export default memo(VideoSection);
