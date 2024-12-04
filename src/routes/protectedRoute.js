import React, { useEffect } from "react";
import { getSessionStorage } from "../utils/storage.utils";
import { useNavigate } from "react-router";

function ProtectedRoute(props) {
  const authT = getSessionStorage("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (authT?.token === null) {
      navigate("/login");
    }
  }, [authT]);

  return <>{props?.children}</>;
}

export default ProtectedRoute;
