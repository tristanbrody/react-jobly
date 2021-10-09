import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import loggedInContext from "./loggedInContext";

function Profile() {
  const history = useHistory();
  const { loggedIn } = useContext(loggedInContext);
  if (!loggedIn) history.push("/login");
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}

export default Profile;
