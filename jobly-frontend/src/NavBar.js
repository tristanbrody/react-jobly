import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ data }) {
  return (
    <nav>
      {data.map(d => {
        return (
          <NavLink exact to={d.path}>
            {d.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default NavBar;
