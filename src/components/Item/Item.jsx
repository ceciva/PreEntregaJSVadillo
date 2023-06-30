

import "./Item.css"
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
const Item = ({id, nombre, precio,img, stock})=> {
    return (
        
        <div className='d-sm-inline-flex'>
            <Card className= 'card text-center'>
                <Card.Img className= "fotoTapa" src= {img} alt= {nombre}/>
                <Card.Body className = "textoCard">
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>Precio: $ {precio}</Card.Text>
                    <Card.Text>Código: {id}</Card.Text>
                    <Link to={`/item/${id}`} > Ver Detalles </Link>
                    <br></br><br></br>
                    
                    <ItemCount></ItemCount>
                    <p>Cantidad de unidades disponibles: {stock}</p>
                </Card.Body>
            </Card>
        </div>    
    );
}

export default Item


