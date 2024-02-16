import Cookies from "js-cookie";
import { BASE_URL } from "./assignmentsActions";
export const GET_PATIENTS = "GET_PATIENTS";
export const GET_MY_PATIENT_PROFILE = "GET_MY_PATIENT_PROFILE";
export const GET_PATIENTS_BY_PHYSIO = "GET_PATIENTS_BY_PHYSIO";
export const GET_SINGLE_PATIENT = "GET_SINGLE_PATIENT";
export const REMOVE_PHYSIO_FROM_PATIENT = "REMOVE_PHYSIO_FROM_PATIENT";

export const getPatients = () => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "patients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_PATIENTS,
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

export const getMyPatientProfile = () => {
  const token = Cookies.get("token");

  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3001/api/patients/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_MY_PATIENT_PROFILE,
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

export const getPatientsByPhysio = (physio_id, lastName) => {
  const token = Cookies.get("token");
  let url;
  if (lastName) {
    url =
      `http://localhost:3001/api/patients/byPhysiotherapist/${physio_id}` +
      `?lastName=${lastName}`;
  } else {
    url = `http://localhost:3001/api/patients/byPhysiotherapist/${physio_id}`;
  }
  return async (dispatch) => {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_PATIENTS_BY_PHYSIO,
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

export const getSinglePatient = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "patients/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_SINGLE_PATIENT,
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

export const removePhysioFromPatient = (physioId, patientId) => {
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
          type: REMOVE_PHYSIO_FROM_PATIENT,
          payload: physioId,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
