import React from "react";
import { format } from "date-fns";

const TimeComponent = ({ data }) => {
  // const timeOptions = { hour12: false, hour: "2-digit", minute: "2-digit" };
  // const timeString = new Date(data).toLocaleTimeString("en-GB", timeOptions);
  const time = format(new Date(data), "HH:mm");
  console.log("Time Component: ", time, typeof time);
  return <span className="times-and-dates">{time}</span>;
};

export default TimeComponent;
