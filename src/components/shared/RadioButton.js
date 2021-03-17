import React from "react";

const RadioButton = ({ id, name, value, changed, isSelected, label }) => {
  return (
    <div className="radio-button">
      <input
        id={id}
        name={name}
        onChange={changed}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
