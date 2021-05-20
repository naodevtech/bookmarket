import React, { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const appState = useSelector((state) => state);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (Cookies.get("auth-cookie")) {
      return history.push("/");
    }
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(appState);
        if (appState.app.isLogged) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
