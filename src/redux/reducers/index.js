import {
  LOGIN,
  REGISTER_PATIENT,
  REGISTER_PHYSIOTHERAPIST,
  SET_ROLE,
} from "../actions/authentication";

const initialState = {
  registrationPhysiotherapistId: "",
  registrationPatientId: "",
  token: "",
  role: "",
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
    case SET_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
