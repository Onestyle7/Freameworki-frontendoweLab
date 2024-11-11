import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBarMenu({ items }) {
  return (
    <Navbar expand="lg" className="bg-dark text-light py-3">
      <Navbar.Brand href="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nqWiV-iJSo18CDvu10eQApMGW-Tt_YXSVw&s"
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-top me-2"
        />
        WSEI
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {items.map((item) => (
            <Nav.Link href={item.url} key={item.id} className="text-light">
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBarMenu;
