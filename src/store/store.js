import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./root";

const loggerMiddleware = createLogger();

export const createStorage = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(loggerMiddleware)
  );
};
