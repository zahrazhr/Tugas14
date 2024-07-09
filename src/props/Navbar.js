import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { toggleTheme } from '../store';

const AppNavbar = ({ brand, links }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg={theme} variant={theme} expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home">{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((link, index) => (
              <LinkContainer to={link.href} key={index} onClick={handleCollapse}>
                <Nav.Link>{link.text}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
          <Button variant="outline-light" onClick={() => dispatch(toggleTheme())}>
            Toggle Theme
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
