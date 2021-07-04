import React, { useState, useEffect } from "react";

const DateAndTime = ({ data }) => {
  const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const timeOptions = { hour12: false, hour: "2-digit", minute: "2-digit" };
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = setInterval(() => {
      const date = new Date(data).toISOString();
      const nDate = new Date(date).toLocaleDateString("en-GB", dateOptions);
      const nTime = new Date(date).toLocaleTimeString([], timeOptions);
      setCurrentDate(nDate);
      setCurrentTime(nTime);
    }, 1000);

    setInterval(updateTime, 1000);
    return () => clearInterval(updateTime);
  });

  return (
    <div className="times-and-dates">{`Last update: ${currentDate} at ${currentTime}`}</div>
  );
};

export default DateAndTime;
