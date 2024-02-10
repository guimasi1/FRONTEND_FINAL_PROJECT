const REGISTER_PHYSIOTHERAPIST = "REGISTER_PHYSIOTHERAPIST";
const REGISTER_PATIENT = "REGISTER_PATIENT";

export const register = (registrationPayload, role) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/auth/register/" + role, {
        method: "POST",
        body: JSON.stringify(registrationPayload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (role === "PHYSIOTHERAPIST") {
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
      } else {
        throw new Error("The login is fail!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
