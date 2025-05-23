"use client";
import "./TestimonialSection.css";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ResponsiveImage from "@/app/MediaReaders/ResponsiveImage";
import TestimonialCard from "../Cards/TestimonialCard";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";

const testimonialList = [
    {
        id: 1,
        src: "/images/1.png",
        alt: "company logo 1",
        testimony: `Tokom prethodnih godina, kompanije Tiffany Production i Croonus
    Technologies mogle su da se pohvale pozitivnom i uspešnom saradnjom
    koja se nastavlja. Kada se sretnu pozitivna energija, entuzijazam i
    kreativnost ova dva tima, onda je rezultat ništa manje nego
    spektakularan. To je razlog zašto se radujemo...
    `,
        name: "Vera Vuković",
        position: "Direktor marketinga",
        type: "png",
    },
    {
        id: 2,
        src: "/images/2.png",
        alt: "company logo 2",
        testimony: `Tokom prethodnih godina, kompanije Tiffany Production i Croonus
    Technologies mogle su da se pohvale pozitivnom i uspešnom saradnjom
    koja se nastavlja. Kada se sretnu pozitivna energija, entuzijazam i
    kreativnost ova dva tima, onda je rezultat ništa manje nego
    spektakularan. To je razlog zašto se radujemo...
    `,
        name: "Tamara Karapandžić",
        position: "Marketing i PR Menadžer",
        type: "png",
    },
    {
        id: 3,
        src: "/images/3.png",
        alt: "company logo 3",
        testimony: `Tokom prethodnih godina, kompanije Tiffany Production i Croonus
    Technologies mogle su da se pohvale pozitivnom i uspešnom saradnjom
    koja se nastavlja. Kada se sretnu pozitivna energija, entuzijazam i
    kreativnost ova dva tima, onda je rezultat ništa manje nego
    spektakularan. To je razlog zašto se radujemo...
    `,
        name: "Tamara Karapandžić",
        position: "Marketing i PR Menadžer",
        type: "png",
    },
    {
        id: 4,
        src: "/images/4.png",
        alt: "company logo 4",
        testimony: `Tokom prethodnih godina, kompanije Tiffany Production i Croonus
    Technologies mogle su da se pohvale pozitivnom i uspešnom saradnjom
    koja se nastavlja. Kada se sretnu pozitivna energija, entuzijazam i
    kreativnost ova dva tima, onda je rezultat ništa manje nego
    spektakularan. To je razlog zašto se radujemo...
    `,
        name: "Vera Vuković",
        position: "Direktor marketinga",
        type: "png",
    },
    {
        id: 5,
        src: "/images/5.png",
        alt: "company logo 5",
        testimony: `Tokom prethodnih godina, kompanije Tiffany Production i Croonus
    Technologies mogle su da se pohvale pozitivnom i uspešnom saradnjom
    koja se nastavlja. Kada se sretnu pozitivna energija, entuzijazam i
    kreativnost ova dva tima, onda je rezultat ništa manje nego
    spektakularan. To je razlog zašto se radujemo...
    `,
        name: "Tamara Karapandžić",
        position: "Marketing i PR Menadžer",
        type: "png",
    },
    {
        id: 6,
        src: "/images/6.png",
        alt: "company logo 6",
        testimony: `Tokom prethodnih godina, kompanije Tiffany Production i Croonus
    Technologies mogle su da se pohvale pozitivnom i uspešnom saradnjom
    koja se nastavlja. Kada se sretnu pozitivna energija, entuzijazam i
    kreativnost ova dva tima, onda je rezultat ništa manje nego
    spektakularan. To je razlog zašto se radujemo...
    `,
        name: "Vera Vuković",
        position: "Direktor marketinga",
        type: "png",
    },

    {
        id: 7,
        src: "/images/7.png",
        alt: "company logo 5",
        testimony: `Tokom prethodnih godina, kompanije Tiffany Production i Croonus
    Technologies mogle su da se pohvale pozitivnom i uspešnom saradnjom
    koja se nastavlja. Kada se sretnu pozitivna energija, entuzijazam i
    kreativnost ova dva tima, onda je rezultat ništa manje nego
    spektakularan. To je razlog zašto se radujemo...
    `,
        name: "Tamara Karapandžić",
        position: "Marketing i PR Menadžer",
        type: "png",
    },
    {
        id: 8,
        src: "/images/8.png",
        alt: "company logo 6",
        testimony: `Tokom prethodnih godina, kompanije Tiffany Production i Croonus
    Technologies mogle su da se pohvale pozitivnom i uspešnom saradnjom
    koja se nastavlja. Kada se sretnu pozitivna energija, entuzijazam i
    kreativnost ova dva tima, onda je rezultat ništa manje nego
    spektakularan. To je razlog zašto se radujemo...
    `,
        name: "Vera Vuković",
        position: "Direktor marketinga",
        type: "png",
    },
];

const ANIMATION_DURATION = 300;

// Card Component

const TestimonialSection = () => {
    const [index, setIndex] = useState(0);
    const [fadeState, setFadeState] = useState("fade-in");
    const [direction, setDirection] = useState("forward");
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const { setRef, isInView } = useMultiScrollReveal(0.9);

    // Handle responsiveness
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth <= 1024) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(2);
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const maxIndex = testimonialList.length - itemsPerPage;

    const visibleItems = useMemo(
        () => testimonialList.slice(index, index + itemsPerPage),
        [index, itemsPerPage]
    );

    const handleSlide = useCallback(() => {
        setFadeState("fade-out");

        setTimeout(() => {
            if (direction === "forward") {
                if (index < maxIndex) {
                    setIndex(index + itemsPerPage);
                } else {
                    setDirection("backward");
                    setIndex(index - itemsPerPage);
                }
            } else {
                if (index > 0) {
                    setIndex(index - itemsPerPage);
                } else {
                    setDirection("forward");
                    setIndex(index + itemsPerPage);
                }
            }

            setFadeState("fade-in");
        }, ANIMATION_DURATION);
    }, [index, direction, itemsPerPage, maxIndex]);

    const current = Math.min(index + itemsPerPage, testimonialList?.length);
    const total = testimonialList?.length;

    return (
        <section className="testimonialSection">
            <h1
                className={`testimonialSection__title ${isInView("testimonialSection__title")
                    ? "responsive-typewriter"
                    : "hidden-element"
                    }`}
                ref={setRef("testimonialSection__title")}
                data-scroll-id="testimonialSection__title"
            >
                Kažu o nama<span>.</span>
            </h1>

            <div className="testimonial-wrapper">
                <div className={`testimonial-carousel ${fadeState}`}>
                    {visibleItems?.map((item) => (
                        <TestimonialCard key={item.id} {...item} />
                    ))}
                </div>

                <div className="testimonial-footer-controls">
                    <div className="testimonial-counter">{`${current}/${total}`}</div>
                    <button
                        className="scroll-button right"
                        onClick={handleSlide}
                        aria-label="Navigate testimonials"
                    >
                        <ResponsiveImage
                            className={direction !== "forward" ? "left-arrow" : ""}
                            width="25"
                            height="25"
                            webpSrc={"/right-chevron.svg"}
                            fallbackSrc={"/right-chevron.svg"}
                            alt={
                                direction === "forward"
                                    ? "Next testimonials"
                                    : "Previous testimonials"
                            }
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
