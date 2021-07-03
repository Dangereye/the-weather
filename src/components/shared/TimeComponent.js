import React from "react";

const TimeComponent = ({ data }) => {
  console.log("Time Component: ", data);
  const timeOptions = { hour12: false, hour: "2-digit", minute: "2-digit" };
  const timeString = new Date(data).toLocaleTimeString("en-GB", timeOptions);
  return <span className="times-and-dates">{timeString}</span>;
};

export default TimeComponent;
