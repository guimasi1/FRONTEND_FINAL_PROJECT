import {
  ADMIN_LOGOUT,
  GET_EXERCISES_BY_PARAMS_ADMIN,
  GET_MY_ADMIN_PROFILE,
  GET_PATIENTS_BY_LASTNAME,
  GET_PHYSIOTHERAPISTS_BY_PARAMS,
  LOGIN_ADMIN,
  REMOVE_EXERCISE_ADMIN,
  REMOVE_PATIENT,
  REMOVE_PHYSIO,
  TOTAL_EASY,
  TOTAL_EXERCISES,
  TOTAL_HARD,
  TOTAL_MEDIUM,
  TOTAL_PATIENTS,
  TOTAL_PHYSIOS,
} from "../actions/adminsActions";

const initialState = {
  patientsByLastName: [],
  physiotherapists: [],
  exercises: [],
  totalExercises: null,
  totalPatients: null,
  totalPhysios: null,
  easyExercises: null,
  mediumExercises: null,
  hardExercises: null,
  tokenAdmin: "",
  adminProfile: null,
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
    case TOTAL_EXERCISES:
      return {
        ...state,
        totalExercises: action.payload,
      };
    case TOTAL_PATIENTS:
      return {
        ...state,
        totalPatients: action.payload,
      };
    case TOTAL_PHYSIOS:
      return {
        ...state,
        totalPhysios: action.payload,
      };
    case TOTAL_EASY:
      return {
        ...state,
        easyExercises: action.payload,
      };
    case TOTAL_MEDIUM:
      return {
        ...state,
        mediumExercises: action.payload,
      };
    case TOTAL_HARD:
      return {
        ...state,
        hardExercises: action.payload,
      };
    case LOGIN_ADMIN:
      return {
        ...state,
        tokenAdmin: action.payload,
      };
    case GET_MY_ADMIN_PROFILE:
      return {
        ...state,
        adminProfile: action.payload,
      };
    case ADMIN_LOGOUT:
      return {
        ...state,
        adminProfile: null,
        tokenAdmin: "",
      };

    default:
      return state;
  }
};

export default adminsReducer;
