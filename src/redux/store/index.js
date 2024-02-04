import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "../reducers/index";
import physiotherapistsReducer from "../reducers/physiotherapistReducer";

const bigReducer = combineReducers({
  register: registerReducer,
  physiotherapists: physiotherapistsReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
