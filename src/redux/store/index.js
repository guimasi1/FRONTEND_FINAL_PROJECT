import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "../reducers/index";
import physiotherapistsReducer from "../reducers/physiotherapistReducer";
import patientsReducer from "../reducers/patientReducer";
import linkRequestReducer from "../reducers/linkRequestReducer";
import exercisesReducer from "../reducers/exerciseReducer";
import assignmentReducer from "../reducers/assignmentReducer";
import toastifyReducer from "../reducers/toastifyReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Usa local storage come default

const rootReducer = combineReducers({
  register: registerReducer,
  physiotherapists: physiotherapistsReducer,
  patients: patientsReducer,
  requests: linkRequestReducer,
  exercises: exercisesReducer,
  assignments: assignmentReducer,
  toastify: toastifyReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
