import React from "react";

const TimeComponent = ({ data }) => {
  const time = data.split(" ")[1];
  return <span className="times-and-dates">{time}</span>;
};

export default TimeComponent;
