import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fas fa-cart-plus" />
            My cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}

//styling using styled components
const ButtonContainer = styled.button`
  text-transform: capitalize;
  color: white;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.05s ease-in-out;
  &:hover {
    background-color: var(--lightBlue);
  }
`;
