import React, { useContext } from "react";
import loggedInContext from "./loggedInContext";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api.js";

function Logout() {
  const { loggedIn, toggleLoggedIn } = useContext(loggedInContext);
  let history = useHistory();
  if (!loggedIn) history.push("/login");
  setTimeout(() => {
    toggleLoggedIn(false);
    localStorage.removeItem("userToken");
  }, 1000);
  return <div>You've been logged out</div>;
}

export default Logout;
