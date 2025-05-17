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
                <h1 className="title">
                    Pronašli ste nas<span>.</span>
                </h1>
                <p className="description">
                    Sada pomozimo kupcima
                    <br />
                    da pronađu vaše proizvode.
                </p>
                <div className="btn-section">
                    <button className="first-btn" type="button">
                        Pošaljite upit
                    </button>
                    <button className="second-btn" type="button" onClick={openElement}>
                        <svg
                            className="menu-icon"
                            enableBackground="new 0 0 100 100"
                            height="30"
                            viewBox="0 0 100 100"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                        >
                            <path
                                fill="white"
                                d="m69.4931641 49.6152344-28.3583985-19.5634766c-.3056641-.2109375-.7021484-.2333984-1.0322266-.0625-.3291016.1728516-.5351562.5136719-.5351562.8857422v39.1269531c0 .3720703.2060547.7128906.5351562.8857422.1464844.0761719.3056641.1142578.4648438.1142578.1992188 0 .3974609-.0595703.5673828-.1767578l28.3583984-19.5634766c.2714844-.1865234.4326172-.4941406.4326172-.8232422s-.1611328-.6367187-.4326171-.8232421zm-27.9257813 18.4824218v-35.3183593l25.5976562 17.6591797z"
                            />
                            <path d="m50 10c-22.0556641 0-40 17.9443359-40 40s17.9443359 40 40 40 40-17.9443359 40-40-17.9443359-40-40-40zm0 78c-20.953125 0-38-17.046875-38-38s17.046875-38 38-38 38 17.046875 38 38-17.046875 38-38 38z" />
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
