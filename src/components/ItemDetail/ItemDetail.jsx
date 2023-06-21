

import Card from 'react-bootstrap/Card';

const ItemDetail = ({id, nombre, precio, img}) => {
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
            
          </Card.Body>
        </Card>
      

    </div>
  )
}

export default ItemDetail