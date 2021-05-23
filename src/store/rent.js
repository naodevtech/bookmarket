import { combineReducers } from "redux";

const initialState = {
  values: null,
  isFetching: false,
  isSuccess: null,
};

const rentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RENT_FETCH":
      return { ...state, isFetching: true };
    case "RENT_FETCH_SUCCESS":
      return { ...state, isFetching: false, isSuccess: true };
    case "RENT_FETCH_WRONG":
      return { ...state, isFetching: false, isSuccess: false };
    case "RENT_SET":
      return {
        ...state,
        values: action.payload,
      };
    case "RENT_RESET":
      return initialState;
    default:
      return state;
  }
};

const rentReducerCombined = combineReducers({
  rent: rentReducer,
});

export default rentReducerCombined;
