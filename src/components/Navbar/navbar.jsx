

import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
import {Link, NavLink} from "react-router-dom"

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
              <NavLink to="/categoria/1">Libros</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/2">E-books</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/3">Audio Libros</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}


export default NavBar