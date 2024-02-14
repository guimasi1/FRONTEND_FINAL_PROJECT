import Cookies from "js-cookie";
import { BASE_URL } from "./assignmentsActions";
export const GET_PHYSIOTHERAPISTS = "GET_PHYSIOTHERAPISTS";
export const GET_PHYSIOTHERAPISTS_BY_PATIENT =
  "GET_PHYSIOTHERAPISTS_BY_PATIENT";
export const GET_MY_PHYSIO_PROFILE = "GET_MY_PHYSIO_PROFILE";
export const EDIT_BIOGRAPHY = "EDIT_BIOGRAPHY";
export const REMOVE_PATIENT_FROM_PHYSIO = "REMOVE_PATIENT_FROM_PHYSIO";
export const SEND_REQUEST = "SEND_REQUEST";

export const getPhysiotherapists = (size) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL + `physiotherapists${size ? "?size=" + size : ""}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
      const res = await fetch(BASE_URL + "physiotherapists/me", {
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
      const res = await fetch(BASE_URL + "linkRequests", {
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

export const getPhysiosBySpecialization = (specialization) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL +
          "physiotherapists/bySpecialization?specialization=" +
          specialization,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

export const getPhysiosByName = (nameObj) => {
  const { firstName, lastName } = nameObj;
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL +
          "physiotherapists/bySpecialization?firstName=" +
          firstName +
          "&lastName=" +
          lastName,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

export const removePatientFromPhysio = (physioId, patientId) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL + `physiotherapists/${physioId}/removePatient/${patientId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        dispatch({
          type: REMOVE_PATIENT_FROM_PHYSIO,
          payload: patientId,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editBiography = (id, physio) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + `physiotherapists/${id}`, {
        method: "PUT",
        body: JSON.stringify(physio),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        dispatch({
          type: EDIT_BIOGRAPHY,
          payload: physio,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPhysiosByPatient = (patientId) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL + `physiotherapists/byPatient/${patientId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_PHYSIOTHERAPISTS_BY_PATIENT,
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
