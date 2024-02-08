import {
  CREATE_ASSIGNMENT,
  GET_ASSIGNMENTS,
  GET_ASSIGNMENTS_BY_PATIENT_AND_PHYSIO,
} from "../actions/assignmentsActions";

const initialState = {
  allAssignments: [],
  newAssignment: null,
  assignmentsByIds: [],
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
    default:
      return state;
  }
};

export default assignmentReducer;
