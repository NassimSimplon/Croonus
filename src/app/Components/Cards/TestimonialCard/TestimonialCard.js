import PropTypes from "prop-types";
import ResponsiveImage from "@/app/MediaReaders/ResponsiveImage";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";
import { memo } from "react";

const TestimonialCard = ({ src, alt, testimony, name, position, type, id }) => {
  const { setRef, isInView } = useMultiScrollReveal(0.9);

  return (
    <div
      className={`testimonial-card ${
        isInView(`testimonial-card_${id}`)
          ? "opacity"
          : "hidden-element"
      }`}
      ref={setRef(`testimonial-card_${id}`)}
      data-scroll-id={`testimonial-card_${id}`}
    >
      <div className="testimonial-image-wrapper">
        <ResponsiveImage
          width="100"
          height="100"
          webpSrc={src}
          fallbackSrc={src}
          alt={alt}
          className="testimonial-image"
          type={type}
        />
      </div>
      <p className="testimonial-text">{testimony}</p>
      <div className="testimonial-footer-wrapper">
        <div className="testimonial-footer">
          <strong>{name}</strong>
          <small>{position}</small>
        </div>
        <ResponsiveImage
          width="30"
          height="30"
          webpSrc="/more.svg"
          fallbackSrc="/more.svg"
          alt={alt}
        />
      </div>
    </div>
  );
};
TestimonialCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  testimony: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.any.isRequired,
};

export default memo(TestimonialCard);
