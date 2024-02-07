import { GET_EXERCISES } from "../actions/exercisesActions";

const initialState = {
  exercises: [],
};

const exercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES:
      return {
        ...state,
        exercises: action.payload,
      };

    default:
      return state;
  }
};

export default exercisesReducer;
