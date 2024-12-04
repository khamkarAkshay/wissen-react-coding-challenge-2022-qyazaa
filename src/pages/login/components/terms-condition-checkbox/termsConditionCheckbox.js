import React from "react";
import "./termsConditionCheckbox.style.css";

function TermsCoditionCheckbox(props) {
  return (
    <div className="terms-condition__container">
      <input className="terms-condition__input " {...props} type="checkbox" />
      <label htmlFor={props?.id}>
        By creating or logging into an account, you are agreeing with our{" "}
        <span className="terms-condition-links">Terms & Conditions</span> and{" "}
        <span className="terms-condition-links">Privacy Policys</span>.
      </label>
    </div>
  );
}

export default TermsCoditionCheckbox;
