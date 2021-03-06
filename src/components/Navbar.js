import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import { ButtonContainer } from "./styling/Button";
import { NavWraper } from "./styling/NavWraper";

export default class Navbar extends Component {
  render() {
    return (
      <NavWraper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
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
      </NavWraper>
    );
  }
}
