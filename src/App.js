import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./components/layout/layout";
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import Register from "./components/pages/register/register";
import ProtectedRoute from "./utils/protectedRoute";
import api from "./utils/api";

import "./App.scss";
import CategoryBooks from "./components/pages/categoryBooks/categoryBooks";

function App() {
  const appState = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    const appInit = async () => {
      dispatch({ type: "APP_INIT" });
      try {
        dispatch({ type: "USER_FETCH" });
        let result = await api.get("/me");
        dispatch({ type: "USER_SET", payload: result.data.data });
      } catch (err) {
        dispatch({ type: "USER_RESET" });
      }
      dispatch({ type: "APP_READY" });
    };
    appInit();
  }, [dispatch]);

  if (!appState.init) return <div>Loading...</div>;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/category/:id/books"
              component={CategoryBooks}
            />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
