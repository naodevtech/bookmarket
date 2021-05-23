import { combineReducers } from "redux";
import mainReducer from "./main";
import authReducer from "./auth";
import bookReducerCombined from "./book";

const rootReducer = combineReducers({
  app: mainReducer,
  auth: authReducer,
  book: bookReducerCombined,
});

export default rootReducer;
