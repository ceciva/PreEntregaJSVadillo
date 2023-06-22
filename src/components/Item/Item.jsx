
import Button from 'react-bootstrap/Button';
import "./Item.css"
import Card from 'react-bootstrap/Card';

const Item = ({id, nombre, precio,img})=> {
    return (
        
        <div className='d-sm-inline-flex'>
            <Card className= 'card text-center'>
                <Card.Img className= "fotoTapa" src= {img} alt= {nombre}/>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>Precio: $ {precio}</Card.Text>
                    <Card.Text>Código: {id}</Card.Text>
                    <Button variant= "outline-info" size="lg" className="boton">Ver detalles</Button>
                </Card.Body>
            </Card>
        </div>    
    );
}

export default Item;


