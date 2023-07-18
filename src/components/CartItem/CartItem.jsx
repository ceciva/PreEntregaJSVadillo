import { useContext } from "react";
import './CartItem.css';
import { CarritoContext } from "../../context/CarritoContext"
import { Button, Table } from "react-bootstrap";


const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);
    return (
        
            <Table striped bordered hover variant= "dark" size= "sm" >
                <thead>
                    <tr>
                        <th className="th-lg">Código</th>
                        <th className="th-lg">Foto Libro</th>
                        <th className="th-lg-percent">Título</th>
                        <th className="th-lg">Cantidad</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>{item.id}</td>
                        <td><img className= 'fotoElegidos' src= {item.img} alt = "{item.nombre}"></img></td>
                        <td>{item.nombre}</td>
                        <td>{cantidad}</td>
                        <td>$ {item.precio}</td>
                        <td><Button variant= "outline-info "onClick={()=> eliminarProducto(item.id)}>Eliminar</Button></td>
                    </tr>    
                </tbody>
            </Table>
                       
        
    );
}

export default CartItem