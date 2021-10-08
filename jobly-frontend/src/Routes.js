import React from "react";
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

function NavLinks(signedIn) {
  const navBarData = [
    { name: "companies", path: "/companies" },
    { name: "jobs", path: "/jobs" },
    {
      name: "login",
      path: `/login`,
    },
    {
      name: "signup",
      path: "/signup",
    },
    {
      name: "profile",
      path: `/profile`,
    },
    {
      name: "logout",
      path: `/logout`,
    },
  ];
  return (
    <BrowserRouter>
      <Switch>
        <nav>
          <NavBar data={navBarData} />
          <Route exact path="/companies">
            <Companies />
          </Route>
          <Route exact path="/companies/:color">
            <Company />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
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
        </nav>
      </Switch>
    </BrowserRouter>
  );
}

export default NavLinks;
