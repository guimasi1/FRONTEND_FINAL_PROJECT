import Cookies from "js-cookie";
export const GET_ASSIGNMENTS = "GET_ASSIGNMENTS";
export const CREATE_ASSIGNMENT = "CREATE_ASSIGNMENT";

export const getAllAssignments = () => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        "http://localhost:3001/api/exercisesAssignments",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_ASSIGNMENTS,
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

export const createAssignment = (assignmentData) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        "http://localhost:3001/api/exercisesAssignments",
        {
          method: "POST",
          body: JSON.stringify(assignmentData),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: CREATE_ASSIGNMENT,
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
