import { combineReducers } from "redux";
import mainReducer from "./main";
import authReducer from "./auth";
import bookReducerCombined from "./book";
import categoryReducerCombined from "./category";
import authorReducerCombined from "./author";
import genreReducerCombined from "./genre";

const rootReducer = combineReducers({
  app: mainReducer,
  auth: authReducer,
  book: bookReducerCombined,
  category: categoryReducerCombined,
  author: authorReducerCombined,
  genre: genreReducerCombined,
});

export default rootReducer;
