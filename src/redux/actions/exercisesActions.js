import Cookies from "js-cookie";
import { BASE_URL } from "./assignmentsActions";
export const GET_EXERCISES = "GET_EXERCISES";
export const NEW_DETAILS_EXERCISE = "NEW_DETAILS_EXERCISE";
export const SET_PAGE = "SET_PAGE";
export const SET_CURRENT_EXERCISE = "SET_CURRENT_EXERCISE";
export const CLOSE_DIALOG = "CLOSE_DIALOG";
export const OPEN_DIALOG = "OPEN_DIALOG";

export const getExercises = (page) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/exercises${page ? "?page=" + page : ""}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_EXERCISES,
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

export const createExerciseWithDetails = (exercise) => {
  const token = Cookies.get("token");
  if (exercise.exercise !== null) {
    console.log("sono in create exercise e non dovrei essere null");
    return async (dispatch) => {
      try {
        const res = await fetch(BASE_URL + "exercisesDetails", {
          method: "POST",
          body: JSON.stringify(exercise),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          const data = await res.json();
          dispatch({
            type: NEW_DETAILS_EXERCISE,
            payload: data,
          });
        } else {
          throw new Error("Something went wrong.");
        }
      } catch (error) {
        console.log(error);
      }
    };
  }
};

export const getExercisesByName = (name, page) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/exercises/byName?name=${name}&size=6${
          page ? `&page=${page}` : ""
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_EXERCISES,
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

export const setPage = (page) => ({ type: SET_PAGE, payload: page });

export const setCurrentExercise = (id) => ({
  type: SET_CURRENT_EXERCISE,
  payload: id,
});

export const closeDialog = () => ({
  type: CLOSE_DIALOG,
});

export const openDialog = () => ({
  type: OPEN_DIALOG,
});

export const getExercisesByParams = (params) => {
  const { page, name, targetArea, difficulty } = params;
  console.log(params);

  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/exercises/byParams?name=${name}&size=6&page=${page}&targetArea=${
          targetArea === "ANY" ? "" : targetArea
        }&difficulty=${difficulty === "ANY" ? "" : difficulty}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_EXERCISES,
          payload: data,
        });
        return data;
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
