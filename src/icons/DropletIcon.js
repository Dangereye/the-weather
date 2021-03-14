import React from "react";

const Droplet = ({ unit, volume }) => {
  const mask = 151 - volume * unit;
  return (
    <svg className="droplet-icon" viewBox="0 0 144 171">
      <path
        className="st2"
        d="M134.5 98.5c0 34.52-27.98 62.5-62.5 62.5S9.5 133.02 9.5 98.5c0-16.35 6.28-31.22 16.55-42.37h-.2L72 10l42.37 42.55c1.16 1.07 2.26 2.19 3.33 3.34l.24.24h-.02c10.29 11.14 16.58 26.01 16.58 42.37z"
      />
      <rect y="10" className="st1" width="144" height={mask > 0 ? mask : 0} />
      <path
        className="st0"
        d="M134.5 98.5c0 34.52-27.98 62.5-62.5 62.5S9.5 133.02 9.5 98.5c0-16.35 6.28-31.22 16.55-42.37h-.2L72 10l42.37 42.55c1.16 1.07 2.26 2.19 3.33 3.34l.24.24h-.02c10.29 11.14 16.58 26.01 16.58 42.37z"
      />
    </svg>
  );
};

export default Droplet;
