import Cookies from "js-cookie";
import { BASE_URL } from "./assignmentsActions";

export const GET_REQUESTS_BY_ID = "GET_REQUESTS_BY_ID";
export const REMOVE_REQUEST = "REMOVE_REQUEST";
export const GET_REQUESTS_BY_PHYSIO_ID = "GET_REQUESTS_BY_PHYSIO_ID";
export const GET_REQUESTS_BY_ID_AND_ACCEPTED =
  "GET_REQUESTS_BY_ID_AND_ACCEPTED";
export const ACCEPT_REQUEST = "ACCEPT_REQUEST";
export const ADD_SINGLE_REQUEST = "ADD_SINGLE_REQUEST";

export const getPatientsLinkRequests = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL + "linkRequests/byPatientAndStatus/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_REQUESTS_BY_ID,
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
export const getPatientsAcceptedRequests = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL + "linkRequests/byPatientAndAccepted/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_REQUESTS_BY_ID_AND_ACCEPTED,
          payload: data.content,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPhysioLinkRequests = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL + "linkRequests/byPhysioAndStatus/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_REQUESTS_BY_PHYSIO_ID,
          payload: data.content,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeRequest = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "linkRequests/" + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        dispatch({
          type: REMOVE_REQUEST,
          payload: id,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const acceptRequest = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "linkRequests/accept/" + id, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: ACCEPT_REQUEST,
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

export const getSingleRequest = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "linkRequests/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: ADD_SINGLE_REQUEST,
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
