import {
  GET_MY_PATIENT_PROFILE,
  GET_PATIENTS,
  GET_PATIENTS_BY_PHYSIO,
  GET_SINGLE_PATIENT,
  UPLOAD_PATIENT_IMAGE_PROFILE,
} from "../actions/patientsActions";
import { REMOVE_PATIENT_FROM_PHYSIO } from "../actions/physiotherapistActions";

const initialState = {
  patients: [],
  patientProfile: null,
  patientsByPhysio: [],
  singlePatient: null,
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
    case GET_SINGLE_PATIENT:
      return {
        ...state,
        singlePatient: action.payload,
      };
    case UPLOAD_PATIENT_IMAGE_PROFILE:
      return {
        ...state,
        patientProfile: {
          ...state.patientProfile,
          profilePictureUrl: action.payload,
        },
      };
    case REMOVE_PATIENT_FROM_PHYSIO:
      return {
        ...state,
        patientsByPhysio: {
          ...state.patientsByPhysio,
          content: state.patientsByPhysio.content.filter(
            (patient) => patient.id !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default patientsReducer;
