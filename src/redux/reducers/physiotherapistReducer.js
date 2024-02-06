import {
  GET_MY_PHYSIO_PROFILE,
  GET_PHYSIOTHERAPISTS,
  SEND_REQUEST,
} from "../actions/physiotherapistActions";

const initialState = {
  physiotherapistsData: [],
  physioProfile: null,
  linkRequest: null,
};

const physiotherapistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHYSIOTHERAPISTS:
      return {
        ...state,
        physiotherapistsData: action.payload,
      };
    case GET_MY_PHYSIO_PROFILE:
      return {
        ...state,
        physioProfile: action.payload,
      };
    case SEND_REQUEST:
      return {
        ...state,
        linkRequest: action.payload,
      };
    default:
      return state;
  }
};

export default physiotherapistsReducer;
