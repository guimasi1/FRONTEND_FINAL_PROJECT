import Cookies from "js-cookie";
export const GET_PATIENTS = "GET_PATIENTS";
export const GET_MY_PATIENT_PROFILE = "GET_MY_PATIENT_PROFILE";
export const GET_PATIENTS_BY_PHYSIO = "GET_PATIENTS_BY_PHYSIO";
export const GET_SINGLE_PATIENT = "GET_SINGLE_PATIENT";

export const getPatients = () => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/api/patients", {
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

        console.log(data);
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

        console.log(data);
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPatientsByPhysio = (physio_id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        "http://localhost:3001/api/patients/byPhysiotherapist/" + physio_id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_PATIENTS_BY_PHYSIO,
          payload: data,
        });

        console.log(data);
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
      const res = await fetch("http://localhost:3001/api/patients/" + id, {
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

        console.log(data);
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
