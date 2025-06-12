import MoreOptionsIcon from "@/app/Icons/MoreOptionsIcon";
import PropTypes from "prop-types";
import ResponsiveImage from "@/app/MediaReaders/ResponsiveImage";
import { memo } from "react";

const TestimonialCard = ({ src, alt, testimony, name, position, type }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image-wrapper">
        <ResponsiveImage
          width="100"
          height="100"
          webpSrc={src}
          fallbackSrc={src}
          alt={alt}
          className="testimonial-image"
          type={type}
          showLoader={false}
        />
      </div>
      <p className="testimonial-text">{testimony}</p>
      <div className="testimonial-footer-wrapper">
        <div className="testimonial-footer">
          <strong>{name}</strong>
          <small>{position}</small>
        </div>
        <MoreOptionsIcon className="testimonial-more-icon" />
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
  type: PropTypes.any.isRequired,
};

export default memo(TestimonialCard);
