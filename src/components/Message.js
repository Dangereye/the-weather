import React from "react";
import { BiError } from "react-icons/bi";

const Message = ({ text, role }) => {
  return (
    <div className={`message ${role}`}>
      <div className="container">
        {role === "error" ? <BiError /> : ""}
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Message;
