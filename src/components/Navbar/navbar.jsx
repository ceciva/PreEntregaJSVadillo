

import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
export const NavBar = () =>{
    return (

    <Navbar expand="md" className="navBar" sticky = "top">
      <Container>
        <Navbar.Brand href="#home">Todo Florencia Bonelli</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link">Libros</Nav.Link>
            <Nav.Link href="#link">E-books</Nav.Link>
            <Nav.Link href="#link">Audio Libros</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}


        // <navBar>
        //     <h1>Todo Florencia Bonelli.com</h1>
        //     <nav>
        //         <ul>
        //             <li>Libros</li>
        //             <li>e books</li>
        //             <li>Audio libros</li>
        //         </ul>
        //     </nav>    
        //     <CartWidget/>
        // </navBar>
    

export default NavBar