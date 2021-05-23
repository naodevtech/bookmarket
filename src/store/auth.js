import { combineReducers } from "redux";

const initialState = {
  values: null,
  loading: false,
  isLogged: null,
  isSuccess: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_FETCH":
      return { ...state, isFetching: true };
    case "USER_FETCH_SUCCESS":
      return { ...state, isFetching: false, isLogged: true };
    case "USER_FETCH_WRONG":
      return { ...state, isFetching: false, isSuccess: false, isLogged: false };
    case "USER_SET":
      return {
        ...state,
        isLogged: true,
        values: action.payload,
      };
    case "USER_LOGGED":
      return { ...state, isLogged: true };
    case "USER_LOGOUT":
      return { ...state, isLogged: false };
    case "USER_RESET":
      return initialState;
    default:
      return state;
  }
};

const authReducer = combineReducers({
  user: userReducer,
});

export default authReducer;
