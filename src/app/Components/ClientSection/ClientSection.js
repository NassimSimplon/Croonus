import "./ClientSection.css";
import React from "react";
import ResponsiveImage from "@/app/MediaReaders/ResponsiveImage";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";

const clientsList = [
  { id: 1, src: "/images/1.png", type: "png", alt: "Croonus client 1" },
  { id: 2, src: "/images/2.png", type: "png", alt: "Croonus client 2" },
  { id: 3, src: "/images/3.png", type: "png", alt: "Croonus client 3" },
  { id: 4, src: "/images/4.png", type: "png", alt: "Croonus client 4" },
  { id: 5, src: "/images/5.png", type: "png", alt: "Croonus client 5" },
  { id: 6, src: "/images/6.png", type: "png", alt: "Croonus client 6" },
  { id: 7, src: "/images/7.png", type: "png", alt: "Croonus client 7" },
  { id: 8, src: "/images/8.png", type: "png", alt: "Croonus client 8" },
  { id: 9, src: "/images/9.png", type: "png", alt: "Croonus client 9" },
  { id: 10, src: "/images/10.png", type: "png", alt: "Croonus client 10" },
  { id: 11, src: "/images/11.png", type: "png", alt: "Croonus client 11" },
  { id: 12, src: "/images/12.png", type: "png", alt: "Croonus client 12" },
  { id: 13, src: "/images/13.png", type: "png", alt: "Croonus client 13" },
  { id: 14, src: "/images/14.png", type: "png", alt: "Croonus client 14" },
  { id: 15, src: "/images/15.png", type: "png", alt: "Croonus client 15" },
  { id: 16, src: "/images/16.png", type: "png", alt: "Croonus client 16" },
  { id: 17, src: "/images/17.png", type: "png", alt: "Croonus client 17" },
  { id: 18, src: "/images/18.png", type: "png", alt: "Croonus client 18" },
  { id: 19, src: "/images/19.png", type: "png", alt: "Croonus client 19" },
  { id: 20, src: "/images/20.png", type: "png", alt: "Croonus client 20" },
  { id: 21, src: "/images/21.png", type: "png", alt: "Croonus client 21" },
  { id: 22, src: "/images/22.png", type: "png", alt: "Croonus client 22" },
  { id: 23, src: "/images/23.png", type: "png", alt: "Croonus client 23" },
  { id: 24, src: "/images/24.png", type: "png", alt: "Croonus client 24" },
];


const ClientSection = () => {
  const { setRef, isInView } = useMultiScrollReveal(0.9);

  const titleId = "client-section-title";
  const titleClass = isInView(titleId)
    ? "responsive-typewriter"
    : "hidden-element";

  return (
    <section className="client-section">
      <h1
        className={["client-section-title", titleClass].join(" ")}
        ref={setRef(titleId)}
        data-scroll-id={titleId}
      >
        Za koga radimo<span>?</span>
      </h1>

      <div className="clientList">
        {clientsList.map((client) => {
          const cardId = `client-card_${client.id}`;
          const visibilityClass = isInView(cardId)
            ? "fade-up-element"
            : "hidden-element";
          const className = ["client-card", visibilityClass].join(" ");

          return (
            <div
              key={client.id}
              className={className}
              ref={setRef(cardId)}
              data-scroll-id={cardId}
            >
              <ResponsiveImage
                width="199"
                height="46"
                webpSrc={client.src}
                fallbackSrc={client.src}
                alt={client.alt}
                className="client-image"
                type={client.type}
              />
            </div>
          );
        })}

        <div className="client-last-card">
          <h1 className="client-last-card_title">Mesto za vas</h1>
        </div>
      </div>
      <div
        className={`client-footer ${isInView("client-footer")
          ? "responsive-typewriter"
          : "hidden-element"
          }`}
        ref={setRef("client-footer")}
        data-scroll-id="client-footer">
        <p className="client-footer-bold-txt">
          ...i još <span>250</span> klijenata.
        </p>
        <p className="client-footer-txt-underline">Pogledajte sve klijente</p>
      </div>
    </section>
  );
};

export default ClientSection;
