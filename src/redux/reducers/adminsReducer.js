import {
  GET_EXERCISES_BY_PARAMS_ADMIN,
  GET_PATIENTS_BY_LASTNAME,
  GET_PHYSIOTHERAPISTS_BY_PARAMS,
  REMOVE_EXERCISE_ADMIN,
  REMOVE_PATIENT,
  REMOVE_PHYSIO,
} from "../actions/adminsActions";

const initialState = {
  patientsByLastName: [],
  physiotherapists: [],
  exercises: [],
};

const adminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PATIENTS_BY_LASTNAME:
      return {
        ...state,
        patientsByLastName: action.payload,
      };
    case GET_PHYSIOTHERAPISTS_BY_PARAMS:
      return {
        ...state,
        physiotherapists: action.payload,
      };
    case GET_EXERCISES_BY_PARAMS_ADMIN:
      return {
        ...state,
        exercises: action.payload,
      };
    case REMOVE_PATIENT:
      return {
        ...state,
        patientsByLastName: state.patientsByLastName.filter(
          (patient) => patient.id !== action.payload
        ),
      };
    case REMOVE_PHYSIO:
      return {
        ...state,
        physiotherapists: state.physiotherapists.filter(
          (physio) => physio.id !== action.payload
        ),
      };
    case REMOVE_EXERCISE_ADMIN:
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default adminsReducer;
