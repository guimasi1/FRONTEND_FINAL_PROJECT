import {
  CREATE_ASSIGNMENT,
  GET_ASSIGNMENTS,
} from "../actions/assignmentsActions";

const initialState = {
  allAssignments: [],
  newAssignment: null,
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

    default:
      return state;
  }
};

export default assignmentReducer;
