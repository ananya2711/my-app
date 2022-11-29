// Navbar creation
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <p
            style={{
              color: "#F2E7D5",
              border: "1px solid #F2E7D5",
              fontSize: "22px",
              padding: "4px 10px",
              margin: "0px 20px",
            }}
          >
            H
          </p>
          <span
            style={{
              textAlign: "center",
              width: "90%",
              color: "#F2E7D5",
              alignContent: "center",
              alignSelf: "center",
            }}
          >
            {" "}
            Hacker News Mini Clone
          </span>
          <NavLink to="/" activeStyle>
            Main
          </NavLink>
          <p style={{ width: "2%" }}></p>
          <NavLink to="/search" activeStyle>
            Search
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
