import { GET_PHYSIOTHERAPISTS } from "../actions/physiotherapistActions";

const initialState = {
  physiotherapists: [],
};

const physiotherapistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHYSIOTHERAPISTS:
      return {
        ...state,
        physiotherapists: action.payload,
      };
    default:
      return state;
  }
};

export default physiotherapistsReducer;
