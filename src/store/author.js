import { combineReducers } from "redux";

const initialState = {
  values: null,
  isFetching: false,
  isSuccess: null,
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHOR_FETCH":
      return { ...state, isFetching: true };
    case "AUTHOR_FETCH_SUCCESS":
      return { ...state, isFetching: false, isSuccess: false };
    case "AUTHOR_FETCH_WRONG":
      return { ...state, isFetching: false, isSuccess: false };
    case "AUTHOR_SET":
      return {
        ...state,
        values: action.payload,
      };
    case "AUTHOR_RESET":
      return initialState;
    default:
      return state;
  }
};

const authorReducerCombined = combineReducers({
  author: authorReducer,
});

export default authorReducerCombined;
