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
      <ul>
        <li>
          <Link to="/login">Connexion</Link>
        </li>
        <li>
          <Link to="/register">
            <button>Inscription</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
