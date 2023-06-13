
import './navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Navbar } from 'react-bootstrap'
export const NavBar = () =>{
    return (
        <header>
            <h1>Todo BB.com</h1>
            <nav>
                <ul>
                    <li>Ropa</li>
                    <li>Accesorios</li>
                    <li>Rodados</li>
                </ul>
            </nav>    
            <CartWidget/>
        </header>
    )
}
export default NavBar