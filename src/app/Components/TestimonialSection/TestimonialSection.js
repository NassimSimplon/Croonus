"use client";
import "./TestimonialSection.css";
import ArrowIcon from "@/app/Icons/ArrowIcon";
import TestimonialCard from "../Cards/TestimonialCard";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";
import { useHorizontalScroll } from "@/app/CustomHooks/useHorizontalScroll";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

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

const TestimonialSection = () => {
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [current, setCurrent] = useState(2);
  const [width, setWidth] = useState();
  const widthRef = useRef(null);
  const { setRef, isInView } = useMultiScrollReveal(0.9);
  const [isClicking, setIsClicking] = useState(false);
  const timerRef = useRef(null);
  const total = testimonialList.length;
  const cardWidth = (itemsPerPage === 2 ? width - 32 : width) / itemsPerPage;
  const { containerRef, scroll } = useHorizontalScroll(cardWidth + 32);
  const trackStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${testimonialList.length}, ${cardWidth}px)`,
    gap: "2rem",
  };

  useEffect(() => {
    if (containerRef.current) {
      const divWidth = containerRef.current.offsetWidth;

      setWidth(divWidth);
    }
  }, [containerRef]);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 1024) {
        setItemsPerPage(1);
        setCurrent(1);
      } else {
        setItemsPerPage(2);
        setCurrent(2);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [containerRef]);

  const handleClick = () => {
    if (isClicking) return;
    setIsClicking(true);
    setCurrent((prev) => {
      if (prev === testimonialList.length + 0) {
        return itemsPerPage;
      }
      return prev + 1;
    });
    scroll("right");
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsClicking(false);
    }, 500);
  };

  return (
    <section className="testimonialSection">
      <h1
        className={`testimonialSection__title ${isInView("testimonialSection__title")
          ? "fade-up-element"
          : "hidden-element"
          }`}
        ref={setRef("testimonialSection__title")}
        data-scroll-id="testimonialSection__title"
      >
        Kažu o nama<span>.</span>
      </h1>

      <div
        className={`testimonial-wrapper ${isInView(`testimonial-wrapper`) ? "opacity" : "hidden-element"
          }`}
        ref={setRef("testimonial-wrapper")}
        data-scroll-id={`testimonial-wrapper`}
      >
        <div className="testimonial-carousel-container" ref={containerRef}>
          {" "}
          <div
            className={`testimonial-carousel fade-in`}
            style={{ ...trackStyle }}
            ref={widthRef}
          >
            {testimonialList.map((item) => (
              <TestimonialCard key={item.id} {...item}  />
            ))}
          </div>
        </div>

        <div className="testimonial-footer-controls">
          <div className="testimonial-counter">{`${current}/${total}`}</div>
          <button
            className={`scroll-button  scroll-button-left`}
            onClick={handleClick}
            aria-label="Navigate testimonials"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
