import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function SiteNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar sticky-top navbar-dark bg-dark" // Dark mode classes
    >
      <Container>
        {/* Navbar Brand with Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src="/images/logo.png" alt="Priya Apex Logo" className="me-2" />
          Priya Apex Design
        </Navbar.Brand>
        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Navigation Links */}
          <Nav className="ms-auto">
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#skills">Skills We Use</Nav.Link>
            <Nav.Link href="#work-with-us">Work With Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNavbar;
