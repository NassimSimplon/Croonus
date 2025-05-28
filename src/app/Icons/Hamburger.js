const MySvgComponent = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 24 24"
    {...props} // allows passing extra props like className, style, etc.
  >
    <defs>
      <style>
        {`
          .st00 {
            fill: #fff;
          }
          .st00, .st1 {
            fill-rule: evenodd;
          }
          .st1 {
            fill: #43b749;
          }
        `}
      </style>
    </defs>
    <path
      className="st00"
      d="M6.5,19c0-.4.3-.8.8-.8h12.7c.4,0,.8.3.8.8s-.3.8-.8.8H7.3c-.4,0-.8-.3-.7-.8h-.1ZM12.2,5c0-.4.3-.8.8-.8h7c.4,0,.8.3.8.8s-.3.8-.8.8h-7c-.4,0-.8-.3-.7-.8h-.1Z"
    />
    <path
      className="st1"
      d="M3.2,12c0-.4.3-.8.8-.8h16c.4,0,.8.3.8.8s-.3.8-.8.8H4c-.4,0-.8-.3-.7-.8h-.1Z"
    />
  </svg>
);

export default MySvgComponent;
