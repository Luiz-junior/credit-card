import { combineReducers } from "redux";

import { formReducer } from "./formReducer";

const reducers = combineReducers({
  formReducer,
});

export default reducers;
