import React from "react";

const Wind = ({ angle }) => {
  return (
    <svg
      className="wind-icon"
      viewBox="0 0 144 171"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <path d="M123.53 152.62c.89 2.51-1.51 4.93-4.02 4.07l-40.92-14.08c-4.27-1.46-8.9-1.46-13.16 0L24.5 156.69c-2.52.87-4.92-1.56-4.02-4.07L69.01 16.24c1-2.81 4.98-2.81 5.98 0l48.54 136.38z" />
    </svg>
  );
};

export default Wind;
