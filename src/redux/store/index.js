import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "../reducers/index";
import physiotherapistsReducer from "../reducers/physiotherapistReducer";
import patientsReducer from "../reducers/patientReducer";
import linkRequestReducer from "../reducers/linkRequestReducer";

const bigReducer = combineReducers({
  register: registerReducer,
  physiotherapists: physiotherapistsReducer,
  patients: patientsReducer,
  requests: linkRequestReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
