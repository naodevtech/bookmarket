import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./_navigation.scss";
import Logo from "../../../assets/logos/logo_bookstore.png";

const Nav = () => {
  const appState = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </nav>
  );
};

export default Nav;
