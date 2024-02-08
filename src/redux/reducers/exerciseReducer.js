import {
  GET_EXERCISES,
  NEW_DETAILS_EXERCISE,
} from "../actions/exercisesActions";

const initialState = {
  exercises: [],
  newExercise: "",
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

    default:
      return state;
  }
};

export default exercisesReducer;
