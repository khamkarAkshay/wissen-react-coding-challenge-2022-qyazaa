import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../components/custom-input/customInput";
import CustomButton from "../../components/custom-button/customButton";
import TermsCoditionCheckbox from "./components/terms-condition-checkbox/termsConditionCheckbox";
import { loginService } from "../../redux/auth/auth.thunk";
import "./login.style.css";
import customToast from "../../utils/toaster.utils";
import {
  clearSessionStorage,
  setSessionStorage,
} from "../../utils/storage.utils";
import { useNavigate } from "react-router";
import { clearAuthStateAction } from "../../redux/auth/auth.slice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state?.auth);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isTermAgreed, setIsTermAgreed] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      dispatch(clearAuthStateAction());
    };
  }, []);

  useEffect(() => {
    if (auth?.token && !auth?.error) {
      setSessionStorage("token", auth?.token);
      customToast("success", "Sign in successfull!");
      navigate("/");
      handleClearState();
    } else {
      clearSessionStorage();
      customToast("error", auth?.error);
    }
  }, [auth]);

  useEffect(() => {
    if (auth) {
      setLoading(auth?.loading);
    }
  }, [auth]);

  useEffect(() => {
    if (loginFormData?.email && loginFormData?.password && isTermAgreed) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [loginFormData, isTermAgreed]);

  const handleClearState = () => {
    setLoginFormData({
      email: "",
      password: "",
    });
    setIsTermAgreed(false);
  };

  const handleOnChange = (event) => {
    const field = event?.target?.id;
    setLoginFormData({
      ...loginFormData,
      [field]: event?.target?.value,
    });
  };

  const handleOnPasswordEyeClick = () => {
    setShowPassword(!showPassword);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!isSubmitDisabled) {
      dispatch(loginService({ ...loginFormData }));
    }
  };

  const handleTermsClick = (event) => {
    setIsTermAgreed(event.target.checked);
  };

  return (
    <div className="login-form__container">
      <form className="login-form" onSubmit={handleOnSubmit}>
        <h3>Hello there, Sign in to continue</h3>
        <CustomInput
          label="Email"
          id="email"
          placeholder="Enter email address"
          type="email"
          value={loginFormData?.email}
          onChange={handleOnChange}
          required
          disabled={loading}
        />
        <CustomInput
          label="Password"
          id="password"
          placeholder="Enter password"
          type="password"
          value={loginFormData?.password}
          onChange={handleOnChange}
          required
          showEyeIcon={true}
          isPasswordHidden={showPassword}
          handlEyeClick={handleOnPasswordEyeClick}
          disabled={loading}
        />
        <TermsCoditionCheckbox
          id="termscondition"
          value={isTermAgreed}
          onChange={handleTermsClick}
          required
          disabled={loading}
        />

        <CustomButton
          fullWidth={true}
          type="submit"
          disabled={isSubmitDisabled || loading}
        >
          Next
        </CustomButton>

        <span className="login-form__company-login">
          Signin with company SSO
        </span>
      </form>
    </div>
  );
}

export default Login;
