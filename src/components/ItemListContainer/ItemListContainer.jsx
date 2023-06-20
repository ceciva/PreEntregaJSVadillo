import "./ItemListContainer.css"
import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../itemList/itemList";
const ItemListCOntainer = ({greeting}) => {
  const [productos, setProductos ] = useState([]);
  
  useEffect( () => {
    getProductos()
    .then(respuesta => setProductos(respuesta))
    .catch(error => console.log(error))

  },[])
  return (
    <>
      <h2>{greeting}</h2>
      <ItemList productos = {productos}/>
    </>  



    
  )
}

export default ItemListCOntainer