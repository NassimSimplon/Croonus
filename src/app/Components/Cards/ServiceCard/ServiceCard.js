import "./ServiceCard.css";
import PropTypes from "prop-types";
import useMultiScrollReveal from "@/app/CustomHooks/useMultiScrollTrigger";
import { memo } from "react";

const ServiceCard = ({ id, title, description }) => {
  const { setRef, isInView } = useMultiScrollReveal(0.4);

  const elementId = `service-card_${id}`;
  const baseClass = "service_card";
  const dynamicClass = `service-card_${id}`;
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
      <h1 className="service-card__title">
        {title}
        <span>.</span>
      </h1>
      <h2 className="service-card__description">{description}</h2>
    </div>
  );
};

ServiceCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.node,
  description: PropTypes.node,
};

export default memo(ServiceCard);
