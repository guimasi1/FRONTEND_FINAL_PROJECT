import Cookies from "js-cookie";
export const REGISTER_PHYSIOTHERAPIST = "REGISTER_PHYSIOTHERAPIST";
export const REGISTER_PATIENT = "REGISTER_PATIENT";
export const LOGIN = "LOGIN";
export const SET_ROLE = "SET_ROLE";
export const LOG_STATUS = "LOG_STATUS";

export const register = (registrationPayload, role) => {
  const roleToLowerCase = role.toLowerCase();
  return async (dispatch) => {
    try {
      const res = await fetch(
        "http://localhost:3001/auth/register/" + roleToLowerCase,
        {
          method: "POST",
          body: JSON.stringify(registrationPayload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        if (roleToLowerCase === "physiotherapist") {
          dispatch({
            type: REGISTER_PHYSIOTHERAPIST,
            payload: data,
          });
        } else {
          dispatch({
            type: REGISTER_PATIENT,
            payload: data,
          });
        }
        console.log(data);
        localStorage.setItem("role", role);
      } else {
        throw new Error("Something went wrong with the registration");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (loginPayload, role) => {
  const roleToLowerCase = role.toLowerCase();
  return async (dispatch) => {
    try {
      const res = await fetch(
        "http://localhost:3001/auth/login/" + roleToLowerCase,
        {
          method: "POST",
          body: JSON.stringify(loginPayload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch({
          type: LOGIN,
          payload: data,
        });
        // localStorage.setItem("token", data.token);
        Cookies.set("token", data.token, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        Cookies.set("role", role);
      } else {
        console.log(loginPayload);
        throw new Error("Something went wront with the login.");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const setRole = (role) => ({ type: SET_ROLE, payload: role });

export const setLogStatus = () => ({ type: LOG_STATUS });
