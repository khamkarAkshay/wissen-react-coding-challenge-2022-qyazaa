import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import { getSessionStorage } from "../utils/storage.utils";
import ProtectedRoute from "./protectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default AppRoutes;
