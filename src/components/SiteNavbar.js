import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function SiteNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar transparent-navbar" // custom class
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src="/images/logo.png" alt="Priya Apex Logo" className="me-2" height="40" />
          Priya Apex Designs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Nav.Link href="#about-us" className="text-white">About Us</Nav.Link>
            <Nav.Link href="#skills" className="text-white">Skills We Use</Nav.Link>
            <Nav.Link href="#work-with-us" className="text-white">Work With Us</Nav.Link>
            <Nav.Link href="#services" className="text-white ">Services</Nav.Link>
            <Nav.Link href="#contact-us" className="text-white">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNavbar;
