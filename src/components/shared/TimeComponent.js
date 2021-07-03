import React from "react";
import { format } from "date-fns";

const TimeComponent = ({ data }) => {
  // console.log("Time Component: ", data);
  // const timeOptions = { hour12: false, hour: "2-digit", minute: "2-digit" };
  // const timeString = new Date(data).toLocaleTimeString("en-GB", timeOptions);
  const time = format(new Date(data), "HH:mm");
  return <span className="times-and-dates">{time}</span>;
};

export default TimeComponent;
