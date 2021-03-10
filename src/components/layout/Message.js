import React from "react";
import { IoClose } from "react-icons/io5";

const Message = ({ text, role }) => {
  return (
    <div className={`message ${role}`}>
      <div className="container">
        <span>{text}</span>
        <button className="reload" onClick={() => window.location.reload()}>
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default Message;
