import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "../reducers/index";
import physiotherapistsReducer from "../reducers/physiotherapistReducer";
import patientsReducer from "../reducers/patientReducer";
import linkRequestReducer from "../reducers/linkRequestReducer";
import exercisesReducer from "../reducers/exerciseReducer";
import assignmentReducer from "../reducers/assignmentReducer";

const bigReducer = combineReducers({
  register: registerReducer,
  physiotherapists: physiotherapistsReducer,
  patients: patientsReducer,
  requests: linkRequestReducer,
  exercises: exercisesReducer,
  assignments: assignmentReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
