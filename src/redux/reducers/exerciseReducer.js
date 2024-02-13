import {
  CLOSE_DIALOG,
  GET_EXERCISES,
  NEW_DETAILS_EXERCISE,
  OPEN_DIALOG,
  SET_CURRENT_EXERCISE,
} from "../actions/exercisesActions";

const initialState = {
  exercises: [],
  newExercise: "",
  currentExerciseId: "",
  dialogStatus: false,
};

const exercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES:
      return {
        ...state,
        exercises: action.payload,
      };
    case NEW_DETAILS_EXERCISE:
      return {
        ...state,
        newExercise: action.payload,
      };
    case CLOSE_DIALOG:
      return {
        ...state,
        dialogStatus: false,
      };
    case OPEN_DIALOG:
      return {
        ...state,
        dialogStatus: true,
      };
    case SET_CURRENT_EXERCISE:
      return {
        ...state,
        currentExerciseId: action.payload,
      };

    default:
      return state;
  }
};

export default exercisesReducer;
