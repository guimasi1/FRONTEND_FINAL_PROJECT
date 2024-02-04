import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "../reducers/index";

const bigReducer = combineReducers({
  register: registerReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
