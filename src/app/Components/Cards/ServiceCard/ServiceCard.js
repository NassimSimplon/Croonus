import "./ServiceCard.css";
import PropTypes from "prop-types";
import { memo } from "react";

const ServiceCard = ({ id, title, description }) => (
    <div className={`service_card service-card_${id}`}>
        <h1 className="service-card__title">
            {title}
            <span>.</span>
        </h1>
        <h2 className="service-card__description"> {description}</h2>
    </div>
);

ServiceCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.node,
    description: PropTypes.node,
};

export default memo(ServiceCard);
