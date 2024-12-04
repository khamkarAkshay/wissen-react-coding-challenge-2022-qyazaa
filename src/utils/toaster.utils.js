import { toast, Zoom } from "react-toastify";

function customToast(type, message) {
  return toast[type || "default"](message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "light",
    transition: Zoom,
  });
}

export default customToast;
