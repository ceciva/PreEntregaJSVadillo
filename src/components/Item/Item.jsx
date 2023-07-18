

import { Button } from "react-bootstrap";
import "./Item.css"
import Card from 'react-bootstrap/Card';
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
                    <Link to={`/item/${id}`} activaClassName= "active">
                        <Button variant= "outline-info text-black">Ver Detalles</Button>  
                    </Link>
                    
                    <p>Cantidad disponibles: {stock}</p>
                </Card.Body>
            </Card>
        </div>    
    );
}

export default Item


