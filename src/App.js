import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "./components/layout/layout";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import ProtectedRoute from "./utils/protectedRoute";
import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "APP_INIT" });
    dispatch({ type: "APP_READY" });
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <ProtectedRoute path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
