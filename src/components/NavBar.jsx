import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { signOut } from "../actions/authActions";

const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

 
  const handleLogout = () => {
    console.log("logging out...")
    dispatch(signOut());
  };

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="me-2" src="src\assets\img\Logo.png" width="80px" alt="Logo" />
          <span className="text-primary">My</span>
          <span>Tinerary</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/">
              <i className="fa-solid fa-house"></i>
              <b> Home</b>
            </Nav.Link>
            <Nav.Link as={Link} to="cities">
              <i className="fa-solid fa-map"></i>
              <b> Cities</b>
            </Nav.Link>
            {isAuthenticated ? (
              <Nav.Link onClick={handleLogout} className="btn btn-secondary bg-primary ms-2">
                <i className="fas fa-sign-out-alt"></i>
                <b> Logout</b>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="login" className="btn btn-secondary bg-primary ms-2">
                <i className="fas fa-user"></i>
                <b> Login</b>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
