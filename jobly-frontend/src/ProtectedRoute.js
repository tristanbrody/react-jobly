import React, { useContext } from "react";
import signedInContext from "./loggedInContext";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const { loggedIn, toggleLoggedIn } = useContext(signedInContext);
  return (
    <Route
      {...rest}
      render={props => {
        if (loggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/login" }} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;

// can also do something like

// const history = useHistory();

// useEffect(() => {
//   if (!loggedIn) {
//     history.push("/home");
//   }
// }, [loggedIn, history]);
