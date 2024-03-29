import Cookies from "js-cookie";
import { BASE_URL } from "./assignmentsActions";

export const GET_PATIENTS_BY_LASTNAME = "GET_PATIENTS_BY_LASTNAME";
export const GET_PHYSIOTHERAPISTS_BY_PARAMS = "GET_PHYSIOTHERAPISTS_BY_PARAMS";
export const REMOVE_PATIENT = "REMOVE_PATIENT";
export const REMOVE_PHYSIO = "REMOVE_PHYSIO";
export const REMOVE_EXERCISE_ADMIN = "REMOVE_EXERCISE_ADMIN";
export const GET_EXERCISES_BY_PARAMS_ADMIN = "GET_EXERCISES_BY_PARAMS_ADMIN";
export const TOTAL_EXERCISES = "TOTAL_EXERCISES";
export const TOTAL_PATIENTS = "TOTAL_PATIENTS";
export const TOTAL_PHYSIOS = "TOTAL_PHYSIOS";
export const TOTAL_EASY = "TOTAL_EASY";
export const TOTAL_HARD = "TOTAL_HARD";
export const TOTAL_MEDIUM = "TOTAL_MEDIUM";
export const LOGIN_ADMIN = "LOGIN_ADMIN";
export const GET_MY_ADMIN_PROFILE = "GET_MY_ADMIN_PROFILE";
export const ADMIN_LOGOUT = "ADMIN_LOGOUT";

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

export const getExercisesCount = () => {
  const token = Cookies.get("token");

  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "exercises/count", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: TOTAL_EXERCISES,
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
export const getPhysiosCount = () => {
  const token = Cookies.get("token");

  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "physiotherapists/count", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: TOTAL_PHYSIOS,
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
export const getPatientsCount = () => {
  const token = Cookies.get("token");

  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "patients/count", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: TOTAL_PATIENTS,
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

export const getNumExercisesByDifficulty = (difficulty) => {
  const token = Cookies.get("token");

  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL + "exercises/countByDifficulty?difficulty=" + difficulty,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        if (difficulty === "EASY") {
          dispatch({
            type: TOTAL_EASY,
            payload: data,
          });
        } else if (difficulty === "MEDIUM") {
          dispatch({
            type: TOTAL_MEDIUM,
            payload: data,
          });
        } else if (difficulty === "HARD") {
          dispatch({
            type: TOTAL_HARD,
            payload: data,
          });
        }
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const adminLogin = (loginData) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/auth/login/admin", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: LOGIN_ADMIN,
          payload: data.token,
        });
        console.log(loginData);
        Cookies.set("adminToken", data.token);
        return true;
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMyAdminProfile = () => {
  const token = Cookies.get("adminToken");
  console.log(token + "sono nel getadminprofile");

  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}admins/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_MY_ADMIN_PROFILE,
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

export const adminLogout = () => ({ type: ADMIN_LOGOUT });
