import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <img
        alt="not found"
        src={`https://images.unsplash.com/photo-1519885277449-12eee5564d68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80`}
      ></img>
      <p>
        return to <Link to="/login">home</Link>
      </p>
    </div>
  );
}

export default NotFound;
