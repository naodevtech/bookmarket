import { combineReducers } from "redux";

const initialState = {
  values: null,
  isFetching: false,
  isSuccess: null,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GENRE_FETCH":
      return { ...state, isFetching: true };
    case "GENRE_FETCH_SUCCESS":
      return { ...state, isFetching: false, isSuccess: false };
    case "GENRE_FETCH_WRONG":
      return { ...state, isFetching: false, isSuccess: false };
    case "GENRE_SET":
      return {
        ...state,
        values: action.payload,
      };
    case "GENRE_RESET":
      return initialState;
    default:
      return state;
  }
};

const genreReducerCombined = combineReducers({
  genre: genreReducer,
});

export default genreReducerCombined;
