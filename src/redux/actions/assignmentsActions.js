import Cookies from "js-cookie";
export const GET_ASSIGNMENTS = "GET_ASSIGNMENTS";
export const GET_SINGLE_ASSIGNMENT = "GET_SINGLE_ASSIGNMENT";
export const CREATE_ASSIGNMENT = "CREATE_ASSIGNMENT";
export const DELETE_ASSIGNMENT = "DELETE_ASSIGNMENT";
export const REMOVE_EXERCISE_DETAILS = "REMOVE_EXERCISE_DETAILS";
export const UPDATE_ASSIGNMENTS = "UPDATE_ASSIGNMENTS";
export const ADD_EXERCISE_TO_ASSIGNMENT = "ADD_EXERCISE_TO_ASSIGNMENT";
export const GET_ASSIGNMENTS_BY_PATIENT = "GET_ASSIGNMENTS_BY_PATIENT";
export const GET_ASSIGNMENTS_BY_PATIENT_AND_PHYSIO =
  "GET_ASSIGNMENTS_BY_PATIENT_AND_PHYSIO";
export const SET_IN_PROGRESS = "SET_IN_PROGRESS";
export const SET_COMPLETED = "SET_COMPLETED";
export const EDIT_ASSIGNMENT = "EDIT_ASSIGNMENT";
export const BASE_URL = "http://localhost:3001/api/";

export const getAllAssignments = () => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "exercisesAssignments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      const res = await fetch(BASE_URL + "exercisesAssignments", {
        method: "POST",
        body: JSON.stringify(assignmentData),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
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
        BASE_URL +
          "exercisesAssignments/getByPatient/" +
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
        BASE_URL +
          "exercisesDetails/" +
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
      const res = await fetch(BASE_URL + "exercisesAssignments/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      const res = await fetch(BASE_URL + "exercisesAssignments/" + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

export const removeExerciseDetails = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "exercisesDetails/" + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        dispatch({
          type: REMOVE_EXERCISE_DETAILS,
          payload: id,
        });
        console.log(id);
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAssignmentsByPatient = (patient_id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL + "exercisesAssignments/getByPatient/" + patient_id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_ASSIGNMENTS_BY_PATIENT,
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

export const setAssignmentToInProgress = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL + "exercisesAssignments/inProgress/" + id,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        dispatch({
          type: SET_IN_PROGRESS,
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

export const setAssignmentCompleted = (id) => {
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(
        BASE_URL + "exercisesAssignments/complete/" + id,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        dispatch({
          type: SET_COMPLETED,
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

export const editAssignment = (id, assignmentData) => {
  console.log(assignmentData.id);
  const token = Cookies.get("token");
  return async (dispatch) => {
    try {
      const res = await fetch(BASE_URL + "exercisesAssignments/" + id, {
        method: "PUT",
        body: JSON.stringify(assignmentData),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        dispatch({
          type: EDIT_ASSIGNMENT,
          payload: assignmentData,
        });
      } else {
        console.log(assignmentData);
        console.log(id);
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
