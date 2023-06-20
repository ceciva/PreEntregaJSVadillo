
import './navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Navbar } from 'react-bootstrap'
export const NavBar = () =>{
    return (
        <header>
            <h1>Todo Florencia Bonelli.com</h1>
            <nav>
                <ul>
                    <li>Libros</li>
                    <li>e books</li>
                    <li>Audio libros</li>
                </ul>
            </nav>    
            <CartWidget/>
        </header>
    )
}
export default NavBar