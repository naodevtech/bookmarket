import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import api from "../../../utils/api";
import "./_login.scss";
import Logo from "../../../assets/logos/logo_bookstore.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  // const [handleError, setHandleError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "USER_FETCH" });
    try {
      let result = await api.post("/login", {
        email: email,
        password: password,
      });
      console.log(result);
      dispatch({ type: "USER_FETCH_SUCCESS" });
      dispatch({ type: "USER_SET", payload: result.data.data });
      history.push("/");
    } catch (err) {
      dispatch({ type: "USER_FETCH_WRONG" });
      // setHandleError(err.response?.data?.message);
      dispatch({ type: "USER_RESET" });
    }
  };

  return (
    <div className="container_form">
      <div>
        <img src={Logo} alt="logo" />
        <h2>Changez votre vision de la lecture avec notre solution digitale</h2>
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
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
        <button className="btn btn_login" type="submit">
          Connexion
        </button>
        <button
          className="btn btn_register"
          onClick={() => history.push("/register")}
        >
          Inscription
        </button>
      </form>
    </div>
  );
};

export default Login;
