import Cookies from "js-cookie";
export const GET_EXERCISES = "GET_EXERCISES";

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

        console.log(data);
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
