import {
  ADD_EXERCISE_TO_ASSIGNMENT,
  CREATE_ASSIGNMENT,
  GET_ASSIGNMENTS,
  GET_ASSIGNMENTS_BY_PATIENT_AND_PHYSIO,
  GET_SINGLE_ASSIGNMENT,
} from "../actions/assignmentsActions";

const initialState = {
  allAssignments: [],
  newAssignment: null,
  assignmentsByIds: [],
  newAddedExercise: null,
};

const assignmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSIGNMENTS:
      return {
        ...state,
        allAssignments: action.payload,
      };
    case CREATE_ASSIGNMENT:
      return {
        ...state,
        newAssignment: action.payload,
      };
    case GET_ASSIGNMENTS_BY_PATIENT_AND_PHYSIO:
      return {
        ...state,
        assignmentsByIds: action.payload,
      };
    case ADD_EXERCISE_TO_ASSIGNMENT:
      return {
        ...state,
        newAddedExercise: action.payload,
      };
    case GET_SINGLE_ASSIGNMENT:
      return {
        ...state,
        newAssignment: action.payload,
      };
    default:
      return state;
  }
};

export default assignmentReducer;
