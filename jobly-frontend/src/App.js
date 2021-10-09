import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import loggedInContext from "./loggedInContext";

function App() {
  const [loggedIn, toggleLoggedIn] = useState(false);
  if (localStorage.getItem("userToken" !== null)) {
    toggleLoggedIn(true);
  }
  console.log(`logged in val is ${loggedIn}`);
  return (
    <loggedInContext.Provider value={{ loggedIn, toggleLoggedIn }}>
      <Routes>
        <div className="App"></div>
      </Routes>
    </loggedInContext.Provider>
  );
}

export default App;
