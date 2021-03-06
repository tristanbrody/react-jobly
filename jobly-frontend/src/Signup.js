import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import loggedInContext from "./loggedInContext";
import JoblyApi from "./api.js";

function Signup() {
  const history = useHistory();
  const { loggedIn, toggleLoggedIn } = useContext(loggedInContext);
  if (loggedIn) history.push("/profile");
  const handleRegistration = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    JoblyApi.signup(JSON.stringify(values)).then(token => {
      localStorage.setItem("userToken", token);
      toggleLoggedIn(true);
      JoblyApi.token = token;
    });
  };
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleRegistration}>
        <label id="username">username</label>
        <input name="username" type="text"></input>
        <label id="password">Password</label>
        <input name="password" type="password"></input>
        <label id="firstName">First name</label>
        <input name="firstName" type="text"></input>
        <label id="lastName">Last name</label>
        <input name="lastName" type="text"></input>
        <label id="email">Email address</label>
        <input name="email" type="email"></input>
        <button>submit</button>
      </form>
    </div>
  );
}

export default Signup;
