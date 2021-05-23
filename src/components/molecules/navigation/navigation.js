import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import api from "../../../utils/api";

import "./_navigation.scss";
import Logo from "../../../assets/logos/logo_bookstore.png";

const Nav = () => {
  const appState = useSelector((state) => state);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleLogout = async (e) => {
    e.preventDefault();
    let result = await api.post("/logout");
    if (result.status === 200) {
      dispatch({ type: "USER_LOGOUT" });
      return history.push("/login");
    }
  };

  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div>
        {!appState.auth.user.isLogged ? null : (
          <div>
            <h3>👋 Hey, {appState?.auth?.user?.values?.name}</h3>
            <button onClick={handleLogout}>Deconnexion</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
