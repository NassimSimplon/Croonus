import PropTypes from "prop-types";

const ArrowIcon = ({ color = "#000", size = 25, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.95 511.95"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M386.23,248.31L140.9,2.97c-4.27-4.05-10.99-3.95-15.04.21-3.95,4.16-3.95,10.67,0,14.83l237.76,237.76-237.76,237.87c-4.27,4.05-4.37,10.88-.21,15.04,4.05,4.27,10.88,4.37,15.04.21.11-.11.21-.21.21-.21l245.33-245.33c4.16-4.16,4.16-10.88,0-15.04Z" />
  </svg>
);

ArrowIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ArrowIcon;
