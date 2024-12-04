import React from "react";
import AppRoutes from "./routes/appRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main>
      <AppRoutes />
      <ToastContainer />
    </main>
  );
}

export default App;
