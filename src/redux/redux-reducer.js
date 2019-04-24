import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// Reducer
import authReducer from "./reducer/authReducer";
import userReducer from "./reducer/userReducer";
import appelApiReducer from "./reducer/appelApiReducer";

const appReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  users: userReducer,
  api: appelApiReducer
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
