import React from "react";

const Droplet = ({ unit, volume }) => {
  const mask = 151 - volume * unit;
  return (
    <svg className="droplet" viewBox="0 0 144 171">
      <path
        className="st2"
        d="M76.42 11.08c-3.16-1.24-6.67-1.24-9.81.04C34.1 24.37 10.5 82.77 10.5 108.5c0 27 25 53 61 53s62-27 62-53c0-25.75-23.66-84.26-57.08-97.42z"
        fill="#00e5ff"
        stroke="#00e5ff"
        strokeMiterlimit="10"
      />
      <rect y="10" className="st1" width="144" height={mask > 0 ? mask : 0} />
      <path
        className="st0"
        d="M76.42 11.08c-3.16-1.24-6.67-1.24-9.81.04C34.1 24.37 10.5 82.77 10.5 108.5c0 27 25 53 61 53s62-27 62-53c0-25.75-23.66-84.26-57.08-97.42z"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Droplet;
