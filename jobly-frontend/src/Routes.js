import React, { useContext } from "react";
import loggedInContext from "./loggedInContext";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";
import JobCard from "./JobCard";
import {
  BrowserNavLinkr,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter,
  Route,
} from "react-router-dom";

import NavBar from "./NavBar";

import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Logout from "./Logout";
import Job from "./Job";

function Routes(signedIn) {
  const { loggedIn } = useContext(loggedInContext);
  const navBarData = [
    { name: "companies", path: "/companies" },
    { name: "jobs", path: "/jobs" },
    {
      name: "login",
      path: `/login`,
      show: loggedIn ? false : true,
    },
    {
      name: "signup",
      path: "/signup",
      show: loggedIn ? false : true,
    },
    {
      name: "profile",
      path: `/profile`,
      show: loggedIn ? true : false,
    },
    {
      name: "logout",
      path: `/logout`,
      show: loggedIn ? true : false,
    },
    {
      name: "companies",
      path: `/companies`,
      show: loggedIn ? true : false,
    },
    {
      name: "jobs",
      path: `/jobs`,
      show: loggedIn ? true : false,
    },
  ];
  return (
    <BrowserRouter>
      <nav>
        <NavBar data={navBarData} />
      </nav>
      <Switch>
        <Route exact path="/companies">
          <ProtectedRoute component={Companies} />
        </Route>
        <Route exact path="/companies/:company">
          <ProtectedRoute component={Company} />
        </Route>
        <Route exact path="/jobs">
          <ProtectedRoute component={Jobs} />
        </Route>
        <Route exact path="/jobs/:job">
          <ProtectedRoute component={Job} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
