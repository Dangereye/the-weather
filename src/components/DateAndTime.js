import React, { useState, useEffect } from "react";

const DateAndTime = () => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = { hour12: false, hour: "2-digit", minute: "2-digit" };
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = setInterval(() => {
      const date = new Date().toLocaleDateString("en-GB", dateOptions);
      const time = new Date().toLocaleTimeString([], timeOptions);
      setCurrentDate(date);
      setCurrentTime(time);
    }, 1000);

    setInterval(updateTime, 1000);
    return () => clearInterval(updateTime);
  });

  return <div className="time-date">{`${currentTime} ${currentDate}`}</div>;
};

export default DateAndTime;
