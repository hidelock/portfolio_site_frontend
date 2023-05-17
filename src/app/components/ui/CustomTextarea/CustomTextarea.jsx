import React from "react";
import "./CustomTextarea.css";

const CustomTextarea = ({required, label, type, value, onChange, maxLength, minLength, rows}) => {
  return (
    <div className="custom_textarea">
      <div>
        <label className={required && "required"}>{label}</label>
        <textarea
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          minLength={minLength}
          rows={rows}
        ></textarea>
      </div>
    </div>
  );
};

export default CustomTextarea;
