
import './CartWidget.css'

const CartWidget = () => {
  const imgCarrito= "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
    <div className= "carritoNro">
      <img className= 'carrito'src={imgCarrito} alt= "carrito compras"/>
      <strong>10</strong>
    </div>
  )
}

export default CartWidget