import { toast } from "react-toastify";

export const errorMessage = (string, autoClose = 5000) =>
  toast.error(string, {
    position: "bottom-right",
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
export const successMessage = (string, autoClose = 5000) =>
  toast.success(string, {
    position: "bottom-right",
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
export const alertMessage = (string, autoClose = 5000) =>
  toast.warning(string, {
    position: "bottom-right",
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
export const infoMessage = (string, autoClose = 5000) =>
  toast.info(string, {
    position: "bottom-right",
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
