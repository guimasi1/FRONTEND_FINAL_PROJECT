import {
  EDIT_BIOGRAPHY,
  GET_MY_PHYSIO_PROFILE,
  GET_PHYSIOTHERAPISTS,
  GET_PHYSIOTHERAPISTS_BY_PATIENT,
  SEND_REQUEST,
} from "../actions/physiotherapistActions";

const initialState = {
  physiotherapistsData: [],
  physioProfile: null,
  linkRequest: null,
  physiosByPatient: [],
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
    case EDIT_BIOGRAPHY:
      return {
        ...state,
        physioProfile: action.payload,
      };
    case GET_PHYSIOTHERAPISTS_BY_PATIENT:
      return {
        ...state,
        physiosByPatient: action.payload,
      };

    default:
      return state;
  }
};

export default physiotherapistsReducer;
