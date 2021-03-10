import React from "react";

const GroupList = ({ item }) => {
  return (
    <div className="group-list-item">
      <span className="key">
        {Object.keys(item).toString().replaceAll("_", " ")}
      </span>
      <span className="value">{Object.values(item)}</span>
    </div>
  );
};

export default GroupList;
