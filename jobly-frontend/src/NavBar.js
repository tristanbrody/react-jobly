import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ data }) {
  const filteredLinks = data.filter(d => d.show === true);
  return (
    <nav>
      {filteredLinks.map(d => {
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
