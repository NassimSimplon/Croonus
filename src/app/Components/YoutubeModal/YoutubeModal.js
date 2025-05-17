"use client";
import "./YoutubeModal.css";
import CroonusSpiner from "@/app/Shared/CroonusSpiner";
import PropTypes from "prop-types";
import { memo, useCallback, useEffect, useRef, useState } from "react";

const YoutubeModal = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);
    const modalRef = useRef(null);
    const iframeRef = useRef(null);

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );
    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            return () => document.removeEventListener("keydown", handleKeyDown);
        }
    }, [isOpen, handleKeyDown]);
    useEffect(() => {
        if (!isOpen) return;

        setIsLoading(true);

        const iframe = iframeRef.current;

        const handleLoad = () => {
            setIsLoading(false);
        };

        if (iframe) {
            iframe.addEventListener("load", handleLoad);
        }

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => {
            if (iframe) {
                iframe.removeEventListener("load", handleLoad);
            }
            clearTimeout(timeout);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="YouTube video modal"
        >
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}
            >
                <button
                    className="closeButton"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                {isLoading && <CroonusSpiner />}
                <div className="videoWrapper">

                    <iframe
                        ref={iframeRef}
                        src={"https://www.youtube.com/embed/dQw4w9WgXcQ"}
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={
                            `${isLoading ? "hidden-frame" : "visible-frame"}`
                        }
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

YoutubeModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default memo(YoutubeModal);
