/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand  as={Link} to="/">
          <img className="me-2" src="src/assets/img/logo.png" width="80px" alt="Logo"  />
          <span className="text-primary ">My</span>
          <span >Tinerary</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/"><b>Home</b></Nav.Link>
            <Nav.Link as={Link} to="cities"><b>Cities</b></Nav.Link>
            <Nav.Link as={Link} to="login" className="btn btn-secondary bg-primary  ms-2">
              <i className="fas fa-user"></i> <b>Login</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
