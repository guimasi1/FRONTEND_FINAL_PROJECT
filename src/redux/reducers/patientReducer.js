import {
  GET_MY_PATIENT_PROFILE,
  GET_PATIENTS,
} from "../actions/patientsActions";

const initialState = {
  patients: [],
  patientProfile: null,
};

const patientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PATIENTS:
      return {
        ...state,
        patients: action.payload,
      };
    case GET_MY_PATIENT_PROFILE:
      return {
        ...state,
        patientProfile: action.payload,
      };
    default:
      return state;
  }
};

export default patientsReducer;
