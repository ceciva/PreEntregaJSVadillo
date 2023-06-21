
import './navbar.css'
import CartWidget from "../CartWidget/CartWidget"

export const NavBar = () =>{
    return (
        <navBar>
            <h1>Todo Florencia Bonelli.com</h1>
            <nav>
                <ul>
                    <li>Libros</li>
                    <li>e books</li>
                    <li>Audio libros</li>
                </ul>
            </nav>    
            <CartWidget/>
        </navBar>
    )
}
export default NavBar