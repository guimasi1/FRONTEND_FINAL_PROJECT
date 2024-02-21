import { toast } from "react-toastify";
import { LOGIN } from "./authentication";

export const showLoggedIn = () => {
  return function (dispatch) {
    dispatch({
      type: LOGIN,
    });
    toast.success(`You're logged in!`, {
      position: "top-right",
      autoClose: 3500,
    });
  };
};
