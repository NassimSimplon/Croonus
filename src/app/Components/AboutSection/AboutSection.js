"use client";
import "./AboutSection.css";
import AboutCard from "../Cards/AboutCards";
import React, { useEffect, useState } from "react";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";

const AboutSection = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 480;

    const tempCards = [
      {
        id: 1,
        image: "/images/baner-one.jpg",
        alt: "Croonus company",
        type: "jpg",
      },
      {
        id: 2,
        title: (
          <h3 className="about-card__title">
            Stručnost<span className="green">.</span>
          </h3>
        ),
        description: (
          <p className="about-card__description">
            Naša stručnost je potvrđena kroz uspešnu realizaciju preko{" "}
            <span className="black">300 projekata</span> u proteklih{" "}
            <span className="black">9 godina.</span>
          </p>
        ),
        type: "jpg",
      },
      {
        id: 3,
        title: (
          <h3 className="about-card__title">
            ISO Standardi<span className="green">.</span>
          </h3>
        ),
        description: (
          <p className="about-card__description">
            Posedujemo <span className="white">ISO</span> standarde{" "}
            <span className="white">27001</span> za zaštitu podataka i{" "}
            <span className="white">9001</span> spa za kvalitet, što garantuje
            visok nivo sigurnosti i pouzdanosti naših usluga.
          </p>
        ),
        image: "/images/Seal Colour - Alcumus ISOQAR.png",
        alt: "ISOQAR icon",
        type: "png",
      },
      {
        id: 4,
        image: "/images/baner-two.jpg",
        alt: "Croonus agent",
        type: "jpg",
      },
      {
        id: 5,
        image: "/images/baner-three.jpg",
        alt: "room meeting",
        type: "jpg",
      },
      {
        id: 6,
        image: isMobile
          ? "/images/best-web-shop 1 1 (1).png"
          : "/images/hot-spot.png",
        type: "png",
        alt: "hot spot",
        description: (
          <p className="about-card__description">
            Croonus eCommerce platforma je <br /> proglašena za{" "}
            <span className="white">najbolje web shop</span> <br />
            rešenje u 2022.
          </p>
        ),
      },
      {
        id: 7,
        image: "/images/CIR-logo.png",
        alt: "companies logo",
        type: "png",
        description: (
          <p className="about-card__description">
            Naša rešenja su priznata i zaštićena, što potvrđuje našu
            originalnost i inovativnost.
          </p>
        ),
      },
    ];

    setCardsData(tempCards);
  }, []);

  const { setRef, isInView } = useMultiScrollReveal(0.4);
  return (
    <section className="about-section">
      <h1
        className={`about-section__title ${
          isInView("about-section__title")
            ? "fade-up-element"
            : "hidden-element"
        }`}
        ref={setRef("about-section__title")}
        data-scroll-id="about-section__title"
      >
        Mi smo Croonus<span>.</span>
      </h1>

      <p
        className={`about-section__description ${
          isInView("about-section__description")
            ? "fade-up-element"
            : "hidden-element"
        }`}
        ref={setRef("about-section__description")}
        data-scroll-id="about-section__description"
      >
        <span className="white">Specijalizovani smo za eCommerce</span> i nudimo
        pouzdana i fleksibilna rešenja za vaš biznis.
        <br />
        Naša <span className="green">Croonus eCommerce</span> platforma,
        razvijena u potpunosti u našoj kompaniji, uključuje mobilne aplikacije i
        prilagođena je savremenim tržišnim potrebama.
      </p>

      <p
        className={`about-section_second_description    ${
          isInView("about-section_second_description")
            ? "fade-up-element"
            : "hidden-element"
        }`}
        ref={setRef("about-section_second_description")}
        data-scroll-id="about-section_second_description"
      >
        Naš tim od <span className="white">35 stručnjaka</span> donosi bogato
        iskustvo u eCommerce implementaciji i strategiji.
        <br />
        Izdvajamo se naprednim <span className="bleu">AI</span> rešenjima koja
        personalizuju preporuke proizvoda i automatski generišu slike, nazive,
        opise i SEO-optimizovane tekstove.
      </p>

      <div className="about-cards-container">
        {cardsData?.map((card) => (
          <AboutCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
