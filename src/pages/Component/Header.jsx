import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../api/Auth";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const updateNavbarState = () => {
    const isScrolled = window.scrollY > 10;
    const isHome = location.pathname === "/";

    if ((isScrolled && isHome) || !isHome) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    updateNavbarState();

    const handleScroll = () => {
      updateNavbarState();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg={scrolled ? "green-700" : "transparent"}
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand>
          <Container fluid>
            <Link to="/" className="text-decoration-none text-reset h5">
              <img
                src="/public/Logo.svg"
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-top me-1"
              />
            </Link>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <Nav.Link classname="header">
              <Link to="/" className="text-decoration-none text-reset">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link classname="header">
              <Link to="/continent" className="text-decoration-none text-reset">
                Continent
              </Link>
            </Nav.Link>

            <Nav.Link lassname="header">
              <Link to="/about" className="text-decoration-none text-reset">
                About
              </Link>
            </Nav.Link>
          </Nav>
          <Button variant="success" onClick={handleLogout}>
            Log Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
