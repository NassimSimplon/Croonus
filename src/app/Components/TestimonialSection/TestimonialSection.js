"use client";
import "./TestimonialSection.css";
import ArrowIcon from "@/app/Icons/ArrowIcon";
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

const ANIMATION_DURATION = 100;

 

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");
  const [direction, setDirection] = useState("forward");
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [displayedItems, setDisplayedItems] = useState(testimonialList.slice(0, 2));
 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { setRef, isInView } = useMultiScrollReveal(0.9);

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

  const getNextIndex = (current, dir) => {
    if (dir === "forward") {
      return current < maxIndex ? current + itemsPerPage : current - itemsPerPage;
    } else {
      return current > 0 ? current - itemsPerPage : current + itemsPerPage;
    }
  };

  const handleSlide = () => {
    if (isTransitioning) return; // Prevent spamming clicks during animation
    setIsTransitioning(true);
    setFadeState("fade-out");

    const newIndex = getNextIndex(index, direction);

    // If hitting boundaries, flip direction
    if ((direction === "forward" && index >= maxIndex) || (direction === "backward" && index <= 0)) {
      setDirection(direction === "forward" ? "backward" : "forward");
    }

 

    // Wait for fade-out to finish, then switch items and fade-in
    setTimeout(() => {
      setIndex(newIndex);
      setDisplayedItems(testimonialList.slice(newIndex, newIndex + itemsPerPage));
      setFadeState("fade-in");
      setIsTransitioning(false);
    }, ANIMATION_DURATION);
  };

  const current = Math.min(index + itemsPerPage, testimonialList.length);
  const total = testimonialList.length;

  return (
    <section className="testimonialSection">
      <h1
        className={`testimonialSection__title ${
          isInView("testimonialSection__title")
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
          {displayedItems.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>

        <div className="testimonial-footer-controls">
          <div className="testimonial-counter">{`${current}/${total}`}</div>
          <button
            className={`scroll-button ${direction !== "forward" ? "scroll-button-right" : "scroll-button-left"}`}
            onClick={handleSlide}
            aria-label="Navigate testimonials"
          >
            <ArrowIcon className={direction !== "forward" ? "left-arrow" : ""} />
          </button>
        </div>
      </div>
    </section>
  );
};


export default TestimonialSection;
