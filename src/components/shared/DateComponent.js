import React from "react";

const DateComponent = ({ data }) => {
  const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const formatData = data.split(" ")[0];
  const dateString = new Date(formatData).toLocaleDateString(
    "en-GB",
    dateOptions
  );
  return <span className="times-and-dates">{dateString}</span>;
};

export default DateComponent;
