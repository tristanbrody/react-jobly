import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import loggedInContext from "./loggedInContext";
import JoblyApi from "./api";
import "./Login.css";

function Login() {
  const { loggedIn, toggleLoggedIn } = useContext(loggedInContext);
  const history = useHistory();
  useEffect(() => {
    if (loggedIn) history.push("/profile");
  }, [loggedIn, history]);
  const handleLogin = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);
    JoblyApi.login(values)
      .then(res => {
        toggleLoggedIn(true);
        localStorage.setItem("userToken", res);
        history.push("/profile");
        JoblyApi.token = res;
      })
      .catch(err => console.log(`the error is ${err}`));
  };
  return (
    <div className="top-container">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin} className="loginForm">
          <label id="username">username</label>
          <input class="input-LoginForm" name="username" type="text"></input>
          <label class="input-LoginForm" id="password">
            Password
          </label>
          <input
            class="input-LoginForm"
            name="password"
            type="password"
          ></input>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
