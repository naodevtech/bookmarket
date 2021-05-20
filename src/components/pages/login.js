import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import api from "../../utils/api";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [handleError, setHandleError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "USER_FETCH" });
    try {
      let result = await api.post("/login", {
        email: "yoramdw@gmail.com",
        password: "Helloworld94!",
      });
      dispatch({ type: "USER_LOGIN_SUCCESS" });
      dispatch({ type: "USER_SET", payload: result.data.data });
      history.push("/");
    } catch (err) {
      setHandleError(err.response?.data?.message);
      dispatch({ type: "USER_RESET" });
    }
  };
  return (
    <div>
      <h1>Login page</h1>
      {handleError ? <h3>{handleError}</h3> : null}
      <button onClick={handleSubmit}>Connexion</button>
    </div>
  );
};

export default Login;
