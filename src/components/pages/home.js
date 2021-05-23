import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../utils/api";

function Home() {
  const appState = useSelector((state) => state);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        await api.get("/books");
      } catch (err) {}
    }
    fetchData();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    let result = await api.post("/logout");
    if (result.status === 200) {
      dispatch({ type: "USER_LOGOUT" });
      return history.push("/login");
    }
  };

  return (
    <div className="Homepage">
      <h1>
        {!appState.loading
          ? `Welcome ${appState.auth.user.values.name}`
          : "loading..."}
      </h1>
      <button onClick={handleLogout}>Deconnexion</button>
    </div>
  );
}

export default Home;
