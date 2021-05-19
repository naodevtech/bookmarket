import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const appState = useSelector((state) => state);
  useEffect(() => {
    console.log("home");
  }, []);

  return (
    <div className="Homepage">
      <h1>{appState.init ? "Welcome" : "loading..."}</h1>
    </div>
  );
}

export default Home;
