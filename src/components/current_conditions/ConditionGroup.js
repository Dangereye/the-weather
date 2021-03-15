import React from "react";
import GroupListItem from "./GroupListItem";

const ConditionGroup = ({ data }) => {
  return (
    <div className="group">
      <h3>{data.title}</h3>
      <div className="group-list">
        {data.list.map((item, index) => {
          return <GroupListItem item={item} key={`${data.title}-${index}`} />;
        })}
      </div>
    </div>
  );
};

export default ConditionGroup;
