import React, { useState, useEffect } from "react";
import formatISO from "date-fns/formatISO";

const DateAndTime = ({ data }) => {
  // const dateOptions = {
  //   weekday: "long",
  //   month: "long",
  //   day: "numeric",
  // };
  // const timeOptions = { hour12: false, hour: "2-digit", minute: "2-digit" };
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const dataDate = new Date(data).toISOString();
    console.log(dataDate);
    const date = formatISO(new Date(dataDate), { representation: "date" });
    const time = formatISO(new Date(dataDate), { representation: "time" });
    console.log(date);
    console.log(time);
    setCurrentDate(date);
    setCurrentTime(time);
  }, [data]);

  return (
    <div className="times-and-dates">{`Last updated: ${currentDate} at ${currentTime}`}</div>
  );
};

export default DateAndTime;
