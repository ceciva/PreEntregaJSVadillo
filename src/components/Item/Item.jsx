import React from 'react'
import "./Item.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id, nombre, precio,img})=> {
    return (
        <div className= 'flexContainer'>
            <Card className= 'card'>
                <Card.Img className= "fotoTapa" src= {img} alt= {nombre}/>
                <Card.Body>
                    <Card.Title className= 'center'>{nombre}</Card.Title>
                    <Card.Text className= 'center'>Precio: $ {precio}</Card.Text>
                    <Card.Text className= 'center'>Código: {id}</Card.Text>
                    <button className="boton">Ver detalles</button>
                </Card.Body>
            </Card>
        </div>    
    );
}

export default Item;
// const Item = ({id,nombre,precio,img}) => {
//   return (
//     <div>
//         <img src = {img} alt= {nombre} />
//         <h3>Nombre: {nombre}</h3>
//         <p>Precio: {precio} </p>
//         <p>Id: {id}</p>
//         <button> Ver detalles </button>
//     </div>
//   )
// }

// export default Item