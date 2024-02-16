import {
  ADD_EXERCISE_TO_ASSIGNMENT,
  CLOSE_ASSIGNMENT_DIALOG,
  CREATE_ASSIGNMENT,
  CURRENT_ASSIGNMENT_TO_DELETE,
  DELETE_ASSIGNMENT,
  EDIT_ASSIGNMENT,
  GET_ASSIGNMENTS,
  GET_ASSIGNMENTS_BY_PATIENT,
  GET_ASSIGNMENTS_BY_PATIENT_AND_PHYSIO,
  GET_SINGLE_ASSIGNMENT,
  GET_SINGLE_EXERCISE_WITH_DETAILS,
  OPEN_ASSIGNMENT_DIALOG,
  REMOVE_EXERCISE_DETAILS,
  SET_COMPLETED,
  SET_IN_PROGRESS,
} from "../actions/assignmentsActions";

const initialState = {
  allAssignments: [],
  newAssignment: null,
  assignmentsByIds: [],
  newAddedExercise: null,
  exercisesDetailsByAssignment: [],
  patientAssignments: [],
  assignmentToDeleteId: "",
  dialogStatus: false,
  singleExerciseWithDetails: null,
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
        newAddedExercise: action.payload,
        exercisesDetailsByAssignment: [
          ...state.exercisesDetailsByAssignment,
          action.payload,
        ],
        newAssignment: {
          ...state.newAssignment,
          exercisesDetails: [
            ...state.newAssignment.exercisesDetails,
            action.payload,
          ],
        },
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
        newAssignment: null,
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
    case SET_IN_PROGRESS:
      return {
        ...state,
        patientAssignments: state.patientAssignments.map((assignment) =>
          assignment.id === action.payload
            ? { ...assignment, assignmentStatus: "IN_PROGRESS" }
            : assignment
        ),
        newAssignment: {
          ...state.newAssignment,
          assignmentStatus: "IN_PROGRESS",
        },
      };
    case EDIT_ASSIGNMENT:
      return {
        ...state,
        patientAssignments: state.patientAssignments.map((assignment) =>
          assignment.id === action.payload.id
            ? { assignment: action.payload }
            : assignment
        ),
        newAssignment: action.payload,
      };
    case SET_COMPLETED:
      return {
        ...state,
        patientAssignments: state.patientAssignments.map((assignment) =>
          assignment.id === action.payload
            ? { ...assignment, assignmentStatus: "COMPLETED" }
            : assignment
        ),
        newAssignment: {
          ...state.newAssignment,
          assignmentStatus: "COMPLETED",
        },
      };
    case CLOSE_ASSIGNMENT_DIALOG:
      return {
        ...state,
        dialogStatus: false,
      };
    case OPEN_ASSIGNMENT_DIALOG:
      return {
        ...state,
        dialogStatus: true,
      };
    case CURRENT_ASSIGNMENT_TO_DELETE:
      return {
        ...state,
        assignmentToDeleteId: action.payload,
      };
    case GET_SINGLE_EXERCISE_WITH_DETAILS:
      return {
        ...state,
        singleExerciseWithDetails: action.payload,
      };

    default:
      return state;
  }
};

export default assignmentReducer;
