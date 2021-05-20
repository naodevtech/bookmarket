import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Home() {
  const appState = useSelector((state) => state);
  let history = useHistory();

  useEffect(() => {
    console.log("home");
  }, []);

  const handleLogout = () => {
    Cookies.remove("auth-cookie", {
      path: "/",
      domain: "http://localhost:3001/",
    });
  };

  return (
    <div className="Homepage">
      <h1>{!appState.loading ? "Welcome" : "loading..."}</h1>
      <button onClick={handleLogout}>Deconnexion</button>
    </div>
  );
}

export default Home;
