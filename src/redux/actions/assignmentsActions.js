import Cookies from "js-cookie";
export const GET_ASSIGNMENTS = "GET_ASSIGNMENTS";
export const GET_SINGLE_ASSIGNMENT = "GET_SINGLE_ASSIGNMENT";
export const CREATE_ASSIGNMENT = "CREATE_ASSIGNMENT";
export const DELETE_ASSIGNMENT = "DELETE_ASSIGNMENT";
export const ADD_EXERCISE_TO_ASSIGNMENT = "ADD_EXERCISE_TO_ASSIGNMENT";
export const GET_ASSIGNMENTS_BY_PATIENT_AND_PHYSIO =
  "GET_ASSIGNMENTS_BY_PATIENT_AND_PHYSIO";

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

export const getAssignmentsByPatientAndPhysio = (patient_id, physio_id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        "http://localhost:3001/api/exercisesAssignments/getByPatient/" +
          patient_id +
          "/andPhysio/" +
          physio_id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_ASSIGNMENTS_BY_PATIENT_AND_PHYSIO,
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

export const addExerciseToAssignment = (assignment_id, exerciseDetails_id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        "http://localhost:3001/api/exercisesDetails/" +
          exerciseDetails_id +
          "/assignTo/" +
          assignment_id,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: ADD_EXERCISE_TO_ASSIGNMENT,
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

export const getSingleAssignment = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        "http://localhost:3001/api/exercisesAssignments/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_SINGLE_ASSIGNMENT,
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

export const removeAssignment = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        "http://localhost:3001/api/exercisesAssignments/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        dispatch({
          type: DELETE_ASSIGNMENT,
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
