import React from "react";

const Loader = ({ text }) => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p className="loader-text">{text}</p>
    </div>
  );
};

export default Loader;
