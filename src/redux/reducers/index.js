import {
  LOGIN,
  LOG_STATUS,
  REGISTER_PATIENT,
  REGISTER_PHYSIOTHERAPIST,
  SET_ROLE,
} from "../actions/authentication";

const initialState = {
  registrationPhysiotherapistId: "",
  registrationPatientId: "",
  token: "",
  role: "",
  loggedIn: false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PHYSIOTHERAPIST:
      return {
        ...state,
        registrationPhysiotherapistId: action.payload,
        registrationPatientId: "",
      };
    case REGISTER_PATIENT:
      return {
        ...state,
        registrationPatientId: action.payload,
        registrationPhysiotherapistId: "",
      };
    case LOGIN:
      return {
        ...state,
        token: action.payload,
        loggedIn: true,
      };
    case SET_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    case LOG_STATUS:
      return {
        ...state,
        loggedIn: false,
        registrationPhysiotherapistId: "",
        registrationPatientId: "",
        token: "",
        role: "",
      };
    default:
      return state;
  }
};

export default registerReducer;
