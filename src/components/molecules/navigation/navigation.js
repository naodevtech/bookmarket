import React from "react";
import { Link } from "react-router-dom";

import "./_navigation.scss";
import Logo from "../../../assets/logos/logo_bookstore.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </nav>
  );
};

export default Nav;
