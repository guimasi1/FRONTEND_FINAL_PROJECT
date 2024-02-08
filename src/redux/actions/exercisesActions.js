import Cookies from "js-cookie";
export const GET_EXERCISES = "GET_EXERCISES";
export const NEW_DETAILS_EXERCISE = "NEW_DETAILS_EXERCISE";

export const getExercises = () => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/api/exercises", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/api/exercisesDetails", {
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
};
