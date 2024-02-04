import {
  LOGIN,
  REGISTER_PATIENT,
  REGISTER_PHYSIOTHERAPIST,
} from "../actions/authentication";

const initialState = {
  registrationPhysiotherapistId: "",
  registrationPatientId: "",
  token: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PHYSIOTHERAPIST:
      return {
        ...state,
        registrationPhysiotherapistId: action.payload,
      };
    case REGISTER_PATIENT:
      return {
        ...state,
        registrationPatientId: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
