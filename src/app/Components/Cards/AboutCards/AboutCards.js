import "./AboutCards.css";
import PropTypes from "prop-types";
import ResponsiveImage from "@/app/MediaReaders/ResponsiveImage";
import { memo } from "react";

const AboutCard = ({ id, title, description, image, alt, type }) => (
    <div className={`about_card about-card_${id}`}>
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

AboutCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.node,
    description: PropTypes.node,
    image: PropTypes.string,
    alt: PropTypes.string,
    type: PropTypes.string,
};

export default memo(AboutCard);
