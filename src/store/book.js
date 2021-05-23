import { combineReducers } from "redux";

const initialState = {
  values: null,
  isFetching: false,
  isSuccess: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_FETCH":
      return { ...state, isFetching: true };
    case "BOOK_FETCH_SUCCESS":
      return { ...state, isFetching: false, isSuccess: true };
    case "BOOK_FETCH_WRONG":
      return { ...state, isFetching: false, isSuccess: false };
    case "BOOK_SET":
      return {
        ...state,
        values: action.payload,
      };
    case "BOOK_RESET":
      return initialState;
    default:
      return state;
  }
};

const bookReducerCombined = combineReducers({
  book: bookReducer,
});

export default bookReducerCombined;
