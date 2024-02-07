import {
  GET_MY_PATIENT_PROFILE,
  GET_PATIENTS,
  GET_PATIENTS_BY_PHYSIO,
} from "../actions/patientsActions";

const initialState = {
  patients: [],
  patientProfile: null,
  patientsByPhysio: [],
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
    case GET_PATIENTS_BY_PHYSIO:
      return {
        ...state,
        patientsByPhysio: action.payload,
      };
    default:
      return state;
  }
};

export default patientsReducer;
