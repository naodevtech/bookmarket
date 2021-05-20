import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import api from "../../utils/api";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = await api.post("/login", {
      email: "yoram@gmail.com",
      password: "Helloworld94!",
    });
    console.log(result);
    if (result.status === 200) {
      dispatch({ type: "USER_LOGIN_SUCCESS" });
      return history.push("/");
    } else {
      dispatch({ type: "USER_LOGIN_WRONG" });
    }
  };
  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleSubmit}>Connexion</button>
    </div>
  );
};

export default Login;
