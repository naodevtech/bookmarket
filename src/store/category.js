import { combineReducers } from "redux";

const initialState = {
  values: null,
  isFetching: false,
  isSuccess: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORY_FETCH":
      return { ...state, isFetching: true };
    case "CATEGORY_FETCH_SUCCESS":
      return { ...state, isFetching: false, isSuccess: true };
    case "CATEGORY_FETCH_WRONG":
      return { ...state, isFetching: false, isSuccess: false };
    case "CATEGORY_SET":
      return {
        ...state,
        values: action.payload,
      };
    case "CATEGORY_RESET":
      return initialState;
    default:
      return state;
  }
};

const categoryReducerCombined = combineReducers({
  category: categoryReducer,
});

export default categoryReducerCombined;
