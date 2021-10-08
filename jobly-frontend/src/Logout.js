import React from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api.js";

function Logout() {
  let history = useHistory();
  if (!localStorage.getItem("userToken")) history.push("/login");
  setTimeout(() => localStorage.removeItem("userToken"), 1000);
  return <div>You've been logged out</div>;
}

export default Logout;
