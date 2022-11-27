import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav``;

export const NavLink = styled(Link)`
  color: #f2e7d5;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: white;
    text-decoration: underline;
    padding: 5px;
    border: 1px solid #f2e7d5;
  }
`;

export const NavMenu = styled.div`
display: flex;
font-family: Lato;
align-items: center;
background-color: #393E46;
padding: 10px;
border: 5px solid #393E46 ;
  }
`;
