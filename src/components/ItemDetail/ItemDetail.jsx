import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import '../Item/Item.css'

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const{agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);
    
    const item = {id, nombre, precio, img};
    agregarProducto(item, cantidad);
  }
  return (
    
    <div>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="fotoTapa"src={img} alt= {nombre}/>
          <Card.Body className= "text-center">
            <Card.Title>Nombre: {nombre}</Card.Title>
            <h4>Precio: $ {precio}</h4>
            <h4>ID: {id}</h4>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Card.Text>
            {
              agregarCantidad > 0 ? (<Link to= "/cart"aciveClassName="active"> Terminar compra</Link>): (<ItemCount inicial ={1} stock= {stock} funcionAgregar = {manejadorCantidad}/>) 
            }
            <p>Unidades disponibles: {stock}</p>
            
          </Card.Body>
        </Card>
      

    </div>
  )
}

export default ItemDetail