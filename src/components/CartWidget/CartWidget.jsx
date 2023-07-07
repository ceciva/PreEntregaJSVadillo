import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);
  const imgCarrito= "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  
  return (
    <div>
      <Link to ="/cart">
      <img className= 'carrito'src={imgCarrito} alt= "carrito compras"/>
      {
        cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
      }
      </Link>
  
    </div>
  )
}

export default CartWidget