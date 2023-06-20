

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: $ {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi odit ut accusantium vel commodi ea, praesentium non. Id est eligendi eius odio. Officiis neque, amet velit possimus aspernatur nostrum iure?</p>
        <img src= {img} alt= {nombre}/>
    </div>
  )
}

export default ItemDetail