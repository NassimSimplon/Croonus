import "./AboutCards.css";
import PropTypes from "prop-types";
import ResponsiveImage from "@/app/MediaReaders/ResponsiveImage";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";
import { memo } from "react";

const AboutCard = ({ id, title, description, image, alt, type }) => {
  const { setRef, isInView } = useMultiScrollReveal(0.4);

  const elementId = `about_card about-card_${id}`;
  const baseClass = "about_card";
  const dynamicClass = `about-card_${id}`;
  const visibilityClass = isInView(elementId)
    ? "fade-up-element"
    : "hidden-element";

  const className = [baseClass, dynamicClass, visibilityClass].join(" ");

  return (
    <div
      className={className}
      ref={setRef(elementId)}
      data-scroll-id={elementId}
    >
      {title}
      {description}
      {image && (
        <div className="about-card__image-wrapper">
          <ResponsiveImage
            width={"100"}
            height={"100"}
            webpSrc={image}
            fallbackSrc={image}
            alt={alt || title || "Croonus image"}
            className="about-card__image"
            type={type}
          />
        </div>
      )}
    </div>
  );
};

AboutCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string,
};

export default memo(AboutCard);
