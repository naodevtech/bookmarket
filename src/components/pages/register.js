import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import api from "../../utils/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [handleError, setHandleError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "USER_FETCH" });
    try {
      let result = await api.post("/register", {
        name: name,
        email: email,
        password: password,
      });
      dispatch({ type: "USER_FETCH_SUCCESS" });
      dispatch({ type: "USER_SET", payload: result.data.data });
      history.push("/");
    } catch (err) {
      setHandleError(err.response?.data?.message);
      dispatch({ type: "USER_RESET" });
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      {handleError ? <h3>{handleError}</h3> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          placeholder="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Register;
