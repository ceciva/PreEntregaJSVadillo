import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Button, Card} from "react-bootstrap";

const CartItem = ({item, cantidad, img}) => {
    const {eliminarProducto} = useContext(CarritoContext);
  return (
    <div>
        
        <h4> {item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: $ {item.precio}</p>
        <Button variant= "outline-info" onClick={()=> eliminarProducto(item.id)}>Eliminar</Button>
        <hr />
    </div>
  )
}

export default CartItem