import React from "react";
import GroupListItem from "./GroupListItem";

const ConditionGroup = ({ data }) => {
  console.log(data);
  return (
    <div className="group">
      <h4>{data.title}</h4>
      <div className="group-list">
        {data.list.map((item, index) => {
          return <GroupListItem item={item} key={`${data.title}-${index}`} />;
        })}
      </div>
    </div>
  );
};

export default ConditionGroup;
