import React from "react";

const DateComponent = ({ data }) => {
  const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const dateString = new Date(data).toLocaleDateString("en-GB", dateOptions);
  return <span className="date">{dateString}</span>;
};

export default DateComponent;
