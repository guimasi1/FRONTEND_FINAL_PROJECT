import {
  ADD_EXERCISE_TO_ASSIGNMENT,
  CREATE_ASSIGNMENT,
  DELETE_ASSIGNMENT,
  GET_ASSIGNMENTS,
  GET_ASSIGNMENTS_BY_PATIENT,
  GET_ASSIGNMENTS_BY_PATIENT_AND_PHYSIO,
  GET_SINGLE_ASSIGNMENT,
  REMOVE_EXERCISE_DETAILS,
} from "../actions/assignmentsActions";

const initialState = {
  allAssignments: [],
  newAssignment: null,
  assignmentsByIds: [],
  newAddedExercise: null,
  exercisesDetailsByAssignment: [],
  patientAssignments: [],
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
        assignmentsByIds: [...state.assignmentsByIds, action.payload],
      };
    case GET_ASSIGNMENTS_BY_PATIENT_AND_PHYSIO:
      return {
        ...state,
        assignmentsByIds: action.payload,
      };
    case GET_ASSIGNMENTS_BY_PATIENT:
      return {
        ...state,
        patientAssignments: action.payload,
      };
    case ADD_EXERCISE_TO_ASSIGNMENT:
      return {
        ...state,
        newAddedExercise: action.payload.id,
        exercisesDetailsByAssignment: [
          ...state.exercisesDetailsByAssignment,
          action.payload,
        ],
      };
    case GET_SINGLE_ASSIGNMENT:
      return {
        ...state,
        newAssignment: action.payload,
        exercisesDetailsByAssignment: action.payload.exercisesDetails,
      };
    case DELETE_ASSIGNMENT:
      return {
        ...state,
        assignmentsByIds: state.assignmentsByIds.filter(
          (assignment) => assignment.id !== action.payload
        ),
      };
    case REMOVE_EXERCISE_DETAILS:
      return {
        ...state,
        newAssignment: {
          ...state.newAssignment,
          exercisesDetails: state.newAssignment.exercisesDetails.filter(
            (ex) => ex.id !== action.payload
          ),
        },
        exercisesDetailsByAssignment: state.exercisesDetailsByAssignment.filter(
          (exercise) => exercise.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default assignmentReducer;
