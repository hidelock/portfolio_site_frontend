import React from "react";
import "./CustomInput.css";

const CustomInput = ({required, label, type, value, onChange, maxLength, minLength}) => {
  return (
    <div className="custom_input">
      <div>
        <label className={required && "required"}>{label}</label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          minLength={minLength}
        ></input>
      </div>
    </div>
  );
};

export default CustomInput;
