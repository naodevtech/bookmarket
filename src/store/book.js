import { combineReducers } from "redux";

const initialState = {
  values: null,
  isFetching: false,
  isSuccess: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_FETCH":
      return { ...state, isFetching: true };
    case "BOOKS_FETCH_SUCCESS":
      return { ...state, isFetching: false, isSuccess: false };
    case "BOOKS_FETCH_WRONG":
      return { ...state, isFetching: false, isSuccess: false };
    case "BOOKS_SET":
      return {
        ...state,
        values: action.payload,
      };
    case "BOOKS_RESET":
      return initialState;
    default:
      return state;
  }
};

const bookReducerCombined = combineReducers({
  book: bookReducer,
});

export default bookReducerCombined;
