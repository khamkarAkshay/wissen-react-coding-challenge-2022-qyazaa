import React from "react";
import "./customButton.style.css";

function CustomButton(props) {
  const { children, fullWidth, ...otherProps } = props;
  return (
    <button
      className={`custom-button__primary ${
        props?.fullWidth
          ? "custom-button__full-width"
          : "custom-button__max-width"
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
