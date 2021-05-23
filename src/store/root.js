import { combineReducers } from "redux";
import mainReducer from "./main";
import authReducer from "./auth";
import bookReducerCombined from "./book";
import categoryReducerCombined from "./category";
import authorReducerCombined from "./author";
import rentReducerCombined from "./rent";

const rootReducer = combineReducers({
  app: mainReducer,
  auth: authReducer,
  category: categoryReducerCombined,
  book: bookReducerCombined,
  author: authorReducerCombined,
  rent: rentReducerCombined,
});

export default rootReducer;
