import React from "react";
import eyeOpen from "../../assets/icons/eyeOpen.svg";
import eyeClose from "../../assets/icons/eyeClose.svg";
import "./customInput.style.css";

function CustomInput(props) {
  const { isPasswordHidden, handlEyeClick, showEyeIcon, ...otherProps } = props;
  return (
    <div className="input-contianer">
      <label htmlFor={props?.id}>{props?.label}</label>
      <input
        {...otherProps}
        type={!props?.isPasswordHidden ? props?.type : "text"}
      />
      {props?.showEyeIcon && (
        <img
          className="input-contianer__eye-icon"
          src={props?.isPasswordHidden ? eyeClose : eyeOpen}
          alt="eye-icon"
          onClick={props?.handlEyeClick}
        />
      )}
    </div>
  );
}

export default CustomInput;
