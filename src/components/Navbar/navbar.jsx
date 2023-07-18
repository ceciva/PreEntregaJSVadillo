

import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
import {Link, NavLink} from "react-router-dom"
import { Button } from "react-bootstrap";

const NavBar = () =>{
    return (

    <Navbar expand="md" className="navBar" sticky = "top">
      <Container>
        <Link to="/">
          <Navbar.Brand >Todo Florencia Bonelli</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <li>
              <NavLink to="/categoria/1" activeClassName="active">
                <Button variant= "outline-info text-black">Libros</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/categoria/2" activeClassName="active">
                <Button variant= "outline-info text-black">E-books</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/categoria/3">
                <Button variant= "outline-info text-black">Audio Libros</Button>
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}


export default NavBar