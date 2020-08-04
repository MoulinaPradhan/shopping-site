import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Head extends React.Component {
  render() {
    return (
      <div>
        <Navbar expand="md" bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand>
              E-m
              <img
                id="at-symbol"
                src="https://image.flaticon.com/icons/svg/2658/2658131.svg"
              />
              rt
            </Navbar.Brand>
          </Link>
          <Nav className="mr-auto">
            <Nav.Link>
      <Link to="/login">Login </Link>
            </Nav.Link>

            <Nav.Link >  <Link to="/signup"> Signup</Link></Nav.Link>
          </Nav>
          <Form id="search" inline>
            <FormControl
              id="search-box"
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Head;
