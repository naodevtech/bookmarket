import { combineReducers } from "redux";

//Le state par défault
const initialState = {
  name: "BookMarket",
  init: false,
  loading: false,
  isFetching: false,
  isSuccess: false,
  isLogged: false,
};

const initialStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APP_INIT":
      return { ...state, loading: true };
    case "APP_READY":
      return { ...state, loading: false, init: true };
    case "USER_LOGIN_REQUEST":
      return { ...state, isFetching: true, isSuccess: false };
    case "USER_LOGIN_WRONG":
      return { ...state, isFetching: false, isSuccess: false };
    case "USER_LOGIN_SUCCESS":
      return { ...state, isFetching: false, isSuccess: true, isLogged: true };
    case "USER_LOGGED":
      return { ...state, isLogged: true };
    case "USER_LOGOUT":
      return { ...state, isLogged: false };
    case "APP_RESET":
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ app: initialStateReducer });

export default rootReducer;
