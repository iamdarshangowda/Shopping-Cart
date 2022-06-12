import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  Navbar,
  FormControl,
  Container,
  Dropdown,
  Badge,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/" className="link">
            Shopping
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: "400px" }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25" />
              <Badge bg="secondary" className="m-1">
                0
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: "360" }}>
              <span style={{ padding: "10" }}>Cart is Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
