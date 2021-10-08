import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";

function App() {
  const [signedIn, toggleSignedIn] = useState(false);
  if (localStorage.getItem("userToken" !== null)) {
    toggleSignedIn(true);
  }
  console.log(signedIn);
  return (
    <div className="App">
      <Routes signedIn={signedIn} />
    </div>
  );
}

export default App;
