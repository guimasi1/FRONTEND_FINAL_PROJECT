import {
  ACCEPT_REQUEST,
  GET_REQUESTS_BY_ID,
  REMOVE_REQUEST,
} from "../actions/linkRequestsActions";

const initialState = {
  linkRequestsByPatient: [],
  acceptRequest: null,
};

const linkRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUESTS_BY_ID:
      return {
        ...state,
        linkRequestsByPatient: action.payload,
      };
    case REMOVE_REQUEST:
      return {
        ...state,
        linkRequestsByPatient: state.linkRequestsByPatient.filter(
          (request) => request.id !== action.payload
        ),
      };
    case ACCEPT_REQUEST:
      return {
        ...state,
        acceptRequest: action.payload,
      };
    default:
      return state;
  }
};

export default linkRequestReducer;
