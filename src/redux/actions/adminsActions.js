import Cookies from "js-cookie";
import { BASE_URL } from "./assignmentsActions";

export const GET_PATIENTS_BY_LASTNAME = "GET_PATIENTS_BY_LASTNAME";
export const GET_PHYSIOTHERAPISTS_BY_PARAMS = "GET_PHYSIOTHERAPISTS_BY_PARAMS";
export const REMOVE_PATIENT = "REMOVE_PATIENT";
export const REMOVE_PHYSIO = "REMOVE_PHYSIO";
export const REMOVE_EXERCISE_ADMIN = "REMOVE_EXERCISE_ADMIN";
export const GET_EXERCISES_BY_PARAMS_ADMIN = "GET_EXERCISES_BY_PARAMS_ADMIN";

export const getPhysiosByParameters = (specialization, size) => {
  const token = Cookies.get("token");

  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL +
          "physiotherapists/byParams?specialization=" +
          (specialization === "ANY" ? "" : specialization) +
          "&size=" +
          size,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_PHYSIOTHERAPISTS_BY_PARAMS,
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
export const getPatientsByLastName = (lastName, size) => {
  const token = Cookies.get("token");

  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL + "patients/byLastName?lastName=" + lastName + "&size=" + size,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_PATIENTS_BY_LASTNAME,
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
export const getAllExercisesByParams = (params, size) => {
  let { name, difficultyLevel, targetArea } = params;
  const token = Cookies.get("token");
  if (targetArea === "ANY") {
    targetArea = "";
  }
  if (difficultyLevel === "ANY") {
    difficultyLevel = "";
  }
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL +
          "exercises/byParams?name=" +
          name +
          "&size=" +
          size +
          "&difficulty=" +
          difficultyLevel +
          "&targetArea=" +
          targetArea,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_EXERCISES_BY_PARAMS_ADMIN,
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

export const removePhysio = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "physiotherapists/" + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        dispatch({
          type: REMOVE_PHYSIO,
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
export const removePatient = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "patients/" + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        dispatch({
          type: REMOVE_PATIENT,
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
export const removeExercise = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "exercises/" + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        dispatch({
          type: REMOVE_EXERCISE_ADMIN,
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
