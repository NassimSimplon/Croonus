"use client";
import "./videoSection.css";
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
                <h1 className="title default-typewriter">
                    Pronašli ste nas<span>.</span>
                </h1>
                <p className="description default-typewriter">
                    Sada pomozimo kupcima
                    <br />
                    da pronađu vaše proizvode.
                </p>
                <div className="btn-section">
                    <button className="first-btn" type="button">
                        Pošaljite upit
                    </button>
                    <button className="second-btn" type="button" onClick={openElement}>
                        <svg         className="menu-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" fill="#fff">
  
  <path d="M355.8,254.03l-145.19-100.16c-1.56-1.08-3.59-1.19-5.28-.32-1.68.88-2.74,2.63-2.74,4.53v200.33c0,1.9,1.05,3.65,2.74,4.53.75.39,1.56.58,2.38.58,1.02,0,2.03-.3,2.9-.9l145.19-100.16c1.39-.95,2.21-2.53,2.21-4.21s-.82-3.26-2.21-4.21ZM212.82,348.66v-180.83l131.06,90.41-131.06,90.41Z" />
  <path d="M256,51.2c-112.92,0-204.8,91.87-204.8,204.8s91.87,204.8,204.8,204.8,204.8-91.87,204.8-204.8S368.92,51.2,256,51.2ZM256,450.56c-107.28,0-194.56-87.28-194.56-194.56S148.72,61.44,256,61.44s194.56,87.28,194.56,194.56-87.28,194.56-194.56,194.56Z" />
</svg>
             
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
