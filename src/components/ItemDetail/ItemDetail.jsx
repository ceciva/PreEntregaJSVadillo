import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';


const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const{agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);
    // console.log("Productos agregados: "+ cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }
  return (
    
    <div>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} alt= {nombre}/>
          <Card.Body>
            <Card.Title>Nombre: {nombre}</Card.Title>
            <h3>Precio: $ {precio}</h3>
            <h3>ID: {id}</h3>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum voluptate porro obcaecati aspernatur, adipisci quam perferendis quod, vel numquam cumque incidunt commodi officiis eum nisi quas vitae nam eligendi.
            </Card.Text>
            {
              agregarCantidad > 0 ? (<Link to= "/cart"> Terminar compra</Link>): (<ItemCount inicial ={1} stock= {stock} funcionAgregar = {manejadorCantidad}/>) 
            }
            <p>Unidades disponibles: {stock}</p>
            
          </Card.Body>
        </Card>
      

    </div>
  )
}

export default ItemDetail