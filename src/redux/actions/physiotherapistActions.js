import Cookies from "js-cookie";
export const GET_PHYSIOTHERAPISTS = "GET_PHYSIOTHERAPISTS";
export const GET_MY_PHYSIO_PROFILE = "GET_MY_PHYSIO_PROFILE";
export const SEND_REQUEST = "SEND_REQUEST";

export const getPhysiotherapists = () => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/api/physiotherapists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_PHYSIOTHERAPISTS,
          payload: data,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMyPhysioProfile = () => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/api/physiotherapists/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_MY_PHYSIO_PROFILE,
          payload: data,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const connectWithPhysio = (requestDetails) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/api/linkRequests", {
        method: "POST",
        body: JSON.stringify(requestDetails),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: SEND_REQUEST,
          payload: data,
        });
        alert("request sent");
        console.log(requestDetails);
      } else {
        console.log(requestDetails);
        throw new Error("Something went wront with the request.");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
