import React from "react";

function Signup() {
  const handleRegistration = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    console.log(JSON.stringify(values));
    return fetch("http://localhost:3001/auth/register", {
      method: "POST",
      body: JSON.stringify(values),
    }).then(data => console.dir(data));
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
